import { useMutation, MutateOptions } from '@tanstack/react-query';
import { useSupabase } from '../../services/use-supabase/use-supabase';
import { Database } from '@horarioz/supabase';
import { PostgrestError } from '@supabase/supabase-js';

type ServiceInput = {
  name: string;
  description: string;
  price: number;
  duration: string;
};

type Service = Database['public']['Tables']['services']['Row'];

type UpdateServiceResponse = {
  data: Service | null;
  error: PostgrestError | null;
};

type Filter = {
  column: keyof Pick<Service, 'id'>;
  value?: string;
};

export const useUpdateService = (
  filter: Filter = {
    column: 'id',
  },
  options?: MutateOptions<UpdateServiceResponse, Error, ServiceInput>
) => {
  const supabase = useSupabase();

  return useMutation(
    ['update-service', filter.value],
    async ({ name, description, price, duration }: ServiceInput) => {
      const { data, error } = await supabase
        .from('services')
        .update({ name, description, price, duration })
        .eq(filter?.column, filter.value)
        .select()
        .maybeSingle();

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
