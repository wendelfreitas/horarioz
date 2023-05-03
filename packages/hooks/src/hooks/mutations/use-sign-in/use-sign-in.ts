import { useMutation, MutateOptions } from '@tanstack/react-query';
import { supabase } from '@horarioz/supabase';
import { AuthResponse } from '@supabase/gotrue-js';

type SignInInput = {
  email: string;
  password: string;
};

export const useSignIn = (
  options?: MutateOptions<AuthResponse, Error, SignInInput>
) => {
  return useMutation(
    ['sign-in'],
    ({ email, password }: SignInInput) =>
      supabase.auth.signInWithPassword({ email, password }),
    options
  );
};
