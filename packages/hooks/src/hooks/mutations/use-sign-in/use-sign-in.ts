import { useMutation, MutateOptions } from '@tanstack/react-query';
import { AuthResponse } from '@supabase/gotrue-js';
import { useSupabase } from '../../services/use-supabase/use-supabase';

type SignInInput = {
  email: string;
  password: string;
};

export const useSignIn = (
  options?: MutateOptions<AuthResponse, Error, SignInInput>
) => {
  const supabase = useSupabase();

  return useMutation(
    ['sign-in'],
    async ({ email, password }: SignInInput) => {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        throw error;
      }

      return {
        data,
        error,
      };
    },
    options
  );
};
