import { useMutation } from '@tanstack/react-query';
import { supabase } from '@horarioz/supabase';

export const useSignOut = () => {
  return useMutation<void, Error>(['sign-out'], async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      throw error;
    }
  });
};
