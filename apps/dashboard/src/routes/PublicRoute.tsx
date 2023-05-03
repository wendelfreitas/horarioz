import { useAuthStore } from '@horarioz/hooks';
import { Navigate } from 'react-router-dom';

type PublicRouteProps = {
  children: JSX.Element;
};

export const PublicRoute = ({ children }: PublicRouteProps) => {
  const { user } = useAuthStore();

  if (user) {
    return <Navigate to="/" replace />;
  }

  return children;
};
