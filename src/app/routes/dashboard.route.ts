import { Routes } from '@angular/router';
import Layout from '../dashboard/layout/layout';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    component: Layout,
    children: [
      { path: 'dashboard', loadComponent: () => import('../dashboard/dashboard/dashboard') },
    ],
  },
];

export default routes;
