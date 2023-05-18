import { renderHook } from '@testing-library/react';
import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useSupabase } from './use-supabase';

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

describe('useSupabase', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create an profile, company and studio for this user', async () => {
    expect(() => {
      renderHook(() => useSupabase(), {
        wrapper: wrapper,
      });
    }).toThrow('No');
  });
});
