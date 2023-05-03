import { Navigate } from 'react-router-dom';
import { useAuthStore } from '@horarioz/hooks';

type PrivateRouteProps = {
  children: JSX.Element;
};

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { user } = useAuthStore();

  if (!user) {
    return <Navigate to="/sign-in" replace />;
  }

  return children;
};
