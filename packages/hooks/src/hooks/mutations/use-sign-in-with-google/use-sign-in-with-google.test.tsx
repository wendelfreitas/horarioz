import { renderHook, act, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useSignInWithGoogle } from './use-sign-in-with-google';
import { supabase as createClient } from '@horarioz/supabase';
import { SupabaseProvider } from '../../services/use-supabase/use-supabase';
import { ReactNode } from 'react';
import { AuthError } from '@supabase/supabase-js';

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

describe('useSignInWithGoogle', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return error', async () => {
    jest.spyOn(supabase.auth, 'signInWithOAuth').mockResolvedValueOnce({
      data: { provider: 'google', url: null },
      error: new AuthError('Invalid OAuth credentials', 400),
    });

    const { result } = renderHook(() => useSignInWithGoogle(), {
      wrapper: wrapper,
    });

    act(() => {
      result.current.mutate();
    });

    await waitFor(() => {
      return result.current.isError;
    });

    expect(result.current.isError).toBe(true);
    expect(result.current.error?.message).toBe('Invalid OAuth credentials');
  });

  it('should login with google provider', async () => {
    jest.spyOn(supabase.auth, 'signInWithOAuth').mockResolvedValueOnce({
      data: { provider: 'google', url: 'https://example.com' },
      error: null,
    });

    const { result } = renderHook(() => useSignInWithGoogle(), {
      wrapper: wrapper,
    });

    act(() => {
      result.current.mutate();
    });

    await waitFor(() => {
      return result.current.isSuccess;
    });

    expect(result.current.isSuccess).toBe(true);
  });
});
