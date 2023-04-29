import { ThemeProvider } from '@soloquiz/ui';
import { I18nextProvider } from 'react-i18next';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import i18n from './configs/i18n';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
