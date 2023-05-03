import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://znalpmrcdrtotcsmyjup.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpuYWxwbXJjZHJ0b3Rjc215anVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMxMzU1NjAsImV4cCI6MTk5ODcxMTU2MH0.8iTzsZ-UUcbVCsxbaDwHaVJ69ZmcPZQEt5RV4hE2cRc'
);

export * from './locales';
