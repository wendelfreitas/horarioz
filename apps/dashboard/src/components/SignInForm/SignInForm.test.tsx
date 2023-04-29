import { screen } from '@testing-library/react';
import { SignInForm } from './SignInForm';
import { renderWrapper } from '../../utils/tests/helpers';

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
});
