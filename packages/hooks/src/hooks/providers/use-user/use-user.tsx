import React, {
  useContext,
  useEffect,
  useState,
  createContext,
  useCallback,
} from 'react';
import { User } from '@supabase/supabase-js';
import { useSession } from '@supabase/auth-helpers-react';
import { useSupabase } from '../../services/use-supabase/use-supabase';
import { Database } from '@horarioz/supabase';

type Profile = Database['public']['Tables']['profiles']['Row'];

type AuthContextType = {
  user: User | null;
  profile: Profile | null;
  isLoading: boolean;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  profile: null,
  isLoading: true,
});

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const session = useSession();
  const supabase = useSupabase();

  const [isLoading, setIsLoading] = useState(true);
  const [profile, setProfile] = useState<Profile | null>(null);

  const getProfile = useCallback(async () => {
    setIsLoading(true);
    const { data: profiles } = await supabase
      .from('profiles')
      .select()
      .eq('id', session?.user.id)
      .maybeSingle();

    setProfile(profiles);
    setIsLoading(false);
  }, [session, supabase]);

  useEffect(() => {
    if (session?.user) {
      getProfile();
    }

    if (!session?.user) {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  }, [session, getProfile]);

  const value = {
    user: session?.user ?? null,
    profile: profile,
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
