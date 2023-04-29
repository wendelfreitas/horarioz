import { screen, render } from '@testing-library/react';
import { Input } from './Input';

describe('<Input />', () => {
  it('renders component successfully', () => {
    render(<Input label="Nome completo" name="email" />);

    const text = screen.getByText('Nome completo');

    expect(text).toBeInTheDocument();
  });
});
