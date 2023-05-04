import React from 'react';
import { renderHook, waitFor, act } from '@testing-library/react';
import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useSignIn } from './use-sign-in';
import { supabase } from '@horarioz/supabase';
import { AuthError, User, Session } from '@supabase/supabase-js';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('useSignIn', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create new user', async () => {
    jest.spyOn(supabase.auth, 'signInWithPassword').mockResolvedValueOnce({
      data: { user: null, session: null },
      error: new AuthError('Invalid login credentials', 400),
    });

    const { result } = renderHook(() => useSignIn(), {
      wrapper: wrapper,
    });

    act(() => {
      result.current.mutate({
        email: 'invalid-user@horarioz.com',
        password: '1234356',
      });
    });

    await waitFor(() => {
      return result.current.isError;
    });

    expect(result.current.isError).toBe(true);
    expect(result.current.error?.message).toBe('Invalid login credentials');
  });

  it('should load a request', async () => {
    const { result } = renderHook(() => useSignIn(), {
      wrapper: wrapper,
    });

    act(() => {
      result.current.mutate({
        email: 'invalid-user@horarioz.com',
        password: '1234356',
      });
    });

    await waitFor(() => {
      return result.current.isLoading;
    });

    expect(result.current.isLoading).toBe(true);
  });

  it('should sign in the user', async () => {
    jest.spyOn(supabase.auth, 'signInWithPassword').mockResolvedValueOnce({
      data: {
        user: {
          email: 'wendel@horarioz.com',
        } as User,
        session: {
          access_token: 'BLAZIKEN IS THE BEST POKEMON',
        } as Session,
      },
      error: null,
    });

    const { result } = renderHook(() => useSignIn(), {
      wrapper: wrapper,
    });

    const input = {
      email: 'wendel@horarioz.com',
      password: '1',
    };

    act(() => {
      result.current.mutate(input);
    });

    await waitFor(() => {
      return result.current.isSuccess;
    });

    expect(result.current.isSuccess).toBe(true);
    expect(result.current.data?.data.user?.email).toBe(input.email);
    expect(result.current.data?.data.session?.access_token).toBeDefined();
  });
});
