import { useMutation, MutateOptions } from '@tanstack/react-query';
import { useSupabase } from '../../services/use-supabase/use-supabase';
import { PostgrestError } from '@supabase/supabase-js';
import { Database } from '@horarioz/supabase';
import { useAuthStore } from '../../stores/use-auth/use-auth';

type OnboardingInput = {
  name: string;
  phone: string;
  company_name: string;
  slug: string;
};

type ReturnType = {
  company: Database['public']['Tables']['companies']['Row'];
  profile: Database['public']['Tables']['profiles']['Row'];
};

export const useUserOnboarding = (
  options?: MutateOptions<ReturnType, PostgrestError, OnboardingInput>
) => {
  const { user } = useAuthStore();
  const supabase = useSupabase();

  return useMutation(
    ['user-onboarding'],
    async (input: OnboardingInput) => {
      const { data, error } = await supabase
        .rpc('create_profile_and_company_with_studio', {
          user_id: '94b75031-4623-4585-969a-0ce27d9da894',
          name: input.name,
          phone: input.phone,
          company_name: input.company_name,
          company_domain: input.slug,
        })
        .single();

      if (error) {
        throw error;
      }

      return data as ReturnType;
    },
    options
  );
};
