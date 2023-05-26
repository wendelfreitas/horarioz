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
  const { user, profile, isLoading } = useUser();

  console.log(user);
  console.log(profile);
  console.log(isLoading);

  const location = useLocation();
  if (isLoading) return <Fallback />;

  if (!user) return <Navigate to="/sign-in" />;

  if (!profile && location.pathname !== '/onboarding')
    return <Navigate to="/onboarding" />;

  console.log(children);
  return children;
};
