import { useMutation } from '@tanstack/react-query';
import { useSupabase } from '../../services/use-supabase/use-supabase';

export const useSignOut = () => {
  const supabase = useSupabase();
  return useMutation<void, Error>(['sign-out'], async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      throw error;
    }
  });
};
