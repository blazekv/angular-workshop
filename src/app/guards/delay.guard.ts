import { CanActivateFn, Router } from '@angular/router';
import { map, timer } from 'rxjs';
import { inject } from '@angular/core';

export const delayGuard: CanActivateFn = () => {
  return timer(4000).pipe(map(() => true));
};

export const delayRedirectGuard: CanActivateFn = () => {
  const router = inject(Router);
  return timer(4000).pipe(map(() => router.createUrlTree(['/'])));
};
