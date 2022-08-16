/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';
import { useSelector } from 'src/utils/hooks';

import type { RouteProps } from 'react-router-dom';

function ProtectedRoute({ children, ...rest }: RouteProps) {
  const { userData } = useSelector((store) => store.userData);
  const location = useLocation();

  return (
    <Route
      {...rest}
      render={
        () => (userData ? (children) : (
          <Redirect to={{
            pathname: '/login',
            state: { previousLocation: location },
          }}
          />
        ))
      }
    />
  );
}

export default ProtectedRoute;
