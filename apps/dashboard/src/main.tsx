import { Loading, ThemeProvider } from '@horarioz/ui';
import { I18nextProvider } from 'react-i18next';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import i18n from './configs/i18n';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { AuthProvider } from '@horarioz/hooks';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { supabase } from './services/supabase';
import HashLoader from 'react-spinners/HashLoader';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SessionContextProvider supabaseClient={supabase}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <I18nextProvider i18n={i18n}>
            <AuthProvider
              fallback={
                <div className="grid h-screen place-items-center">
                  <Loading />
                </div>
              }
            >
              <App />
            </AuthProvider>
          </I18nextProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </SessionContextProvider>
  </React.StrictMode>
);
