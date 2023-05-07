import { screen } from '@testing-library/react';
import { SignUp } from './SignUp';

import { renderWrapper } from '../../utils/tests/helpers';

describe('<SignUp />', () => {
  it('renders page successfully', () => {
    renderWrapper(<SignUp />);
    const text = screen.getByText('Register your account');

    expect(text).toBeInTheDocument();
  });

  it('should render all inputs on sign up page', () => {
    renderWrapper(<SignUp />);
    const email = screen.getByText('Email');
    const password = screen.getByText('Password');

    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
  });
});
