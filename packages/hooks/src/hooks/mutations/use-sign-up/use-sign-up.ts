import { useMutation, MutateOptions } from '@tanstack/react-query';
import { AuthResponse, AuthError } from '@supabase/gotrue-js';
import { useSupabase } from '../../services/use-supabase/use-supabase';

type SignUpInput = {
  email: string;
  password: string;
};

export const useSignUp = (
  options?: MutateOptions<AuthResponse, AuthError, SignUpInput>
) => {
  const supabase = useSupabase();

  return useMutation(
    ['sign-in'],
    async ({ email, password }: SignUpInput) => {
      const { data, error } = await supabase.auth.signUp({
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
