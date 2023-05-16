import { useMemo } from 'react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { SupabaseClient } from '@supabase/supabase-js';
import { Database } from '@horarioz/supabase';

export function useSupabase(): SupabaseClient<Database> {
  const supabase = useSupabaseClient();
  if (supabase === undefined)
    throw Error('No supabase client has been specified using Provider.');

  return useMemo(() => supabase, [supabase]);
}
