import { Navigate, useLocation } from 'react-router';
import type { JSX } from 'react';
import { useAuth } from '@/features/auth/model/useAuth';

type Props = {
  children: JSX.Element;
};

export const PrivateRoute = ({ children }: Props) => {
  const location = useLocation();
  const { isAuth } = useAuth();

  if (!isAuth) {
    return <Navigate to="/auth" replace state={{ from: location }} />;
  }

  return children;
};
