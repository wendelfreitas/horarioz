import React from 'react';
import { User } from '@firebase/auth';
import { createContext, useContextSelector } from 'use-context-selector';
import { auth } from '../../services/firebase';
import { useAuthUser } from '@react-query-firebase/auth';

type AuthProviderProps = {
  children: React.ReactNode;
};

type AuthContextProps = {
  user?: User;
  isLoading?: boolean;
};

export const AuthContextDefaultValues = {
  user: undefined,
};

const AuthContext = createContext<AuthContextProps>(AuthContextDefaultValues);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const { data: user, isLoading } = useAuthUser('user', auth);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContextSelector(AuthContext, (auth) => auth);
