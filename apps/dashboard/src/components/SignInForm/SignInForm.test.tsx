import { screen, waitFor, act } from '@testing-library/react';
import fireEvent from '@testing-library/user-event';
import { SignInForm } from './SignInForm';
import { renderWrapper, supabase } from '@/utils/tests/helpers';
import { AuthError, Session, User } from '@supabase/supabase-js';
import { useAuthStore } from '@horarioz/hooks';

describe('<SignInForm />', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => null);
  });

  it('should render all inputs on login page', () => {
    renderWrapper(<SignInForm />);
    const email = screen.getByText('Email');
    const password = screen.getByText('Password');
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
  });
  it('should render login button', () => {
    renderWrapper(<SignInForm />);
    const button = screen.getByText('Sign In');

    expect(button).toBeInTheDocument();
  });

  it('should render input errors when click login button after fill invalid e-mail', async () => {
    renderWrapper(<SignInForm />);

    const button = screen.getByText('Sign In');
    const email = screen.getByText('Email');
    const password = screen.getByText('Password');

    await act(async () => {
      await fireEvent.type(email, 'Invalid Email');
      await fireEvent.type(password, 'invalid@email');
      fireEvent.click(button);
    });

    const message = screen.getByText('Invalid email');

    await waitFor(() => {
      expect(message).toBeInTheDocument();
    });
  });

  it('should click on submit and dispatch login mutate and return some error on screen', async () => {
    jest.spyOn(supabase.auth, 'signInWithPassword').mockResolvedValueOnce({
      data: { user: null, session: null },
      error: new AuthError('Invalid login credentials', 400),
    });

    renderWrapper(<SignInForm />);

    const button = screen.getByText('Sign In');
    const email = screen.getByText('Email');
    const password = screen.getByText('Password');

    await act(async () => {
      await fireEvent.type(email, 'invalid@email.com');
      await fireEvent.type(password, 'invalid@email');
      await fireEvent.click(button);
    });

    await waitFor(() => {
      expect(
        screen.getByText(
          'This email is not registered or the password is incorrect.'
        )
      ).toBeInTheDocument();
    });
  });

  it('should click on submit and dispatch login mutate and redirect to /', async () => {
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

    renderWrapper(<SignInForm />);

    const button = screen.getByText('Sign In');
    const email = screen.getByText('Email');
    const password = screen.getByText('Password');

    await act(async () => {
      await fireEvent.type(email, 'wendel@horarioz.com');
      await fireEvent.type(password, 'test-password');
      await fireEvent.click(button);
    });

    useAuthStore.setState({
      user: {
        email: 'wendel@horarioz.com',
      } as User,
    });

    await waitFor(() => {
      expect(useAuthStore.getState().user?.email).toBe('wendel@horarioz.com');
    });
  });

  it('should click on google button and call mutate', async () => {
    jest.spyOn(supabase.auth, 'signInWithOAuth').mockResolvedValueOnce({
      data: { provider: 'google', url: 'https://example.com' },
      error: null,
    });

    renderWrapper(<SignInForm />);

    const button = screen.getByText('Sign in with Google');

    await act(async () => {
      await fireEvent.click(button);
    });

    useAuthStore.setState({
      user: {
        email: 'wendel@horarioz.com',
      } as User,
    });

    await waitFor(() => {
      expect(useAuthStore.getState().user?.email).toBe('wendel@horarioz.com');
    });
  });
});
