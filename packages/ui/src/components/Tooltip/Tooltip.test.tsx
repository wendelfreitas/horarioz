import { render, screen, fireEvent } from '@testing-library/react';
import { Tooltip } from './Tooltip';

describe('<Tooltip />', () => {
  it('renders component successfully', () => {
    render(
      <Tooltip content="Hello World" distance={11}>
        <button>Teste</button>
      </Tooltip>
    );
    const text = screen.getByText('Teste');

    expect(text).toBeInTheDocument();
  });

  it('should display tooltip message on <div /> mouseover', async () => {
    const { getByText } = render(
      <Tooltip content="Hello World" distance={11}>
        <button>Teste</button>
      </Tooltip>
    );

    fireEvent.mouseOver(getByText('Teste'));

    expect(await getByText('Teste')).toBeInTheDocument();
  });
});
