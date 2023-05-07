import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { I18nextProvider } from 'react-i18next';
import { Routes } from './Routes';
import { SupabaseProvider, useAuthStore } from '@horarioz/hooks';
import { PrivateRoute } from './PrivateRoute';
import { User } from '@supabase/supabase-js';
import i18n from '../configs/i18n';
import { PublicRoute } from './PublicRoute';
import { supabase } from '../utils/tests/helpers';

describe('<Routes />', () => {
  beforeEach(() => {
    useAuthStore.setState({ user: null });
  });

  it('renders component with content', () => {
    render(
      <SupabaseProvider value={supabase}>
        <QueryClientProvider client={new QueryClient()}>
          <I18nextProvider i18n={i18n}>
            <Routes />
          </I18nextProvider>
        </QueryClientProvider>
      </SupabaseProvider>
    );
    const text = screen.getByText('Sign in to your account');

    expect(text).toBeInTheDocument();
  });

  it('check if the private route component renders if user is authenticated', () => {
    useAuthStore.setState({ user: { email: 'wendel@horarioz.com' } as User });
    render(
      <SupabaseProvider value={supabase}>
        <QueryClientProvider client={new QueryClient()}>
          <I18nextProvider i18n={i18n}>
            <PrivateRoute>
              <p>Hello Horarioz</p>
            </PrivateRoute>
          </I18nextProvider>
        </QueryClientProvider>
      </SupabaseProvider>
    );

    const text = screen.getByText('Hello Horarioz');

    expect(text).toBeInTheDocument();
  });

  it('check if the private route component renders if user is not authenticated', () => {
    useAuthStore.setState({ user: null });
    render(
      <SupabaseProvider value={supabase}>
        <QueryClientProvider client={new QueryClient()}>
          <I18nextProvider i18n={i18n}>
            <PublicRoute>
              <p>Hello Horarioz - Public Page</p>
            </PublicRoute>
          </I18nextProvider>
        </QueryClientProvider>
      </SupabaseProvider>
    );

    const text = screen.getByText('Hello Horarioz - Public Page');

    expect(text).toBeInTheDocument();
  });
});
