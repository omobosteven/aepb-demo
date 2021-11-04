import { Suspense, Fragment } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { routes } from './app-routes';

const renderRoute = ({ component: Component, ...route }) => {
  const Layout = route.layout ? route.layout : Fragment;

  return (
    <Route
      key={route.path}
      path={route.path}
      exact={route.exact}
      render={(routerProps) => (
        <Layout>
          <Suspense fallback={<></>}>
            <Component {...routerProps} />
          </Suspense>
        </Layout>
      )}
    />
  );
};


export const Routes = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route) => renderRoute(route))}
      </Switch>
    </Router>
  );
};
