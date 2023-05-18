import { renderHook, waitFor, act } from '@testing-library/react';
import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useUserOnboarding } from './use-user-onboarding';
import { supabase as createClient } from '@horarioz/supabase';
import { SupabaseProvider } from '../../services/use-supabase/use-supabase';
import { useAuthStore } from '../../stores/use-auth/use-auth';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const supabase = createClient('https://example.com', 'some.api.key');

const wrapper = ({ children }: { children: ReactNode }) => (
  <SupabaseProvider value={supabase}>
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  </SupabaseProvider>
);

const mock = {
  data: {
    company: {
      id: '1',
      name: 'company_name',
    },
    profile: {
      id: '1',
      name: 'name',
    },
  },
  error: null,
};

describe('useUserOnboarding', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create an profile, company and studio for this user', async () => {
    useAuthStore.setState({
      user: {
        user_metadata: {},
        app_metadata: {},
        created_at: new Date().toDateString(),
        aud: 'authenticated',

        id: '94b75031-4623-4585-969a-0ce27d9da894',
      },
    });

    supabase.rpc = jest.fn().mockReturnValue({
      single: jest.fn().mockReturnValue(mock),
    });

    const input = {
      name: 'Wendel Freitas',
      phone: '5515999999999',
      company_name: 'Acme',
      slug: 'acme',
    };

    const { result } = renderHook(() => useUserOnboarding(), {
      wrapper: wrapper,
    });

    act(() => {
      result.current.mutate(input);
    });

    await waitFor(() => {
      return result.current.isSuccess;
    });

    expect(result.current.isSuccess).toBe(true);
    expect(result.current.data?.company.id).toBe(mock.data.company.id);
  });

  it('should got an error when try to onboard an user', async () => {
    supabase.rpc = jest.fn().mockReturnValue({
      single: jest.fn().mockReturnValue({
        data: null,
        error: 'Invalid Data',
      }),
    });

    const input = {
      name: 'Wendel Freitas',
      phone: '5515999999999',
      company_name: 'Acme',
      slug: 'acme',
    };

    const { result } = renderHook(() => useUserOnboarding(), {
      wrapper: wrapper,
    });

    act(() => {
      result.current.mutate(input);
    });

    await waitFor(() => {
      return result.current.isError;
    });

    expect(result.current.isError).toBe(true);
  });

  it('should got an error when try to onboard an unauthenticated user', async () => {
    useAuthStore.setState({
      user: null,
    });

    const input = {
      name: 'Wendel Freitas',
      phone: '5515999999999',
      company_name: 'Acme',
      slug: 'acme',
    };

    const { result } = renderHook(() => useUserOnboarding(), {
      wrapper: wrapper,
    });

    act(() => {
      result.current.mutate(input);
    });

    await waitFor(() => {
      return result.current.isError;
    });

    expect(result.current.isError).toBe(true);
    expect(result.current.error?.message).toBe('User not authenticated');
  });
});
