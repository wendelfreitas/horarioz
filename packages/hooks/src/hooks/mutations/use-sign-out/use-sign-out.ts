import { useMutation } from '@tanstack/react-query';
import { supabase } from '@horarioz/supabase';

export const useSignOut = () => {
  return useMutation(['sign-out'], () => supabase.auth.signOut());
};
