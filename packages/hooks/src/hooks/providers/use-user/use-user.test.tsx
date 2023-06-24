import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';
import { AuthProvider, AuthContext } from './use-user';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

describe('AuthProvider', () => {
  it('should provide the correct context values', () => {
    const testComponent = (
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <AuthContext.Consumer>
            {(value) => {
              expect(value).toHaveProperty('user');
              expect(value).toHaveProperty('profile');
              expect(value).toHaveProperty('company');
              expect(value).toHaveProperty('studio');
              expect(value).toHaveProperty('isLoading');
              return null;
            }}
          </AuthContext.Consumer>
        </AuthProvider>
      </QueryClientProvider>
    );
    render(testComponent);
  });
});
