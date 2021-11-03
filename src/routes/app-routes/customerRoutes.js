import { lazy } from 'react';
import { CustomerLayout } from 'layouts/CustomerLayout';
import { CustomerPaths } from '../paths';

export const customerRoutes = [
  {
    path: CustomerPaths.PAYMENTS,
    exact: true,
    component: lazy(() => import('modules/customer/views/Payments')),
    layout: CustomerLayout
  }
];
