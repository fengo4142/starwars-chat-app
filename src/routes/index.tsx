import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Login from '../containers/Login';
import SignUp from '../containers/SignUp';
import Home from '../containers/Home';

const PrivateRoute = ({ isLoggedIn, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn ? (
          <Component {...rest} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

const AppRouter = ({ isLoggedIn }) => {

  return (
    <Switch>
      <Route path="/" exact component={() => <Redirect to="/home" />} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <PrivateRoute path="/home" component={Home} isLoggedIn={isLoggedIn} />
    </Switch>
  );
};

export default AppRouter;