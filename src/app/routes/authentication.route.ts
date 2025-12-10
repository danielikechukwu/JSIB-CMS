import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadComponent: () => import('../authentication/login/login') },
  { path: 'register', loadChildren: () => import('../authentication/register/register') },
];

export default routes;
