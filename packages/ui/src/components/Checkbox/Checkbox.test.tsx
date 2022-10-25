import { fireEvent, render, screen } from '@testing-library/react';
import { Checkbox } from './Checkbox';

describe('<Checkbox />', () => {
  it('renders component successfully', () => {
    render(<Checkbox name="teste" label="teste" />);
    const text = screen.getByText('teste');

    expect(text).toBeInTheDocument();
  });

  it('renders component with align start', () => {
    render(<Checkbox name="teste" label="teste" align="start" />);

    const checkbox = screen.getByText('teste').closest('div');
    expect(checkbox).toHaveClass('items-start');
  });

  it('renders component with align center', () => {
    render(<Checkbox name="teste" label="teste" align="center" />);

    const checkbox = screen.getByText('teste').closest('div');
    expect(checkbox).toHaveClass('items-center');
  });

  it('renders component with align end', () => {
    render(<Checkbox name="teste" label="teste" align="end" />);

    const checkbox = screen.getByText('teste').closest('div');
    expect(checkbox).toHaveClass('items-end');
  });

  it('renders component with disabled styles', () => {
    const result = render(
      <Checkbox id="teste" name="teste" label="teste" align="end" disabled />
    );

    const button = result.container.querySelector('#teste');
    expect(button).toHaveProperty('disabled');
  });

  it('throws on click function', () => {
    const onClick = jest.fn();

    render(
      <Checkbox
        onClick={onClick}
        id="teste"
        name="teste"
        label="teste"
        align="end"
      />
    );

    const checkbox = screen.getByText('teste');

    fireEvent.click(checkbox);
    expect(onClick).toHaveBeenCalled();
  });

  it('throws on change function and apply checked', () => {
    const onClick = jest.fn();

    render(
      <Checkbox
        onClick={onClick}
        id="teste"
        name="teste"
        label="teste"
        align="end"
      />
    );

    const checkbox = screen.getByText('teste');

    fireEvent.change(checkbox, { target: { checked: true } });
    expect(checkbox).toHaveProperty('checked');
  });

  it('throws on change function and remove checked', () => {
    const onClick = jest.fn();

    render(
      <Checkbox
        defaultChecked
        onClick={onClick}
        id="teste"
        name="teste"
        label="teste"
        align="end"
      />
    );

    const checkbox = screen.getByText('teste');

    fireEvent.change(checkbox, { target: { checked: false } });
    expect(checkbox).not.toBeChecked();
  });
});
