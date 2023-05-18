import { useContext, useMemo } from 'react';
import { createContext } from 'react';
import { SupabaseClient } from '@supabase/supabase-js';
import { Database } from '@horarioz/supabase';

export const Context = createContext<SupabaseClient | undefined>(undefined);
export const SupabaseProvider = Context.Provider;
export const SupabaseContext = Context.Consumer;

export function useSupabase(): SupabaseClient<Database> {
  const supabase = useContext(Context);
  if (supabase === undefined)
    throw Error('No supabase client has been specified using Provider.');

  return useMemo(() => supabase, [supabase]);
}
