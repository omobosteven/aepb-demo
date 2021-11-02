import { lazy } from 'react';
import { AuthPaths } from '../paths';

export const authRoutes = [
  {
    path: AuthPaths.REGISTER,
    exact: true,
    component: lazy(() => import('modules/common/views/Register'))
  },
  {
    path: AuthPaths.LOGIN,
    exact: true,
    component: lazy(() => import('modules/common/views/Login'))
  }
];
