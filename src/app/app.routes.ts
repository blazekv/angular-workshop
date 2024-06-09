import { Routes } from '@angular/router';
import { delayGuard, delayRedirectGuard } from './guards/delay.guard';
import TodoCreatePageComponent from './pages/todo-create-page/todo-create-page.component';
import adminRoutes from './modules/admin/admin.routes';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/todo-list-page/todo-list-page.component'),
    data: {
      icon: 'list',
    },
  },
  {
    path: 'create',
    canActivate: [delayGuard],
    title: 'Create Todo',
    loadComponent: () =>
      import('./pages/todo-create-page/todo-create-page.component'),
  },
  {
    path: 'redirect',
    canActivate: [delayRedirectGuard],
    component: TodoCreatePageComponent,
  },
  {
    path: 'admin',
    loadComponent: () => import('./modules/admin/admin.component'),
    // loadChildren: () => import('./modules/admin/admin.routes'),
    children: adminRoutes,
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  },
];
