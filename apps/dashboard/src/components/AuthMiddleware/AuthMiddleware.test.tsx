import { screen } from '@testing-library/react';
import { renderWrapper } from '../../utils/tests/helpers';
import { AuthMiddleware } from './AuthMiddleware';

describe('<AuthMiddleware />', () => {
  it('renders component successfully', () => {
    renderWrapper(
      <AuthMiddleware>
        <p>Hello Horarioz</p>
      </AuthMiddleware>
    );
    const text = screen.getByText('Hello Horarioz');

    expect(text).toBeInTheDocument();
  });
});
