import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/todo-list-page/todo-list-page.component'),
  },
  {
    path: 'create',
    loadComponent: () =>
      import('./pages/todo-create-page/todo-create-page.component'),
  },
];
