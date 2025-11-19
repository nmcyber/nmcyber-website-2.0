// Global error handler middleware
import type { NextFunction, Request, Response } from 'express';
import { config } from '../config';
import { HttpError } from '../utils/http-errors';

export function errorHandler(err: unknown, _req: Request, res: Response, _next: NextFunction) {
  if (err instanceof HttpError) {
    if (config.isDevelopment) {
      // eslint-disable-next-line no-console
      console.error('Handled error', err);
    }

    return res.status(err.status).json({
      error: err.message,
      details: err.details,
    });
  }

  if (config.isDevelopment) {
    // eslint-disable-next-line no-console
    console.error('Unhandled error', err);
  }

  return res.status(500).json({
    error: 'Internal server error',
  });
}
