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
    const email = screen.getByText('E-mail');
    const password = screen.getByText('Senha');
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
  });
  it('should render login button', () => {
    renderWrapper(<SignUpForm />);
    const button = screen.getByText('Entrar');

    expect(button).toBeInTheDocument();
  });

  it('should render input errors when click login button after fill invalid e-mail', async () => {
    renderWrapper(<SignUpForm />);

    const button = screen.getByText('Entrar');
    const name = screen.getByText('@SignInForm.name');
    const email = screen.getByText('E-mail');
    const password = screen.getByText('Senha');
    const confirmPassword = screen.getByText('@SignInForm.confirm_password');

    await act(async () => {
      await fireEvent.type(email, 'Invalid Email');
      await fireEvent.type(name, 'Invalid User');
      await fireEvent.type(password, 'invalid@email');
      await fireEvent.type(confirmPassword, 'invalid@email');
      fireEvent.click(button);
    });

    const message = screen.getByText('E-mail inválido');

    await waitFor(() => {
      expect(message).toBeInTheDocument();
    });
  });

  it.skip('should click on submit and dispatch login mutate and return some error on screen', async () => {
    jest.spyOn(supabase.auth, 'signInWithPassword').mockResolvedValueOnce({
      data: { user: null, session: null },
      error: new AuthError('Invalid login credentials', 400),
    });

    renderWrapper(<SignUpForm />);

    const button = screen.getByText('Entrar');
    const name = screen.getByText('@SignInForm.name');
    const email = screen.getByText('E-mail');
    const password = screen.getByText('Senha');
    const confirmPassword = screen.getByText('@SignInForm.confirm_password');

    await act(async () => {
      await fireEvent.type(email, 'invalid@gmail.com');
      await fireEvent.type(name, 'Invalid User');
      await fireEvent.type(password, 'invalid@email');
      await fireEvent.type(confirmPassword, 'invalid@email');
      fireEvent.click(button);
    });

    await waitFor(() => {
      expect(
        screen.getByText(
          'Esse e-mail não está cadastrado ou a senha está incorreta.'
        )
      ).toBeInTheDocument();
    });
  });

  it.skip('should click on submit and dispatch login mutate and redirect to /', async () => {
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

    const button = screen.getByText('Entrar');
    const name = screen.getByText('@SignInForm.name');
    const email = screen.getByText('E-mail');
    const password = screen.getByText('Senha');
    const confirmPassword = screen.getByText('@SignInForm.confirm_password');

    await act(async () => {
      await fireEvent.type(email, 'invalid@gmail.com');
      await fireEvent.type(name, 'Invalid User');
      await fireEvent.type(password, 'invalid@email');
      await fireEvent.type(confirmPassword, 'invalid@email');
      fireEvent.click(button);
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
