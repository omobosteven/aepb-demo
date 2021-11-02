import { lazy } from 'react';
import { authRoutes } from './authRoutes';
import { customerRoutes } from './customerRoutes';
import { adminRoutes } from './adminRoutes';

export const routes = [
  {
    path: '/',
    exact: true,
    component: lazy(() => import('modules/common/views/Homepage'))
  },
  ...authRoutes,
  ...customerRoutes,
  ...adminRoutes
];
