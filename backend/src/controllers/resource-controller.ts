import { createReadStream, statSync } from 'node:fs';
import { pipeline } from 'node:stream';
import { promisify } from 'node:util';
import type { Request, Response } from 'express';
import { z } from 'zod';
import type { CreateResourceRequestInput } from '../services/resource-service';
import { consumeDownloadToken, createResourceRequest } from '../services/resource-service';
import { asyncHandler } from '../utils/asyncHandler';
import { BadRequestError } from '../utils/http-errors';

const streamPipeline = promisify(pipeline);

const resourceRequestSchema = z.object({
  email: z.string().email('Email address must be valid'),
  consentVersion: z.string().min(1, 'Consent version is required'),
  metadata: z.record(z.string(), z.unknown()).optional(),
});

export const requestResource = asyncHandler(async (req: Request, res: Response) => {
  const parsed = resourceRequestSchema.safeParse(req.body);

  if (!parsed.success) {
    throw new BadRequestError('Invalid request payload', parsed.error.flatten());
  }

  const { assetId } = req.params;

  if (!assetId) {
    throw new BadRequestError('Asset identifier required');
  }

  const payload: CreateResourceRequestInput = {
    assetIdentifier: assetId,
    email: parsed.data.email,
    consentVersion: parsed.data.consentVersion,
  };

  if (parsed.data.metadata) {
    payload.metadata = parsed.data.metadata;
  }

  if (req.ip) {
    payload.requestIp = req.ip;
  }

  const userAgent = req.get('user-agent');
  if (userAgent) {
    payload.userAgent = userAgent;
  }

  const result = await createResourceRequest(payload);

  return res.status(202).json({
    message: 'Request accepted',
    requestId: result.requestId,
    status: result.status,
    assetId: result.assetId,
    expiresAt: result.expiresAt.toISOString(),
    metadata: result.metadata,
    devToken: result.devToken,
  });
});

export const consumeToken = asyncHandler(async (req: Request, res: Response) => {
  const token = req.params.tokenId ?? (req.body as { token?: string })?.token;

  if (!token) {
    throw new BadRequestError('Download token is required');
  }

  const result = await consumeDownloadToken(token);
  const stats = statSync(result.filePath);
  const fileStream = createReadStream(result.filePath);

  res.setHeader('Content-Type', result.mimeType);
  res.setHeader('Content-Length', stats.size.toString());
  res.setHeader(
    'Content-Disposition',
    `attachment; filename="${encodeURIComponent(result.fileName)}"`
  );
  res.setHeader('Cache-Control', 'private, max-age=0, must-revalidate');

  await streamPipeline(fileStream, res);
});
