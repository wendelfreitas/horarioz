import { useMutation, MutateOptions } from '@tanstack/react-query';
import { AuthResponse } from '@supabase/gotrue-js';
import useSupabase from '../../use-supabase';

type SignUpInput = {
  name: string;
  email: string;
  password: string;
};

export const useSignUp = (
  options?: MutateOptions<AuthResponse, Error, SignUpInput>
) => {
  const supabase = useSupabase();

  return useMutation(
    ['sign-in'],
    async ({ email, password, name }: SignUpInput) => {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name,
          },
        },
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
