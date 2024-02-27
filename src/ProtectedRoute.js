import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import keycloak from './keycloak';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  useEffect(() => {
    if (!keycloak.authenticated) {
      keycloak.login();
    }
  }, []);

  return (
    <Route
      {...rest}
      render={(props) =>
        keycloak.authenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default ProtectedRoute;
