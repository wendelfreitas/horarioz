import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { I18nextProvider } from 'react-i18next';
import { Routes } from './Routes';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { useAuthStore } from '@horarioz/hooks';
import { PrivateRoute } from './PrivateRoute';
import { User } from '@supabase/supabase-js';
import i18n from '../configs/i18n';
import { PublicRoute } from './PublicRoute';
import { supabase } from '../utils/tests/helpers';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

describe('<Routes />', () => {
  it('renders component with content', () => {
    render(
      <QueryClientProvider client={new QueryClient()}>
        <I18nextProvider i18n={i18n}>
          <Routes />
        </I18nextProvider>
      </QueryClientProvider>
    );
    const text = screen.getByText('Sign in to your account');

    expect(text).toBeInTheDocument();
  });

  it('check if the private route component renders if user is authenticated', () => {
    const user = { user: { email: 'wendel@horarioz.com' } as User };
    render(
      <QueryClientProvider client={new QueryClient()}>
        <I18nextProvider i18n={i18n}>
          <PrivateRoute>
            <p>Hello Horarioz</p>
          </PrivateRoute>
        </I18nextProvider>
      </QueryClientProvider>
    );

    const text = screen.getByText('Hello Horarioz');

    expect(text).toBeInTheDocument();
  });

  it('check if the private route component renders if user is not authenticated', () => {
    useAuthStore.setState({ user: null });
    render(
      <QueryClientProvider client={new QueryClient()}>
        <I18nextProvider i18n={i18n}>
          <PublicRoute>
            <p>Hello Horarioz - Public Page</p>
          </PublicRoute>
        </I18nextProvider>
      </QueryClientProvider>
    );

    const text = screen.getByText('Hello Horarioz - Public Page');

    expect(text).toBeInTheDocument();
  });
});
