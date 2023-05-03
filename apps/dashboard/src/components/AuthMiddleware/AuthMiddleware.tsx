import { useAuthStore } from '@horarioz/hooks';
import { supabase } from '@horarioz/supabase';
import { Fragment, useEffect } from 'react';

export type AuthMiddlewareProps = {
  children: React.ReactNode;
};

enum AuthEvents {
  SIGNED_OUT = 'SIGNED_OUT',
  SIGNED_IN = 'SIGNED_IN',
}

export const AuthMiddleware = ({ children }: AuthMiddlewareProps) => {
  const { setUser } = useAuthStore();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === AuthEvents.SIGNED_OUT) {
        setUser(null);
      }

      if (event === AuthEvents.SIGNED_IN && session?.user) {
        setUser(session?.user);
      }
    });

    return () => subscription.unsubscribe();
  }, [setUser]);

  return <Fragment>{children}</Fragment>;
};
