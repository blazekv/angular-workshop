import { HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs';

export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Request', req.url, req.body);
  return next(req).pipe(
    tap((response) => {
      console.log('Response', response);
    }),
  );
};
