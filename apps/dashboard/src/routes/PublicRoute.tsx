import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/use-auth/use-auth';
import HashLoader from 'react-spinners/HashLoader';

type PublicRouteProps = {
  children: JSX.Element;
};

export const PublicRoute = ({ children }: PublicRouteProps) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="w-full h-full flex justify-center align-middle items-center">
        <HashLoader size={50} color="#726ac8" />
      </div>
    );
  }

  if (user) {
    return <Navigate to="/" replace />;
  }

  return children;
};
