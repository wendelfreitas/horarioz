import { render, screen } from '@testing-library/react';
import { Calendar } from './Calendar';

describe('<Calendar />', () => {
  it('renders component successfully', () => {
    render(
      <Calendar
        selected={new Date('2023-05-05')}
        month={new Date('2023-05-05')}
        mode="single"
      />
    );
    const text = screen.getByText('May 2023');

    expect(text).toBeInTheDocument();
  });
});
