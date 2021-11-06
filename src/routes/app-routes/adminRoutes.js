import { lazy } from 'react';
import { AdminLayout } from 'layouts/AdminLayout';
import { AdminPaths } from '../paths';

export const adminRoutes = [
  {
    path: AdminPaths.CUSTOMERS,
    exact: true,
    component: lazy(() => import('modules/admin/views/Customers')),
    layout: AdminLayout
  },
  {
    path: AdminPaths.CUSTOMER,
    exact: true,
    component: lazy(() => import('modules/admin/views/Customer')),
    layout: AdminLayout
  },
  {
    path: AdminPaths.BILLINGS,
    exact: true,
    component: lazy(() => import('modules/admin/views/Billings')),
    layout: AdminLayout
  },
  {
    path: AdminPaths.TRUCKS,
    exact: true,
    component: lazy(() => import('modules/admin/views/Trucks')),
    layout: AdminLayout
  },
  {
    path: AdminPaths.SETTINGS,
    exact: true,
    component: lazy(() => import('modules/admin/views/Settings')),
    layout: AdminLayout
  }
];
