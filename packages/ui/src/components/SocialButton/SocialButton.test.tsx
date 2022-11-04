import { render, screen } from '@testing-library/react';
import { SocialButton } from './SocialButton';

describe('<SocialButton />', () => {
  it('renders component successfully', () => {
    render(<SocialButton network="github" title="Welcome Github" />);
    const text = screen.getByText('Welcome Github');

    expect(text).toBeInTheDocument();
  });

  it('should have a cursor not allowed style when social button is loading', () => {
    const onClick = jest.fn();

    render(
      <SocialButton
        network="github"
        title="Welcome Github"
        onClick={onClick}
        isLoading
      >
        Hello World
      </SocialButton>
    );

    const text = screen.getByText('Welcome Github');

    expect(text).toHaveClass('hover:cursor-not-allowed');
  });
});
