import { render, screen } from '@testing-library/react';
import { AuthMiddleware } from './AuthMiddleware';

describe('<AuthMiddleware />', () => {
  it('renders component successfully', () => {
    render(
      <AuthMiddleware>
        <p>Hello Horarioz</p>
      </AuthMiddleware>
    );
    const text = screen.getByText('Hello Horarioz');

    expect(text).toBeInTheDocument();
  });
});
