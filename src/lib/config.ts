import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  APP_ENV: z.enum(['development', 'staging', 'production']).default('development'),
  NEXT_PUBLIC_SITE_URL: z.string().url().default('http://localhost:3000'),

  // Database
  DATABASE_URL: z.string().default('http://127.0.0.1:8080'),
  DATABASE_AUTH_TOKEN: z.string().default('dev_token_libsql_local'),
  TURSO_DATABASE_URL: z.string().optional(),
  TURSO_AUTH_TOKEN: z.string().optional(),

  // Redis / Cache
  REDIS_URL: z.string().default('redis://127.0.0.1:6379'),
  UPSTASH_REDIS_REST_URL: z.string().optional(),
  UPSTASH_REDIS_REST_TOKEN: z.string().optional(),

  // Storage
  STORAGE_DRIVER: z.enum(['local', 'cloudinary']).default('local'),
  CLOUDINARY_CLOUD_NAME: z.string().optional(),
  CLOUDINARY_API_KEY: z.string().optional(),
  CLOUDINARY_API_SECRET: z.string().optional(),

  // Sentry Observability
  ENABLE_SENTRY: z.preprocess((val) => val === 'true' || val === true, z.boolean()).default(false),
  NEXT_PUBLIC_SENTRY_DSN: z.string().optional(),
  SENTRY_AUTH_TOKEN: z.string().optional(),
});

const parsedEnv = envSchema.parse(process.env);

export const appConfig = {
  isDev: parsedEnv.NODE_ENV === 'development' || parsedEnv.APP_ENV === 'development',
  isProd: parsedEnv.NODE_ENV === 'production' && parsedEnv.APP_ENV === 'production',
  isTest: parsedEnv.NODE_ENV === 'test',
  siteUrl: parsedEnv.NEXT_PUBLIC_SITE_URL,

  db: {
    // In dev: connect to local LibSQL/sqld container; in prod: use Turso credentials if provided
    url: parsedEnv.NODE_ENV === 'production' && parsedEnv.TURSO_DATABASE_URL
      ? parsedEnv.TURSO_DATABASE_URL
      : parsedEnv.DATABASE_URL,
    authToken: parsedEnv.NODE_ENV === 'production' && parsedEnv.TURSO_AUTH_TOKEN
      ? parsedEnv.TURSO_AUTH_TOKEN
      : parsedEnv.DATABASE_AUTH_TOKEN,
  },

  redis: {
    // In dev: local redis connection URL; in prod: Upstash REST config
    localUrl: parsedEnv.REDIS_URL,
    upstashRestUrl: parsedEnv.UPSTASH_REDIS_REST_URL,
    upstashRestToken: parsedEnv.UPSTASH_REDIS_REST_TOKEN,
    useUpstash: Boolean(
      parsedEnv.NODE_ENV === 'production' &&
      parsedEnv.UPSTASH_REDIS_REST_URL &&
      parsedEnv.UPSTASH_REDIS_REST_TOKEN
    ),
  },

  storage: {
    driver: parsedEnv.NODE_ENV === 'production' ? parsedEnv.STORAGE_DRIVER : 'local',
    cloudinary: {
      cloudName: parsedEnv.CLOUDINARY_CLOUD_NAME,
      apiKey: parsedEnv.CLOUDINARY_API_KEY,
      apiSecret: parsedEnv.CLOUDINARY_API_SECRET,
    },
  },

  sentry: {
    enabled: parsedEnv.ENABLE_SENTRY && Boolean(parsedEnv.NEXT_PUBLIC_SENTRY_DSN),
    dsn: parsedEnv.NEXT_PUBLIC_SENTRY_DSN,
  },
};

export type AppConfig = typeof appConfig;
