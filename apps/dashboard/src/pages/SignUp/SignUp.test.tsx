import { screen } from '@testing-library/react';
import { SignUp } from './SignUp';

import { renderWrapper } from '../../utils/tests/helpers';

describe('<SignUp />', () => {
  it('renders page successfully', () => {
    renderWrapper(<SignUp />);
    const text = screen.getByText('Sign Up into Horarioz ☀️');

    expect(text).toBeInTheDocument();
  });

  it('should render all inputs on sign up page', () => {
    renderWrapper(<SignUp />);
    const email = screen.getByText('E-mail');
    const password = screen.getByText('Senha');

    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
  });
});
