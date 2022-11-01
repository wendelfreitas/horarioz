import { render, screen } from '@testing-library/react';
import { Routes } from './Routes';

describe('<Routes />', () => {
  it('renders component with content', () => {
    render(<Routes />);
    const text = screen.getByText('Hello Content');

    expect(text).toBeInTheDocument();
  });
});
