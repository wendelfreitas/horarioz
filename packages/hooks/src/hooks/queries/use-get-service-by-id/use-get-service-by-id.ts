import { useQuery } from '@tanstack/react-query';
import { useSupabase } from '../../services/use-supabase/use-supabase';

export const useGetServiceById = (id?: string) => {
  const supabase = useSupabase();

  return useQuery(
    ['service', id],
    async () => {
      const { data, error } = await supabase
        .from('services')
        .select()
        .eq('id', id)
        .maybeSingle();

      if (error) {
        throw error;
      }

      return {
        service: data,
        error,
      };
    },
    {
      enabled: !!id,
    }
  );
};
