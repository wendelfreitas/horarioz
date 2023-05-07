import { createClient, SupabaseClient } from '@supabase/supabase-js';

let client: SupabaseClient;

export const supabase = (SUPABASE_URL: string, SUPABASE_KEY: string) => {
  if (!SUPABASE_URL || !SUPABASE_KEY) {
    throw Error(
      `[SUPABASE]: You're kidding, right? You forgot the most important thing! No SUPABASE_URL or SUPABASE_KEY has been specified.`
    );
  }

  if (!client) {
    client = createClient(SUPABASE_URL, SUPABASE_KEY);
  }

  return client;
};

export * from './locales';
