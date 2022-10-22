import { render, screen } from '@testing-library/react';
import { SocialButton } from './SocialButton';

describe('<SocialButton />', () => {
  it('renders component successfully', () => {
    render(<SocialButton network="github" title="Welcome Github" />);
    const text = screen.getByText('Welcome Github');

    expect(text).toBeInTheDocument();
  });
});
