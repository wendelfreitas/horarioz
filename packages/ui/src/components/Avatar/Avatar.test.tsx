import { render, screen } from '@testing-library/react';
import { Avatar } from './Avatar';

describe('<Avatar />', () => {
  it('renders avatar component with name initials', () => {
    render(<Avatar name="Wendel Freitas" />);
    const text = screen.getByText('WF');

    expect(text).toBeInTheDocument();
  });
});
