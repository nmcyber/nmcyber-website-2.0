// Download token generation and verification (JWT)
import { createHash, randomUUID } from 'node:crypto';
import jwt from 'jsonwebtoken';
import { config } from '../config';
import { addMinutesUTC, getCurrentUTCDate } from './dates';

export type DownloadTokenPayload = {
  tokenId: string;
  requestId: string;
  assetId: string;
};

export function createDownloadToken(requestId: string, assetId: string) {
  const tokenId = randomUUID();
  const expiresAt = addMinutesUTC(getCurrentUTCDate(), config.DOWNLOAD_TOKEN_TTL_MINUTES);
  const token = jwt.sign(
    {
      tokenId,
      requestId,
      assetId,
    },
    config.DOWNLOAD_TOKEN_SECRET,
    {
      expiresIn: config.DOWNLOAD_TOKEN_TTL_MINUTES * 60,
    }
  );

  return { token, tokenId, expiresAt };
}

export function verifyDownloadToken(token: string): DownloadTokenPayload {
  const payload = jwt.verify(token, config.DOWNLOAD_TOKEN_SECRET);

  if (typeof payload === 'string' || !payload) {
    throw new Error('Invalid token payload');
  }

  return {
    tokenId: payload.tokenId as string,
    requestId: payload.requestId as string,
    assetId: payload.assetId as string,
  };
}

export function hashToken(token: string): string {
  return createHash('sha256').update(token).digest('hex');
}
