import React, { useContext, createContext } from 'react';
import { User } from '@supabase/supabase-js';
import { useSession } from '@supabase/auth-helpers-react';
import { Database } from '@horarioz/supabase';
import { useInitialInformations } from '@horarioz/hooks';

type Profile = Database['public']['Tables']['profiles']['Row'];
type Company = Database['public']['Tables']['companies']['Row'];
type Studio = Database['public']['Tables']['studios']['Row'];

type AuthContextType = {
  user: User | null;
  profile: Profile | null;
  company: Company | null;
  studio: Studio | null;
  isLoading: boolean;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  profile: null,
  company: null,
  studio: null,
  isLoading: true,
});

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const session = useSession();
  const queries = useInitialInformations();
  const [profile, company, studio] = queries;

  const isLoading = queries.some((query) => query.isInitialLoading);

  const value = {
    user: session?.user ?? null,
    profile: profile.data ?? null,
    company: company.data ?? null,
    studio: studio.data ?? null,
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
