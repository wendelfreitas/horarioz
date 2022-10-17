import { render, screen } from '@testing-library/react';
import { Layout } from './Layout';
import 'intersection-observer';

describe('<Layout />', () => {
  it('renders component with content', () => {
    render(<Layout />);
    const text = screen.getByText('Hello Content');

    expect(text).toBeInTheDocument();
  });

  it('renders component with slide over', () => {
    render(<Layout />);
    const text = screen.getByText('Hello Slide Over');

    expect(text).toBeInTheDocument();
  });
});
