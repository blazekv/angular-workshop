import { Routes } from '@angular/router';
import { UserListPageComponent } from './pages/user-list-page/user-list-page.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/dashboard-page/dashboard-page.component'),
  },
  {
    path: 'users',
    component: UserListPageComponent,
  },
];

export default routes;
