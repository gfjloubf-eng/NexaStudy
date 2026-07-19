import { Injectable, NestMiddleware } from '@nestjs/common';
import type { NextFunction, Request, Response } from 'express';
import { randomUUID } from 'node:crypto';

import { RequestContextService } from './request-context.service';

@Injectable()
export class RequestCorrelationMiddleware implements NestMiddleware {
  constructor(private readonly requestContext: RequestContextService) {}

  use(req: Request, res: Response, next: NextFunction) {
    const headerValue = req.headers['x-correlation-id'];
    const correlationId = Array.isArray(headerValue) ? headerValue[0] : headerValue;

    const finalCorrelationId = correlationId && correlationId.trim().length > 0 ? correlationId : randomUUID();

    res.setHeader('x-correlation-id', finalCorrelationId);

    return this.requestContext.runWithCorrelationId(finalCorrelationId, () => next());
  }
}

