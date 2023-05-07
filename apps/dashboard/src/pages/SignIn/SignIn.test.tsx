import { screen } from '@testing-library/react';
import { SignIn } from './SignIn';

import { renderWrapper } from '../../utils/tests/helpers';

describe('<SignIn />', () => {
  it('renders page successfully', () => {
    renderWrapper(<SignIn />);
    const text = screen.getByText('Faça login com sua conta');

    expect(text).toBeInTheDocument();
  });

  it('should render all inputs on login page', () => {
    renderWrapper(<SignIn />);
    const email = screen.getByText('E-mail');
    const password = screen.getByText('Senha');

    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
  });
});
