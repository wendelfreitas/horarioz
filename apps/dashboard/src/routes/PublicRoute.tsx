import { useUser } from '@horarioz/hooks';
import { Loading } from '@horarioz/ui';
import { Navigate } from 'react-router-dom';

type PublicRouteProps = {
  children: JSX.Element;
};

const Fallback = () => (
  <div className="grid h-screen place-items-center">
    <Loading />
  </div>
);

export const PublicRoute = ({ children }: PublicRouteProps) => {
  const { user, isLoading } = useUser();

  if (isLoading) return <Fallback />;

  if (user) return <Navigate to="/" />;

  return children;
};
