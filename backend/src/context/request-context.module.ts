import { Module } from '@nestjs/common';
import { ASYNC_LOCAL_STORAGE_PROVIDER } from './async-local-storage.provider';
import { RequestContextService } from './request-context.service';

@Module({
  providers: [
    ASYNC_LOCAL_STORAGE_PROVIDER,
    {
      provide: RequestContextService,
      useFactory: (
        als: import('node:async_hooks').AsyncLocalStorage<{
          [key: string]: string | undefined;
        }>,
      ) => {
        return new RequestContextService(als);
      },
      inject: ['ASYNC_LOCAL_STORAGE'],
    },
  ],
  exports: [RequestContextService],
})
export class RequestContextModule {}

