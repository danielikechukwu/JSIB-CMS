import { Routes } from '@angular/router';
import Layout from '../dashboard/layout/layout';

const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadComponent: () => import('../dashboard/dashboard/dashboard'),
        title: 'Dashboard Overview',
        data: { title: 'Dashboard Overview' },
      },
      {
        path: 'users',
        children: [
          {
            path: '',
            loadComponent: () => import('../dashboard/users/users'),
            title: 'Users',
            data: { title: 'Users' },
          },
          {
            path: ':userId',
            loadComponent: () => import('../dashboard/users/user/user'),
            title: 'User Dashboard',
            data: { title: 'Users Dashboard' },
          },
        ],
      },
      {
        path: 'subjects',
        loadComponent: () => import('../dashboard/subject/subject'),
        title: 'Subjects',
        data: { title: 'Subjects' },
      },
      {
        path: 'tasks',
        loadComponent: () => import('../dashboard/tasks/tasks'),
        title: 'Tasks',
        data: { title: 'Tasks' },
      },
      {
        path: 'settings',
        loadComponent: () => import('../dashboard/settings/settings'),
        title: 'Settings',
        data: { title: 'Settings' },
      },
      {
        path: 'logs',
        loadComponent: () => import('../dashboard/activity-logs/activity-logs'),
        title: 'Activity Logs',
        data: { title: 'Activity Logs' },
      },
      {
        path: 'analytics-report',
        loadComponent: () => import('../dashboard/analytics-report/analytics-report'),
        title: 'Analytics Reports',
        data: { title: 'Analytics Reports' },
      },
    ],
  },
];

export default routes;
