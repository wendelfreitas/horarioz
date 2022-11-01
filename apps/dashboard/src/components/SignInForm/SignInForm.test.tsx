import { screen, waitFor, act } from '@testing-library/react';
import fireEvent from '@testing-library/user-event';
import { SignInForm } from './SignInForm';
import { renderWrapper } from '../../utils/tests/helpers';
import nock from 'nock';

describe('<SignInForm />', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => null);
  });

  it('should render all inputs on login page', () => {
    renderWrapper(<SignInForm />);
    const email = screen.getByText('E-mail');
    const password = screen.getByText('Senha');

    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
  });

  it('should render login button', () => {
    renderWrapper(<SignInForm />);
    const button = screen.getByText('Entrar');

    expect(button).toBeInTheDocument();
  });

  it('should render input errors when click login button after fill invalid e-mail', async () => {
    renderWrapper(<SignInForm />);

    const button = screen.getByText('Entrar');
    const email = screen.getByText('E-mail');
    const password = screen.getByText('Senha');

    await act(async () => {
      await fireEvent.type(email, 'invalid@email');
      await fireEvent.type(password, 'invalid@email');
      fireEvent.click(button);
    });

    const message = screen.getByText('E-mail inválido');

    await waitFor(() => {
      expect(message).toBeInTheDocument();
    });
  });

  it('should click on submit and dispatch login mutate and return some error on screen', async () => {
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

    renderWrapper(<SignInForm />);

    const button = screen.getByText('Entrar');
    const email = screen.getByText('E-mail');
    const password = screen.getByText('Senha');

    await act(async () => {
      await fireEvent.type(email, 'invalid@email.com');
      await fireEvent.type(password, 'invalid@email');
      await fireEvent.click(button);
    });

    await waitFor(() => {
      expect(
        screen.getByText('Nenhum usuário com este e-mail foi encontrado.')
      ).toBeInTheDocument();
    });
  });

  it.skip('should click on submit and dispatch login mutate and redirect to /', async () => {
    renderWrapper(<SignInForm />);

    const button = screen.getByText('Entrar');
    const email = screen.getByText('E-mail');
    const password = screen.getByText('Senha');

    await act(async () => {
      await fireEvent.type(email, 'test@gmail.com');
      await fireEvent.type(password, 'test-password');
      await fireEvent.click(button);
    });

    await waitFor(() => {
      expect(screen.getByText('Logado')).toBeInTheDocument();
    });
  });
});
