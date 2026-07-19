import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HealthController } from './health.controller';
import { PrismaModule } from './prisma/prisma.module';
import { CourseModule } from './modules/course/course.module';
import { LessonModule } from './modules/lesson/lesson.module';
import { OrganizationModule } from './modules/organization/organization.module';
import { LoggingModule } from './logging/logging.module';
import { RequestCorrelationMiddleware } from './context/request-correlation.middleware';
import { RequestContextModule } from './context/request-context.module';

@Module({
  imports: [
    ConfigModule.forRoot({

      isGlobal: true,
      envFilePath: ['.env', '.env.local'],
      ignoreEnvFile: process.env.NODE_ENV === 'production',
    }),
    PrismaModule,
    LoggingModule,
    RequestContextModule,

    CourseModule,
    LessonModule,
    OrganizationModule,
  ],
  controllers: [HealthController],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestCorrelationMiddleware).forRoutes('*');
  }
}















