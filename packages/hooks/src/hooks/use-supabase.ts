import { useMemo } from 'react';
import { supabase } from '@horarioz/supabase';

const useSupabase = () => {
  return useMemo(() => supabase, []);
};

export default useSupabase;
