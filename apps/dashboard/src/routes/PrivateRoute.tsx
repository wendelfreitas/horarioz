import { Navigate, useLocation } from 'react-router-dom';
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
  const location = useLocation();
  const { user, profile, isLoading } = useUser();

  if (isLoading) return <Fallback />;

  if (!user) return <Navigate to="/sign-in" />;

  if (!profile && !location.pathname.includes('onboarding'))
    return <Navigate to="/onboarding" />;

  return children;
};
