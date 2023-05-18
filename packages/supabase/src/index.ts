import { createClient, SupabaseClient } from '@supabase/supabase-js';
import type { Database } from './@types/supabase';
export type { Database } from './@types/supabase';

let client: SupabaseClient<Database>;

export const supabase = (SUPABASE_URL: string, SUPABASE_KEY: string) => {
  if (!SUPABASE_URL || !SUPABASE_KEY) {
    throw Error(
      `[SUPABASE]: You're kidding, right? You forgot the most important thing! No SUPABASE_URL or SUPABASE_KEY has been specified.`
    );
  }

  if (!client) {
    client = createClient<Database>(SUPABASE_URL, SUPABASE_KEY);
  }

  return createClient<Database>(SUPABASE_URL, SUPABASE_KEY);
};

export * from './locales';
