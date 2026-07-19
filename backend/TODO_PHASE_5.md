Phase 5.0 progress tracker

- Implemented: AsyncLocalStorage-based RequestContext service + module
- Implemented: RequestCorrelationMiddleware
- Implemented: LoggingInterceptor
- Implemented: GlobalExceptionFilter
- Modified: app.module.ts to wire middleware
- Modified: main.ts to wire global interceptor/filter via APP_INTERCEPTOR/APP_FILTER

Pending:
- Fix tooling command execution in environment (terminal parser rejects '&&' in this session)
- Build verification: run backend build and ensure TypeScript errors are resolved

