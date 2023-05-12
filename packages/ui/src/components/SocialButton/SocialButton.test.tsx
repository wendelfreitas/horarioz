import { render, screen } from '@testing-library/react';
import { SocialButton } from './SocialButton';

describe('<SocialButton />', () => {
  it('renders component successfully', () => {
    render(<SocialButton network="google" title="Sign in with Google" />);
    const text = screen.getByText('Sign in with Google');

    expect(text).toBeInTheDocument();
  });

  it('should have a cursor not allowed style when social button is loading', () => {
    const onClick = jest.fn();

    render(
      <SocialButton
        network="google"
        title="Sign in with Google"
        onClick={onClick}
        isLoading
      >
        Hello World
      </SocialButton>
    );

    const text = screen.getByText('Sign in with Google');

    expect(text).toHaveClass('cursor-not-allowed');
  });
});
