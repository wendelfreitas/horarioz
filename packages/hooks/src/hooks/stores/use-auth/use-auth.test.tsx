import { useAuthStore } from './use-auth';

import { User } from '@supabase/supabase-js';

describe('useAuthStore', () => {
  const user = { email: 'wendel@horarioz.com' } as User;

  beforeEach(() => {
    useAuthStore.setState({ user: null });
  });

  it('should have user initial state null', () => {
    const state = useAuthStore.getState();
    expect(state.user).toBeNull();
  });

  it('should set user object', async () => {
    useAuthStore.getState().setUser(user);

    const state = useAuthStore.getState();
    expect(state.user).not.toBeNull();
    expect(state.user?.email).toBe(user.email);
  });
});
