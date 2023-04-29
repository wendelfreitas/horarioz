import { screen } from '@testing-library/react';
import { Login } from './Login';

import { renderWrapper } from '../../utils/tests/helpers';

describe('<Login />', () => {
  it('renders page successfully', () => {
    renderWrapper(<Login />);
    const text = screen.getByText('Sign in into Soloquiz ☀️');

    expect(text).toBeInTheDocument();
  });

  it('should render all inputs on login page', () => {
    renderWrapper(<Login />);
    const email = screen.getByText('E-mail');
    const password = screen.getByText('Senha');

    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
  });
});
