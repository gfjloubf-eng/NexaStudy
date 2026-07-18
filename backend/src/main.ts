import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import helmet from 'helmet';
import * as compression from 'compression';
import { Logger, VersioningType, ValidationPipe } from '@nestjs/common';


import { appConfig } from './config/app';



async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });


  // Global prefix
  app.setGlobalPrefix('/api');

  // URI versioning (/api/v1)
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: appConfig.apiVersion,
  });

  // Validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  // CORS
  if (appConfig.cors.enabled) {
    app.enableCors({
      origin: appConfig.cors.origin,
      credentials: true,
    });
  }

  // Security
  if (appConfig.security.helmetEnabled) {
    app.use(helmet());
  }

  // Compression
  if (appConfig.compression.enabled) {
    app.use(compression());
  }

  // Graceful shutdown
  const shutdown = async (signal: string) => {
    const logger = new Logger('Bootstrap');
    logger.log({ signal }, 'Shutting down gracefully');


    await app.close();
  };

  process.on('SIGINT', () => shutdown('SIGINT'));
  process.on('SIGTERM', () => shutdown('SIGTERM'));

  const port = appConfig.port;
  await app.listen(port);
}

bootstrap();


