import { Database } from '@horarioz/supabase/src/@types/supabase';
import { useUser } from '@supabase/auth-helpers-react';
import { useQueries } from '@tanstack/react-query';
import { useState } from 'react';
import { useSupabase } from '../../services/use-supabase/use-supabase';

type Company = Database['public']['Tables']['companies']['Row'] | null;

export const useInitialInformations = () => {
  const [companyId, setCompanyId] = useState<string | null>(null);
  const user = useUser();
  const supabase = useSupabase();

  return useQueries({
    queries: [
      {
        queryKey: ['profile', user?.id],
        queryFn: async () => {
          const { data: profile } = await supabase
            .from('profiles')
            .select()
            .eq('id', user?.id)
            .maybeSingle();

          return profile;
        },
        enabled: !!user?.id,
        refetchOnWindowFocus: false,
      },
      {
        queryKey: ['company', user?.id],
        queryFn: async () => {
          const { data: company } = await supabase
            .from('companies')
            .select()
            .eq('user_id', user?.id)
            .maybeSingle();

          return company;
        },
        refetchOnWindowFocus: false,
        enabled: !!user?.id,
        onSuccess: (data: Company) => {
          if (data) {
            setCompanyId(data.id);
          }
        },
      },
      {
        queryKey: ['studio', companyId],
        queryFn: async () => {
          const { data: studio } = await supabase
            .from('studios')
            .select()
            .eq('company_id', companyId)
            .maybeSingle();

          return studio;
        },
        refetchOnWindowFocus: false,
        enabled: !!companyId,
      },
    ],
  });
};
