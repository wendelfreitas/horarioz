import { screen } from '@testing-library/react';
import { SignIn } from './SignIn';

import { renderWrapper } from '../../utils/tests/helpers';

describe('<SignIn />', () => {
  it('renders page successfully', () => {
    renderWrapper(<SignIn />);
    const text = screen.getByText('Sign in to your account');

    expect(text).toBeInTheDocument();
  });

  it('should render all inputs on login page', () => {
    renderWrapper(<SignIn />);
    const email = screen.getByText('Email');
    const password = screen.getByText('Password');

    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
  });
});
