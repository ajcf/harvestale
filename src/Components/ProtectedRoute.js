import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem('harvestale_auth') ? (
        <Component {...props} />
      ) : (
        <Redirect to="/participants/login" />
      )
    }
  />
);

export default ProtectedRoute;
