import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Tooltip } from './Tooltip';

describe('<Tooltip />', () => {
  it('renders component successfully', () => {
    render(
      <Tooltip content="Hello World" distance={11}>
        <button>Teste</button>
      </Tooltip>
    );
    const text = screen.getByText('Hello World');

    expect(text).toBeInTheDocument();
  });

  it('should display tooltip message on <div /> mouseover', async () => {
    const { getByText, getByRole } = render(
      <Tooltip content="Hello World" distance={11}>
        <button>Teste</button>
      </Tooltip>
    );

    fireEvent.mouseOver(getByRole('button'));

    await waitFor(() => getByText('Hello World'));
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });
});
