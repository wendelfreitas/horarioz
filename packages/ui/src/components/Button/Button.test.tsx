import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('<Button />', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => null);
  });

  it('renders default button', () => {
    const onClick = jest.fn();

    render(<Button onClick={onClick}>Hello World</Button>);

    const button = screen.getByText('Hello World');

    expect(button).toBeInTheDocument();
  });

  it('renders primary button', () => {
    const onClick = jest.fn();

    render(
      <Button variant="primary" onClick={onClick}>
        Hello World
      </Button>
    );

    const button = screen.getByText('Hello World');

    expect(button).toHaveClass('bg-primary-500');
  });

  it('renders secondary button', () => {
    const onClick = jest.fn();

    render(
      <Button variant="secondary" onClick={onClick}>
        Hello World
      </Button>
    );

    const button = screen.getByText('Hello World');

    expect(button).toHaveClass('bg-transparent');
  });

  it('should render a spinner when button is loading', () => {
    const onClick = jest.fn();

    render(
      <Button variant="secondary" onClick={onClick} isLoading>
        Hello World
      </Button>
    );

    const loading = screen.getByTestId('loading-indicator');

    expect(loading).toBeDefined();
  });

  it('should render danger button', () => {
    const onClick = jest.fn();

    render(
      <Button danger onClick={onClick}>
        Hello World
      </Button>
    );

    const button = screen.getByText('Hello World');

    expect(button).toHaveClass('bg-red-500');
  });
});
