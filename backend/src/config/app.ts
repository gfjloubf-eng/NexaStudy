import { env } from './env';

export const appConfig = {
  env: env.NODE_ENV,
  port: env.PORT,
  apiVersion: env.API_VERSION,

  cors: {
    enabled: env.CORS_ENABLED,
    origin: env.CORS_ORIGIN,
  },

  security: {
    helmetEnabled: env.HELMET_ENABLED,
  },

  compression: {
    enabled: env.COMPRESSION_ENABLED,
  },

  logger: {
    level: env.LOG_LEVEL,
    pretty: env.LOG_PRETTY,
  },
};

