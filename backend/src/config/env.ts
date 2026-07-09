import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORT: z.coerce.number().int().positive().default(3000),

  // API
  API_VERSION: z.string().default('v1'),

  // CORS
  CORS_ENABLED: z.coerce.boolean().default(true),
  CORS_ORIGIN: z.string().default('http://localhost:5173'),

  // Security
  HELMET_ENABLED: z.coerce.boolean().default(true),

  // Compression
  COMPRESSION_ENABLED: z.coerce.boolean().default(true),

  // Logging (nestjs-pino)
  LOG_LEVEL: z
    .enum(['fatal', 'error', 'warn', 'info', 'debug', 'trace', 'silent'])
    .default('info'),
  LOG_PRETTY: z.coerce.boolean().default(true),
});

export type AppEnv = z.infer<typeof envSchema>;

export const env = envSchema.parse(process.env);

