import { env } from './src/config/env';

const databaseUrl = process.env.DATABASE_URL;

// Prisma CLI (when run against a JS/TS config) expects the configuration to be the default export.
// Keep backwards compatibility by also providing a named export.
const prismaConfig = {
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

export { prismaConfig };
export default prismaConfig;


