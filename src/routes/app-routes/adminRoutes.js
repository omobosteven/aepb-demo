import { lazy } from 'react';
import { AdminPaths } from '../paths';

export const adminRoutes = [
  {
    path: AdminPaths.CUSTOMERS,
    exact: true,
    component: lazy(() => import('modules/admin/views/Customers'))
  }
];
