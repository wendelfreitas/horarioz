import React, { useState, useEffect } from 'react';
import { User } from '@firebase/auth';
import * as firebase from '../../services/firebase';
import { createContext, useContextSelector } from 'use-context-selector';

type AuthProviderProps = {
  children: React.ReactNode;
};

type AuthContextProps = {
  user?: User;
};

export const AuthContextDefaultValues = {
  user: undefined,
};

const AuthContext = createContext<AuthContextProps>(AuthContextDefaultValues);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const unsubscribe = firebase.auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(undefined);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContextSelector(AuthContext, (auth) => auth);
