// Environment variable configuration and validation
import 'dotenv/config';
import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORT: z.coerce.number().default(4000),

  // Database
  DATABASE_URL: z.string().min(1, 'DATABASE_URL is required'),

  // Security & Encryption
  DOWNLOAD_TOKEN_SECRET: z.string().min(32, 'DOWNLOAD_TOKEN_SECRET must be at least 32 characters'),

  // Email Service - Resend (Required)
  RESEND_API_KEY: z.string().min(1, 'RESEND_API_KEY is required'),
  EMAIL_FROM_ADDRESS: z.string().email('EMAIL_FROM_ADDRESS must be a valid email'),
  EMAIL_FROM_NAME: z.string().optional(),

  // Email Validation - ZeroBounce (see README for setup)
  ZEROBOUNCE_API_KEY: z.string().optional(),

  // Rate Limiting & Token Settings
  DOWNLOAD_TOKEN_TTL_MINUTES: z.coerce
    .number()
    .positive()
    .default(60 * 24),
  MAX_REQUESTS_PER_WINDOW: z.coerce.number().positive().default(5),
  REQUEST_WINDOW_MINUTES: z.coerce.number().positive().default(60),

  // Application URLs
  APP_BASE_URL: z.string().url().default('http://localhost:3000'),
  API_BASE_URL: z.string().url().default('http://localhost:4000'),
});

type EnvShape = z.infer<typeof envSchema>;

const env = envSchema.parse(process.env);

export const config: EnvShape & {
  isDevelopment: boolean;
  isTest: boolean;
  isProduction: boolean;
} = {
  ...env,
  isDevelopment: env.NODE_ENV === 'development',
  isTest: env.NODE_ENV === 'test',
  isProduction: env.NODE_ENV === 'production',
};
