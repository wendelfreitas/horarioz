import { render, screen } from '@testing-library/react';
import { Content } from './Content';

describe('<Content />', () => {
  it('renders component successfully', () => {
    render(<Content>Hello World</Content>);
    const text = screen.getByText('Hello World');

    expect(text).toBeInTheDocument();
  });
});
