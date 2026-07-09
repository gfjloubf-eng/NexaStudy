import { env } from './src/config/env';

const databaseUrl = process.env.DATABASE_URL;

export const prismaConfig = {
  // Prisma will load schema at backend/prisma/schema.prisma
  // This file is used by tooling that supports programmatic config.
  datasources: {
    db: {
      url: databaseUrl ?? '',
    },
  },
  // Keep this minimal for Phase 1.2 (no migrations, no models)
  env: {
    NODE_ENV: env.NODE_ENV,
  },
};

