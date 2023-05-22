import { render, RenderResult } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter as Router } from 'react-router-dom';
import { supabase as createClient } from '@horarioz/supabase';
import i18n from '../../configs/i18n';
import { SupabaseProvider } from '@horarioz/hooks';

const queryClient = new QueryClient();

export const supabase = createClient('https://example.com', 'some.api.key');

i18n.changeLanguage('en');

export const renderWrapper = (children: React.ReactNode): RenderResult => {
  return render(
    <Router>
      <SupabaseProvider supabaseClient={supabase}>
        <QueryClientProvider client={queryClient}>
          <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
        </QueryClientProvider>
      </SupabaseProvider>
    </Router>
  );
};
