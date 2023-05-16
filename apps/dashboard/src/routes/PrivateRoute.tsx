import { useNavigate } from 'react-router-dom';
import { useUser } from '@horarioz/hooks';
import { useEffect } from 'react';

type PrivateRouteProps = {
  children: JSX.Element;
};

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { user, profile } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      return navigate('/sign-in');
    }

    if (profile) {
      return navigate('/');
    }

    return navigate('/onboarding');
  }, [user, profile, navigate]);

  return children;
};
