import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger(PrismaService.name);

  async onModuleInit() {
    // Ensure the client is ready early so runtime startup validates DB wiring.
    // If DATABASE_URL is invalid or DB is unreachable, startup will surface it.
    await this.$connect();
    this.logger.log('Prisma connected');
  }
}

