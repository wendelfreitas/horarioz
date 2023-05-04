import { supabase as createClient } from '@horarioz/supabase';

let client;

if (!client) {
  client = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_KEY
  );
}

export const supabase = client;
