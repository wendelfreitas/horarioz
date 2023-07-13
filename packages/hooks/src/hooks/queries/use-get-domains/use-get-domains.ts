import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { useSupabase } from '../../services/use-supabase/use-supabase';

export const useGetDomains = (
  options: Omit<
    UseQueryOptions<string[]>,
    'initialData' | 'queryFn' | 'queryKey'
  >
) => {
  const supabase = useSupabase();

  return useQuery(
    ['domains'],
    async () => {
      const { data } = await supabase.from('studios').select('domain');
      const domains = data?.map((studio) => studio.domain!) || [];

      return domains;
    },
    options
  );
};
