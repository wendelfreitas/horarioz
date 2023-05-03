import { ThemeProvider } from '@horarioz/ui';
import { I18nextProvider } from 'react-i18next';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import i18n from './configs/i18n';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { AuthMiddleware } from './components/AuthMiddleware/AuthMiddleware';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <I18nextProvider i18n={i18n}>
          <AuthMiddleware>
            <App />
          </AuthMiddleware>
        </I18nextProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
