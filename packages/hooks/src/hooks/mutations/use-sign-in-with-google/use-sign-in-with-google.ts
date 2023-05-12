import { useMutation, MutateOptions } from '@tanstack/react-query';
import { OAuthResponse } from '@supabase/gotrue-js';
import { useSupabase } from '../../services/use-supabase/use-supabase';
import { useState } from 'react';

export const useSignInWithGoogle = (
  options?: MutateOptions<OAuthResponse, Error>
) => {
  const [isLoading, setIsLoading] = useState(false);

  const supabase = useSupabase();

  const mutation = useMutation(
    ['sign-in-google'],
    async () => {
      setIsLoading(true);
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: '',
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
    { onSettled: () => setIsLoading(false), ...options }
  );

  return { ...mutation, isLoading };
};
