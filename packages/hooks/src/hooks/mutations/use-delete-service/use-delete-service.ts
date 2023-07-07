import { useMutation, MutateOptions } from '@tanstack/react-query';
import { useSupabase } from '../../services/use-supabase/use-supabase';
import { PostgrestError } from '@supabase/supabase-js';

type DeleteServiceResponse = {
  data: {
    id: string;
  } | null;
  error: PostgrestError | null;
};

export const useDeleteService = (
  id?: string,
  options?: MutateOptions<DeleteServiceResponse, Error>
) => {
  const supabase = useSupabase();

  return useMutation(
    ['delete', 'service', id],
    async () => {
      const { error } = await supabase.from('services').delete().eq('id', id);

      if (error) {
        throw error;
      }

      return {
        data: {
          id: id!,
        },
        error,
      };
    },
    options
  );
};
