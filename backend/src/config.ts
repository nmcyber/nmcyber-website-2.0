import 'dotenv/config';
import { z } from 'zod';

const envSchema = z
  .object({
    NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
    PORT: z.coerce.number().default(4000),

    // Database
    DATABASE_URL: z.string().min(1, 'DATABASE_URL is required'),

    // Security & Encryption
    DOWNLOAD_TOKEN_SECRET: z
      .string()
      .min(32, 'DOWNLOAD_TOKEN_SECRET must be at least 32 characters'),

    // Email Service - Resend (Required)
    RESEND_API_KEY: z.string().min(1, 'RESEND_API_KEY is required'),
    EMAIL_FROM_ADDRESS: z.string().email('EMAIL_FROM_ADDRESS must be a valid email'),
    EMAIL_FROM_NAME: z.string().optional(),

    // Email Validation
    KICKBOX_API_KEY: z.string().optional(),
    ABSTRACT_EMAIL_VALIDATION_API_KEY: z.string().optional(),

    // Object Storage (at least one provider required)
    SUPABASE_URL: z.string().url().optional(),
    SUPABASE_STORAGE_BUCKET: z.string().optional(),
    SUPABASE_SERVICE_ROLE_KEY: z.string().optional(),
    AWS_ACCESS_KEY_ID: z.string().optional(),
    AWS_SECRET_ACCESS_KEY: z.string().optional(),
    AWS_REGION: z.string().optional(),
    AWS_S3_BUCKET: z.string().optional(),
    R2_ACCOUNT_ID: z.string().optional(),
    R2_ACCESS_KEY_ID: z.string().optional(),
    R2_SECRET_ACCESS_KEY: z.string().optional(),
    R2_BUCKET_NAME: z.string().optional(),
    R2_PUBLIC_URL: z.string().url().optional(),

    // Monitoring (Optional)
    SLACK_WEBHOOK_URL: z.string().url().optional(),
    SENTRY_DSN: z.string().url().optional(),

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
  })
  .refine(
    (data) => {
      // At least one storage provider must be configured
      const hasStorageProvider =
        (data.SUPABASE_URL && data.SUPABASE_STORAGE_BUCKET && data.SUPABASE_SERVICE_ROLE_KEY) ||
        (data.AWS_ACCESS_KEY_ID && data.AWS_SECRET_ACCESS_KEY && data.AWS_S3_BUCKET) ||
        (data.R2_ACCOUNT_ID && data.R2_ACCESS_KEY_ID && data.R2_BUCKET_NAME);
      return hasStorageProvider || data.NODE_ENV === 'development';
    },
    {
      message: 'At least one storage provider must be configured (Supabase, S3, or R2)',
      path: ['SUPABASE_URL'],
    }
  );

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
