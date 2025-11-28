// Resource request and download token management
import * as fs from 'node:fs';
import * as path from 'node:path';
import type { Prisma, PrismaClient } from '@prisma/client';
import { ResourceRequestStatus } from '@prisma/client';
import { config } from '../config';
import { prisma } from '../lib/prisma';
import { encryptEmail, hashEmail } from '../utils/crypto';
import { addMinutesUTC, getCurrentUTCDate, isBeforeUTC } from '../utils/dates';
import { BadRequestError, NotFoundError, RateLimitError } from '../utils/http-errors';
import { createDownloadToken, hashToken, verifyDownloadToken } from '../utils/tokens';
import { sendDownloadLinkEmail } from './email-service';
import { getRejectionReason, shouldRejectEmail, validateEmail } from './email-validation-service';

// Type for Prisma transaction client
type PrismaTransaction = Omit<
  PrismaClient,
  '$connect' | '$disconnect' | '$on' | '$transaction' | '$use' | '$extends'
>;

const DEFAULT_METADATA_KEYS = ['userAgent', 'ip'] as const;

export type CreateResourceRequestInput = {
  assetIdentifier: string;
  email: string;
  consentVersion: string;
  requestIp?: string;
  userAgent?: string;
  metadata?: Record<string, unknown>;
};

type ConsumeTokenResult = {
  filePath: string;
  mimeType: string;
  fileName: string;
  requestId: string;
  assetId: string;
  downloadCount: number;
};

export async function createResourceRequest({
  assetIdentifier,
  email,
  consentVersion,
  requestIp,
  userAgent,
  metadata,
}: CreateResourceRequestInput) {
  const emailValidation = await validateEmail(email);

  if (shouldRejectEmail(emailValidation)) {
    throw new BadRequestError(getRejectionReason(emailValidation) || 'Invalid email address');
  }

  const asset = await prisma.resourceAsset.findFirst({
    where: {
      OR: [{ id: assetIdentifier }, { slug: assetIdentifier }],
      active: true,
    },
  });

  if (!asset) {
    throw new NotFoundError('Resource asset not found');
  }

  const emailHash = hashEmail(email);
  const windowStart = addMinutesUTC(getCurrentUTCDate(), -config.REQUEST_WINDOW_MINUTES);
  const existingCount = await prisma.resourceRequest.count({
    where: {
      emailHash,
      createdAt: {
        gte: windowStart,
      },
    },
  });

  if (existingCount >= config.MAX_REQUESTS_PER_WINDOW) {
    throw new RateLimitError('Request limit reached for this email');
  }

  const trackedMetadata: Record<string, unknown> = {
    ...metadata,
    userAgent,
    ip: requestIp,
  };
  const metadataPayload = Object.fromEntries(
    Object.entries(trackedMetadata).filter(([, value]) => value !== undefined)
  ) as Prisma.JsonObject;

  // Encrypt email before storing
  const emailEncrypted = Buffer.from(encryptEmail(email, config.EMAIL_ENCRYPTION_KEY));

  const { request, token, expiresAt } = await prisma.$transaction(async (tx: PrismaTransaction) => {
    const createdRequest = await tx.resourceRequest.create({
      data: {
        assetId: asset.id,
        emailHash,
        emailEncrypted,
        consentVersion,
        requestIp: requestIp ?? null,
        status: ResourceRequestStatus.PENDING_VERIFICATION,
        metadata: metadataPayload,
      },
    });

    const downloadToken = createDownloadToken(createdRequest.id, asset.id);

    await tx.resourceToken.create({
      data: {
        requestId: createdRequest.id,
        tokenHash: hashToken(downloadToken.token),
        expiresAt: downloadToken.expiresAt,
        maxUses: 1,
      },
    });

    const updatedRequest = await tx.resourceRequest.update({
      where: { id: createdRequest.id },
      data: {
        status: ResourceRequestStatus.READY_TO_SEND,
      },
    });

    return {
      request: updatedRequest,
      token: downloadToken.token,
      expiresAt: downloadToken.expiresAt,
    };
  });

  const downloadUrl = `${config.API_BASE_URL}/api/resources/token/${encodeURIComponent(token)}/consume`;

  sendDownloadLinkEmail(email, downloadUrl, asset.title || asset.slug)
    .then(async () => {
      console.log(`Email sent successfully to ${email} for request ${request.id}`);
      await prisma.resourceRequest.update({
        where: { id: request.id },
        data: {
          status: ResourceRequestStatus.LINK_SENT,
          firstSentAt: getCurrentUTCDate(),
          lastSentAt: getCurrentUTCDate(),
        },
      });
    })
    .catch((error) => {
      console.error(`Failed to send email for request ${request.id}:`, error);
      console.error(`Error details:`, error.message || error);
      if (error.response) {
        console.error(`Resend API response:`, error.response);
      }
    });

  return {
    requestId: request.id,
    status: request.status,
    assetId: asset.id,
    expiresAt,
    devToken: config.isDevelopment ? token : undefined,
    metadata: Object.fromEntries(
      Object.entries(metadataPayload).filter(([key]) =>
        DEFAULT_METADATA_KEYS.includes(key as (typeof DEFAULT_METADATA_KEYS)[number])
      )
    ),
    validation: {
      provider: emailValidation.provider,
      isValid: emailValidation.isValid,
      isDisposable: emailValidation.isDisposable,
    },
  };
}

export async function consumeDownloadToken(rawToken: string): Promise<ConsumeTokenResult> {
  const payload = verifyDownloadToken(rawToken);
  const tokenHash = hashToken(rawToken);

  const tokenRecord = await prisma.resourceToken.findUnique({
    where: { tokenHash },
    include: {
      request: {
        include: {
          asset: true,
        },
      },
    },
  });

  if (!tokenRecord) {
    throw new BadRequestError('Token not found');
  }

  if (tokenRecord.requestId !== payload.requestId) {
    throw new BadRequestError('Token mismatch');
  }

  if (isBeforeUTC(tokenRecord.expiresAt, getCurrentUTCDate())) {
    throw new BadRequestError('Token expired');
  }

  if (tokenRecord.revokedAt) {
    throw new BadRequestError('Token revoked');
  }

  if (tokenRecord.useCount >= tokenRecord.maxUses) {
    throw new BadRequestError('Token already used');
  }

  const now = getCurrentUTCDate();

  const shouldRevoke = tokenRecord.useCount + 1 >= tokenRecord.maxUses;

  const { request } = await prisma.$transaction(async (tx: PrismaTransaction) => {
    await tx.resourceToken.update({
      where: { id: tokenRecord.id },
      data: {
        useCount: { increment: 1 },
        revokedAt: shouldRevoke ? now : tokenRecord.revokedAt,
      },
    });

    const updatedRequest = await tx.resourceRequest.update({
      where: { id: tokenRecord.requestId },
      data: {
        downloadCount: { increment: 1 },
        lastDownloadAt: now,
        status: shouldRevoke ? ResourceRequestStatus.FULFILLED : tokenRecord.request.status,
      },
      include: {
        asset: true,
      },
    });

    return { request: updatedRequest };
  });

  if (!request.asset) {
    throw new NotFoundError('Asset missing for request');
  }

  const resolvedPath = path.isAbsolute(request.asset.storageKey)
    ? request.asset.storageKey
    : path.resolve(process.cwd(), request.asset.storageKey);

  if (!fs.existsSync(resolvedPath)) {
    console.error('File not found:', {
      storageKey: request.asset.storageKey,
      resolvedPath,
      cwd: process.cwd(),
      exists: fs.existsSync(resolvedPath),
    });
    throw new NotFoundError(`Resource file is unavailable: ${resolvedPath}`);
  }

  const fileName = path.basename(resolvedPath);

  return {
    filePath: resolvedPath,
    mimeType: request.asset.mimeType,
    fileName,
    requestId: request.id,
    assetId: request.assetId,
    downloadCount: request.downloadCount,
  };
}
