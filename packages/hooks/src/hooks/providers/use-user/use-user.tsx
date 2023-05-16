import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { createContext, useContextSelector } from 'use-context-selector';
import { User } from '@supabase/supabase-js';
import { Database } from '@horarioz/supabase';
import { useSession } from '@supabase/auth-helpers-react';
import { useSupabase } from '../../services/use-supabase/use-supabase';

type Profile = Database['public']['Tables']['profiles']['Row'];

type AuthContextType = {
  user: User | null;
  profile: Profile | null;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  profile: null,
});

type AuthProviderProps = {
  children: React.ReactNode;
  fallback: React.ReactNode;
};

export const AuthProvider = ({ children, fallback }: AuthProviderProps) => {
  const supabase = useSupabase();
  const [isLoading, setIsLoading] = useState(true);
  const [profile, setProfile] = useState<Profile | null>(null);
  const session = useSession();

  const getProfile = useCallback(async () => {
    const { data } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', session?.user.id)
      .single();

    setProfile(data);
  }, [supabase, session]);

  useEffect(() => {
    if (session && !profile) {
      getProfile();
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [session, profile, getProfile, isLoading, setIsLoading]);

  const value = useMemo(
    () => ({
      user: session?.user ?? null,
      profile,
    }),
    [session?.user, profile]
  );

  return (
    <AuthContext.Provider value={value}>
      {isLoading ? fallback : children}
    </AuthContext.Provider>
  );
};

export const useUser = () => {
  const user = useContextSelector(AuthContext, (auth) => auth.user);
  const profile = useContextSelector(AuthContext, (auth) => auth.profile);

  if (user === undefined) {
    throw new Error('useUser must be used within a AuthProvider.');
  }
  return {
    user,
    profile,
  };
};
