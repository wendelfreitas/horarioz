import { screen, waitFor, act } from '@testing-library/react';
import fireEvent from '@testing-library/user-event';
import { SignUpForm } from './SignUpForm';
import { renderWrapper, supabase } from '../../utils/tests/helpers';
import { AuthError, Session, User } from '@supabase/supabase-js';
import { useAuthStore } from '@horarioz/hooks';

describe('<SignUpForm />', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => null);
  });

  it('should render all inputs on login page', () => {
    renderWrapper(<SignUpForm />);
    const email = screen.getByText('Email');
    const password = screen.getByText('Password');
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
  });
  it('should render login button', () => {
    renderWrapper(<SignUpForm />);
    const button = screen.getByText('Sign Up');

    expect(button).toBeInTheDocument();
  });

  it('should render input errors when click login button after fill invalid e-mail', async () => {
    renderWrapper(<SignUpForm />);

    const button = screen.getByText('Sign Up');
    const name = screen.getByText('Full Name');
    const email = screen.getByText('Email');
    const password = screen.getByText('Password');
    const confirmPassword = screen.getByText('Confirm Password');

    await act(async () => {
      await fireEvent.type(email, 'Invalid Email');
      await fireEvent.type(name, 'Invalid User');
      await fireEvent.type(password, 'invalid@email');
      await fireEvent.type(confirmPassword, 'invalid@email');
      fireEvent.click(button);
    });

    const message = screen.getByText('Invalid email');

    await waitFor(() => {
      expect(message).toBeInTheDocument();
    });
  });

  it('should click on submit and dispatch register mutate and got an error', async () => {
    jest.spyOn(supabase.auth, 'signUp').mockResolvedValueOnce({
      data: { user: null, session: null },
      error: new AuthError('User already registered', 400),
    });

    renderWrapper(<SignUpForm />);

    const button = screen.getByText('Sign Up');
    const name = screen.getByText('Full Name');
    const email = screen.getByText('Email');
    const password = screen.getByText('Password');
    const confirmPassword = screen.getByText('Confirm Password');

    await act(async () => {
      await fireEvent.type(name, 'Wendel Freitas');
      await fireEvent.type(email, 'wendel@horarioz.com');
      await fireEvent.type(password, 'test-password');
      await fireEvent.type(confirmPassword, 'test-password');
      await fireEvent.click(button);
    });

    await waitFor(() => {
      expect(screen.getByText('User already registered')).toBeInTheDocument();
    });
  });

  it('should click on submit and dispatch register mutate and redirect to /', async () => {
    jest.spyOn(supabase.auth, 'signUp').mockResolvedValueOnce({
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

    renderWrapper(<SignUpForm />);

    const button = screen.getByText('Sign Up');
    const email = screen.getByText('Email');
    const password = screen.getByText('Password');
    const confirmPassword = screen.getByText('Confirm Password');

    await act(async () => {
      await fireEvent.type(email, 'wendel@horarioz.com');
      await fireEvent.type(password, 'test-password');
      await fireEvent.type(confirmPassword, 'test-password');
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
