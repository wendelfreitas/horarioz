import { renderHook, act } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useAuth, AuthProvider } from './use-auth';

describe('useAuth()', () => {
  it('should have a undefined user when render for first time', async () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <QueryClientProvider client={new QueryClient()}>
        <AuthProvider>{children}</AuthProvider>
      </QueryClientProvider>
    );

    const { result } = renderHook(() => useAuth(), {
      wrapper,
    });

    await act(() => {
      expect(result.current.user).toBeUndefined();
    });
  });
});
