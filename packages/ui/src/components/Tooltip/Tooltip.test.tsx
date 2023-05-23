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

  // it('should have a cursor not allowed style when social button is loading', () => {
  //   const onClick = jest.fn();

  //   render(
  //     <Tooltip
  //       content="google"
  //     >
  //       Hello World
  //     </Tooltip>
  //   );

  //   const text = screen.getByText('Sign in with Google');

  //   expect(text).toHaveClass('cursor-not-allowed');
  // });
});
