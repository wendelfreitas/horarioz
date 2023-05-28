import { screen } from '@testing-library/react';
import { ConfirmationEmail } from './ConfirmationEmail';

import { renderWrapper } from '@/utils/tests/helpers';

describe('<ConfirmationEmail />', () => {
  it('renders page successfully', () => {
    renderWrapper(<ConfirmationEmail />);
    const text = screen.getByText('Register your account');

    expect(text).toBeInTheDocument();
  });

  it('should render all inputs on sign up page', () => {
    renderWrapper(<ConfirmationEmail />);
    const email = screen.getByText('Email');
    const password = screen.getByText('Password');

    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
  });
});
