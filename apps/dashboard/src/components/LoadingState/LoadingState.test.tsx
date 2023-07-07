import { render, screen } from '@testing-library/react';
import { LoadingState } from './LoadingState';

describe('<LoadingState />', () => {
  it('should renders component successfully', () => {
    render(<LoadingState title="Hello Horarioz" description="Loading" />);
    const text = screen.getByText('Hello Horarioz');

    expect(text).toBeInTheDocument();
  });
});
