import { Database } from '@horarioz/supabase';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { useSupabase } from '../../services/use-supabase/use-supabase';

type Service = Database['public']['Tables']['services']['Row'];

export const useGetServiceByCompanyId = (
  companyId?: string,
  options?: Omit<
    UseQueryOptions<Service[]>,
    'queryKey' | 'queryFn' | 'initialData'
  >
) => {
  const supabase = useSupabase();

  return useQuery(
    ['services', companyId],
    async () => {
      const { data, error } = await supabase
        .from('services')
        .select()
        .eq('company_id', companyId)
        .order('created_at', {
          ascending: false,
        });

      if (error) {
        throw error;
      }

      return data;
    },
    options
  );
};
