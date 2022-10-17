import { render, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';

describe('<Sidebar />', () => {
  it('renders component successfully', () => {
    render(<Sidebar />);
    const text = screen.getByText('Wendel Freitas');

    expect(text).toBeInTheDocument();
  });
});
