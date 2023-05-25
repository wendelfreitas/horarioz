import { render, screen } from '@testing-library/react';
import { Tooltip } from './Tooltip';

describe('<Tooltip />', () => {
  it('renders component successfully', () => {
    render(
      <Tooltip content="Hello World">
        <button>Teste</button>
      </Tooltip>
    );
    const text = screen.getByText('Hello World');

    expect(text).toBeInTheDocument();
  });
});
