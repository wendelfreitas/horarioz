import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { I18nextProvider } from 'react-i18next';
import { Routes } from './Routes';
import i18n from '../configs/i18n';

describe('<Routes />', () => {
  it('renders component with content', () => {
    render(
      <QueryClientProvider client={new QueryClient()}>
        <I18nextProvider i18n={i18n}>
          <Routes />
        </I18nextProvider>
      </QueryClientProvider>
    );
    const text = screen.getByText('Sign in into Soloquiz ☀️');

    expect(text).toBeInTheDocument();
  });
});
