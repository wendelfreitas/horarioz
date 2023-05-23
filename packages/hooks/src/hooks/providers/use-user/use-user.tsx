import React, { useContext, useEffect, useState, createContext } from 'react';
import { User } from '@supabase/supabase-js';
import { useSession } from '@supabase/auth-helpers-react';

type AuthContextType = {
  user: User | null;
  isLoading: boolean;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: true,
});

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const session = useSession();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [session]);

  const value = {
    user: session?.user ?? null,
    isLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useUser = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useUser must be used within a AuthProvider.');
  }
  return context;
};
