import { render, screen } from '@testing-library/react';
import { Header } from './Header';

describe('<Header />', () => {
  it('renders component successfully', () => {
    render(<Header />);
    const text = screen.getByText('Seu site está publicado e operacional.');

    expect(text).toBeInTheDocument();
  });
});
