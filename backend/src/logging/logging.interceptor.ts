import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { RequestContextService } from '../context/request-context.service';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(private readonly requestContext: RequestContextService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const http = context.switchToHttp();
    const req = http.getRequest<Request & { originalUrl?: string; method?: string }>();

    const start = process.hrtime.bigint();

    const correlationId = this.requestContext.getCorrelationId();
    const method = (req.method ?? '').toUpperCase();
    const url = (req.originalUrl ?? '').toString();

    return next.handle().pipe(
      finalize(() => {
        const end = process.hrtime.bigint();
        const durationMs = Number(end - start) / 1_000_000;

        const res = http.getResponse();
        const statusCode = typeof (res as { statusCode?: number } | undefined)?.statusCode === 'number'
          ? (res as { statusCode?: number }).statusCode
          : undefined;

        // Avoid logging request bodies and potentially sensitive headers.
        // CorrelationId is safe and helps trace incidents.
        // eslint-disable-next-line no-console
        console.info('request', {
          correlationId,
          method,
          url,
          statusCode,
          durationMs: Math.round(durationMs * 100) / 100,
        });
      }),
    );
  }
}

