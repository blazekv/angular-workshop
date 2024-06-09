import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../environments/environment';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${environment.apiToken}`,
    },
  });
  return next(authReq);
};
