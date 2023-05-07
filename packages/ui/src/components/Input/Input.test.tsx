import { screen, fireEvent, waitFor, render } from '@testing-library/react';

import { Input } from './Input';

describe('<Input />', () => {
  it('renders component successfully', () => {
    render(<Input label="Nome completo" />);
    const text = screen.getByText('Nome completo');

    expect(text).toBeInTheDocument();
  });

  it('should be render input with error message', () => {
    render(<Input label="Name" error="Name required" />);
    const text = screen.getByText('Name');
    const error = screen.getByText('Name required');

    expect(text).toBeInTheDocument();
    expect(error).toBeInTheDocument();
  });

  it('should be render input with helper message', () => {
    render(<Input label="Name" helper="Helper text" />);
    const text = screen.getByText('Name');
    const helper = screen.getByText('Helper text');

    expect(text).toBeInTheDocument();
    expect(helper).toBeInTheDocument();
  });

  it('should be change label color when have error', () => {
    render(<Input label="Name" error="Name required" id="Name" />);
    const text = screen.getByText('Name');

    const input = screen.getByRole('textbox', { name: 'Name' });

    fireEvent.focus(input);

    expect(text).toHaveClass('text-red-500');
  });

  it('should be with background gray when input is disabled', () => {
    render(<Input label="Name" error="Name required" disabled id="Name" />);
    const text = screen.getByText('Name');

    const input = screen.getByRole('textbox', { name: 'Name' });

    fireEvent.focus(input);

    expect(text).toHaveClass('bg-gray-100');
  });

  it('should change input when have placeholder', () => {
    render(
      <Input
        label="Name"
        error="Name required"
        placeholder="E-mail"
        id="Name"
      />
    );
    const text = screen.getByText('Name');

    const input = screen.getByRole('textbox', { name: 'Name' });

    fireEvent.focus(input);

    expect(text).toHaveClass('duration-300');
  });

  it('input should be focussed when user press', async () => {
    const spyOnFocus = jest.fn();
    const { container } = render(<Input label="Name" onFocus={spyOnFocus} />);
    const input = container.getElementsByTagName('input')[0];

    fireEvent.focus(input);

    await waitFor(() => expect(spyOnFocus).toHaveBeenCalled());
  });

  it('input should be not call function when not pass onFocus', async () => {
    const spyOnFocus = jest.fn();
    render(<Input label="Name" id="Name" />);

    const text = screen.getByRole('textbox', { name: 'Name' });

    fireEvent.focus(text);

    await waitFor(() => expect(spyOnFocus).not.toHaveBeenCalled());
  });

  it('input should be not focussed when user press onBlur', async () => {
    const spyOnFocus = jest.fn();
    render(<Input label="Name" onBlur={spyOnFocus} id="Name" />);

    const text = screen.getByRole('textbox', { name: 'Name' });

    fireEvent.blur(text);

    await waitFor(() => expect(spyOnFocus).toHaveBeenCalled());
  });

  it('input should be not call function when not pass onBlur', async () => {
    const spyOnFocus = jest.fn();
    render(<Input label="Name" id="Name" />);

    const text = screen.getByRole('textbox', { name: 'Name' });

    fireEvent.blur(text);

    await waitFor(() => expect(spyOnFocus).not.toHaveBeenCalled());
  });

  it('should be render input with suffix', () => {
    render(<Input label="Name" error="Name required" suffix="horarioz.com" />);
    const text = screen.getByText('horarioz.com');

    expect(text).toBeInTheDocument();
  });
});
