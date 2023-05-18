import React from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import { MemoryRouter } from 'react-router-dom';
import { SupabaseProvider } from '@horarioz/hooks';
import { supabase } from '@horarioz/supabase';

const test = supabase('https://example.com', 'some.api.key');

// Global decorator to apply the styles to all stories
export const decorators = [
  (Story) => (
    <SupabaseProvider value={test}>
      <QueryClientProvider client={new QueryClient()}>
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      </QueryClientProvider>
    </SupabaseProvider>
  ),
];
