import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  Injectable,
} from '@nestjs/common';
import type { Request, Response } from 'express';

import { RequestContextService } from '../context/request-context.service';

type HostWithHttp = {
  switchToHttp: () => {
    getRequest: () => Request;
    getResponse: () => Response;
  };
};

@Injectable()
@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  constructor(private readonly requestContext: RequestContextService) {}

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host as unknown as HostWithHttp;
    const http = ctx.switchToHttp();
    const req = http.getRequest();
    const res = http.getResponse();

    const correlationId = this.requestContext.getCorrelationId();

    const isHttpException = exception instanceof HttpException;

    const status = isHttpException ? (exception as HttpException).getStatus() : 500;

    // Keep the response contract backward compatible with Nest.
    const responseBody = isHttpException ? (exception as HttpException).getResponse() : { message: 'Internal server error' };

    // eslint-disable-next-line no-console
    console.error('exception', {
      correlationId,
      status,
      method: req.method,
      url: ((req as { originalUrl?: string }).originalUrl ?? req.url),
      // Do not leak stack traces in production.
      message: exception instanceof Error ? exception.message : String(exception),
    });

    return res.status(status).json({
      ...(typeof responseBody === 'object' && responseBody !== null ? responseBody : { message: responseBody }),
      correlationId,
    });
  }
}

