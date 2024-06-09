import { Routes } from '@angular/router';
import { delayGuard, delayRedirectGuard } from './guards/delay.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/todo-list-page/todo-list-page.component'),
  },
  {
    path: 'create',
    canActivate: [delayGuard],
    loadComponent: () =>
      import('./pages/todo-create-page/todo-create-page.component'),
  },
  {
    path: 'redirect',
    canActivate: [delayRedirectGuard],
    loadComponent: () =>
      import('./pages/todo-create-page/todo-create-page.component'),
  },
];
