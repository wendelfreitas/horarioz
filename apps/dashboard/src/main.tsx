import React from 'react';
import ReactDOM from 'react-dom/client';
import i18n from './configs/i18n';
import { ThemeProvider } from '@horarioz/ui';
import { AuthProvider, SupabaseProvider } from '@horarioz/hooks';
import { I18nextProvider } from 'react-i18next';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { supabase } from './services/supabase';
import { App } from './App';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SupabaseProvider supabaseClient={supabase}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <I18nextProvider i18n={i18n}>
            <AuthProvider>
              <div className="animate-fade-up h-full">
                <App />
              </div>
            </AuthProvider>
          </I18nextProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </SupabaseProvider>
  </React.StrictMode>
);
