import { Navigate, useLocation } from 'react-router';
import { useIsAuthenticated } from './auth';
import type { JSX } from 'react';

type Props = {
  children: JSX.Element;
};

export const PrivateRoute = ({ children }: Props) => {
  const location = useLocation();
  const auth = useIsAuthenticated();

  if (!auth) {
    return <Navigate to="/auth" replace state={{ from: location }} />;
  }

  return children;
};
