import { SetMetadata } from '@nestjs/common';

export const IgnoreResultInterceptor = () =>
  SetMetadata('ignore-result-interceptor', true);
