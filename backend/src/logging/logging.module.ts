import { Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { RequestContextModule } from '../context/request-context.module';
import { GlobalExceptionFilter } from './global-exception.filter';
import { LoggingInterceptor } from './logging.interceptor';

@Module({
  imports: [RequestContextModule],
  providers: [
    LoggingInterceptor,
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },

    GlobalExceptionFilter,
    {
      provide: APP_FILTER,
      useClass: GlobalExceptionFilter,
    },
  ],
  exports: [LoggingInterceptor, GlobalExceptionFilter],
})
export class LoggingModule {}


