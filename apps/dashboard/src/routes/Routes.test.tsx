import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { I18nextProvider } from 'react-i18next';
import { Routes } from './Routes';
import { AuthContext, SupabaseProvider } from '@horarioz/hooks';
import { PrivateRoute } from './PrivateRoute';
import i18n from '../configs/i18n';
import { PublicRoute } from './PublicRoute';
import { supabase } from '../utils/tests/helpers';
import { MemoryRouter } from 'react-router-dom';

describe('<Routes />', () => {
  it('renders component with content', () => {
    render(
      <SupabaseProvider supabaseClient={supabase}>
        <QueryClientProvider client={new QueryClient()}>
          <I18nextProvider i18n={i18n}>
            <AuthContext.Provider
              value={{
                isLoading: false,
                user: null,
              }}
            >
              <Routes />
            </AuthContext.Provider>
          </I18nextProvider>
        </QueryClientProvider>
      </SupabaseProvider>
    );
    const text = screen.getByText('Sign in to your account');

    expect(text).toBeInTheDocument();
  });

  it('check if the private route component renders if user is authenticated', () => {
    render(
      <SupabaseProvider supabaseClient={supabase}>
        <QueryClientProvider client={new QueryClient()}>
          <I18nextProvider i18n={i18n}>
            <MemoryRouter>
              <AuthContext.Provider
                value={{
                  isLoading: false,
                  user: {
                    user_metadata: {},
                    app_metadata: {},
                    created_at: new Date().toDateString(),
                    aud: 'authenticated',

                    id: '94b75031-4623-4585-969a-0ce27d9da894',
                  },
                }}
              >
                <PrivateRoute>
                  <p>Hello Horarioz</p>
                </PrivateRoute>
              </AuthContext.Provider>
            </MemoryRouter>
          </I18nextProvider>
        </QueryClientProvider>
      </SupabaseProvider>
    );

    const text = screen.getByText('Hello Horarioz');

    expect(text).toBeInTheDocument();
  });

  it('check if the private route component renders if user is not authenticated', () => {
    render(
      <SupabaseProvider supabaseClient={supabase}>
        <QueryClientProvider client={new QueryClient()}>
          <I18nextProvider i18n={i18n}>
            <MemoryRouter>
              <PublicRoute>
                <p>Hello Horarioz - Public Page</p>
              </PublicRoute>
            </MemoryRouter>
          </I18nextProvider>
        </QueryClientProvider>
      </SupabaseProvider>
    );

    const text = screen.getByText('Hello Horarioz - Public Page');

    expect(text).toBeInTheDocument();
  });
});
