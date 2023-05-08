import { render, screen } from '@testing-library/react';
import { Header } from './Header';

describe('<Header />', () => {
  it('renders component successfully', () => {
    render(<Header />);
    const text = screen.getByText('seu site está publicado e operacional.');

    expect(text).toBeInTheDocument();
  });
});
