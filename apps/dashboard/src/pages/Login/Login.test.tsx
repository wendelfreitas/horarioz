import { render, screen } from '@testing-library/react';
import { Login } from './Login';

describe('<Login />', () => {
  it('renders page successfully', () => {
    render(<Login />);
    const text = screen.getByText('Welcome to Stellar Cultures 🚀');

    expect(text).toBeInTheDocument();
  });

  it('should render all inputs on login page', () => {
    render(<Login />);
    const email = screen.getByText('E-mail');
    const password = screen.getByText('Password');

    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
  });

  it('should render login button', () => {
    render(<Login />);
    const button = screen.getByText('Sign In');

    expect(button).toBeInTheDocument();
  });
});
