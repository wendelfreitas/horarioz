import { SupabaseClient } from '@supabase/supabase-js';
import { useMemo } from 'react';
import { Database } from '@horarioz/supabase';
import {
  SessionContextProvider,
  useSupabaseClient,
} from '@supabase/auth-helpers-react';

export const SupabaseProvider = SessionContextProvider;

export function useSupabase(): SupabaseClient<Database> {
  const supabase = useSupabaseClient<Database>();

  return useMemo(() => supabase, [supabase]);
}
