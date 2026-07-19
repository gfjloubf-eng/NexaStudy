import { Provider } from '@nestjs/common';
import { AsyncLocalStorage } from 'node:async_hooks';

import { REQUEST_CONTEXT_KEYS } from './request-context.constants';

type RequestContextStore = {
  [REQUEST_CONTEXT_KEYS.correlationId]?: string;
};

export const ASYNC_LOCAL_STORAGE_PROVIDER: Provider = {
  provide: 'ASYNC_LOCAL_STORAGE',
  useValue: new AsyncLocalStorage<RequestContextStore>(),
};

