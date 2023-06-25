import { useMutation, MutateOptions } from '@tanstack/react-query';
import { useSupabase } from '../../services/use-supabase/use-supabase';
import { Database } from '@horarioz/supabase';
import { PostgrestError } from '@supabase/supabase-js';

type ServiceInput = {
  company_id: string;
  name: string;
  description?: string;
  price: number;
  duration: string;
};

type CreateServiceResponse = {
  data: Database['public']['Tables']['services']['Row'] | null;
  error: PostgrestError | null;
};

export const useCreateService = (
  options?: MutateOptions<CreateServiceResponse, Error, ServiceInput>
) => {
  const supabase = useSupabase();

  return useMutation(
    ['sign-in'],
    async ({
      company_id,
      name,
      description,
      price,
      duration,
    }: ServiceInput) => {
      const { data, error } = await supabase
        .from('services')
        .insert([{ company_id, name, description, price, duration }])
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
