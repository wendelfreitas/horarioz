import { Navigate } from 'react-router-dom';
import { useUser } from '@horarioz/hooks';
import { Loading } from '@horarioz/ui';

type PrivateRouteProps = {
  children: JSX.Element;
};

const Fallback = () => (
  <div className="grid h-screen place-items-center">
    <Loading />
  </div>
);

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { user, isLoading } = useUser();

  if (isLoading) return <Fallback />;

  if (!user) return <Navigate to="/sign-in" />;

  return children;
};
