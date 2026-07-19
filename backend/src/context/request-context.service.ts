import { Injectable } from '@nestjs/common';
import { AsyncLocalStorage } from 'node:async_hooks';
import { REQUEST_CONTEXT_KEYS } from './request-context.constants';

type RequestContextStore = {
  [REQUEST_CONTEXT_KEYS.correlationId]?: string;
};

@Injectable()
export class RequestContextService {
  constructor(private readonly als: AsyncLocalStorage<RequestContextStore>) {}

  runWithCorrelationId(correlationId: string, fn: () => void | Promise<void>) {
    return this.als.run({
      [REQUEST_CONTEXT_KEYS.correlationId]: correlationId,
    }, fn);
  }

  getCorrelationId(): string | undefined {
    return this.als.getStore()?.[REQUEST_CONTEXT_KEYS.correlationId];
  }
}

