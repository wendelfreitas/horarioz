import { useUser } from '@horarioz/hooks';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

type PublicRouteProps = {
  children: JSX.Element;
};

export const PublicRoute = ({ children }: PublicRouteProps) => {
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      return navigate('/');
    }
  }, [user, navigate]);

  return children;
};
