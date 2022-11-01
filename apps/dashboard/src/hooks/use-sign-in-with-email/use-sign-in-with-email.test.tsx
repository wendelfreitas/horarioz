import { waitFor, renderHook } from '@testing-library/react';
import { EmailAuthProvider } from 'firebase/auth';
import { QueryClientProvider, QueryClient } from 'react-query';
import nock from 'nock';

export const useSignInWithEmail = jest.fn();

describe('useSignInWithEmail()', () => {
  test('it returns a User when signed in', async () => {
    useSignInWithEmail.mockReturnValue({
      mutate: jest.fn(),
      isLoading: true,
      isSuccess: true,
    });

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <QueryClientProvider client={new QueryClient()}>
        {children}
      </QueryClientProvider>
    );

    const { result } = renderHook(() => useSignInWithEmail(), {
      wrapper,
    });

    await waitFor(() => {
      result.current.mutate(
        EmailAuthProvider.credential('wendel@test.com', 'password')
      );

      return result.current.isLoading;
    });

    expect(result.current.isLoading).toBeTruthy();
    expect(result.current.mutate).toBeCalled();
  });

  test('it returns a User when signed in 2 ', async () => {
    nock('https://identitytoolkit.googleapis.com/v1')
      .post(
        '/accounts:signInWithPassword?key=AIzaSyBJ-Dgk5ekBcSjiV7CKhQZGDHu0VoicyEw',
        {
          email: 'invalid@email.com',
          password: 'invalid@email',
          returnSecureToken: true,
        }
      )
      .reply(400, {
        error: {
          code: 400,
          message: 'EMAIL_NOT_FOUND',
          errors: [
            {
              message: 'EMAIL_NOT_FOUND',
              domain: 'global',
              reason: 'invalid',
            },
          ],
        },
      });

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <QueryClientProvider client={new QueryClient()}>
        {children}
      </QueryClientProvider>
    );

    const { result } = renderHook(() => useSignInWithEmail(), {
      wrapper,
    });

    await waitFor(() => {
      result.current.mutate(
        EmailAuthProvider.credential('wendel@test.com', 'password')
      );

      return result.current.isLoading;
    });

    expect(result.current.isLoading).toBeTruthy();
    expect(result.current.mutate).toBeCalled();
  });
});
