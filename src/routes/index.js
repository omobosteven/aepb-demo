import { Suspense } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { routes } from './app-routes';

const renderRoute = ({ component: Component, ...route }) => {
  return (
    <Route
      key={route.path}
      path={route.path}
      exact={route.exact}
      render={(routerProps) => (
        <Suspense fallback={<></>}>
          <Component {...routerProps} />
        </Suspense>
      )}
    />
  );
};

const AllRoutes = () => routes.map((route) => renderRoute(route));

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <AllRoutes />
      </Switch>
    </Router>
  );
};
