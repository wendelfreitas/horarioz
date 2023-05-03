import React from 'react';
import { renderHook, waitFor, act } from '@testing-library/react';
import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useSignOut } from './use-sign-out';
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

describe('useSignOut', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should logout the authenticated user', async () => {
    jest.spyOn(supabase.auth, 'signOut').mockResolvedValueOnce({
      error: null,
    });

    const { result } = renderHook(() => useSignOut(), {
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
