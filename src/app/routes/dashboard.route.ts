import { Routes } from '@angular/router';
import Layout from '../dashboard/layout/layout';

const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadComponent: () => import('../dashboard/dashboard/dashboard') },
      { path: 'users', loadComponent: () => import('../dashboard/user/user') },
      { path: 'subjects', loadComponent: () => import('../dashboard/subject/subject') },
      { path: 'tasks', loadComponent: () => import('../dashboard/tasks/tasks') },
      { path: 'settings', loadComponent: () => import('../dashboard/settings/settings') },
      { path: 'logs', loadComponent: () => import('../dashboard/activity-logs/activity-logs') },
      {
        path: 'analytics-report',
        loadComponent: () => import('../dashboard/analytics-report/analytics-report'),
      },
    ],
  },
];

export default routes;
