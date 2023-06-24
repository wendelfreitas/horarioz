import { renderHook, waitFor } from '@testing-library/react';
import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useInitialInformations } from './use-initial-informations';
import { supabase as createClient } from '@horarioz/supabase';
import { SessionContextProvider } from '@supabase/auth-helpers-react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

jest.mock('./use-initial-informations');

const mockUseInitialInformations = useInitialInformations as jest.Mock;

const supabase = createClient('https://example.com', 'some.api.key');

const wrapper = ({ children }: { children: ReactNode }) => (
  <SessionContextProvider supabaseClient={supabase}>
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  </SessionContextProvider>
);

describe('useInitialInformations', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return isError true if any query has error', async () => {
    mockUseInitialInformations.mockReturnValue([
      {
        data: null,
        isError: true,
      },
    ]);

    const { result } = renderHook(() => useInitialInformations(), {
      wrapper: wrapper,
    });

    await waitFor(() => {
      return result.current.some((query) => query.isError);
    });

    expect(result.current.some((query) => query.isError)).toBe(true);
  });

  it('should return profile, company and studio', async () => {
    const mockProfile = {
      id: '1',
      name: 'Wendel Freitas',
    };

    const mockCompany = {
      id: '1',
      user_id: mockProfile.id,
      name: 'Acme',
    };

    const mockStudio = {
      id: '1',
      title: 'Acme',
      domain: 'acme.horarioz.com',
      company_id: mockCompany.id,
    };

    mockUseInitialInformations.mockReturnValue([
      {
        data: mockProfile,
        isError: false,
        isSuccess: true,
      },
      {
        data: mockCompany,
        isError: false,
        isSuccess: true,
      },
      {
        data: mockStudio,
        isError: false,
        isSuccess: true,
      },
    ]);

    const { result } = renderHook(() => useInitialInformations(), {
      wrapper: wrapper,
    });

    await waitFor(() => {
      return result.current.some((query) => query.isSuccess);
    });

    const [profile] = result.current;

    expect(profile.data?.id).toBe(mockProfile.id);
  });
});
