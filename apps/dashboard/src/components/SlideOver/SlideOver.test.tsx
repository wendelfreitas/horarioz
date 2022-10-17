import { render, screen } from '@testing-library/react';
import { SlideOver } from './SlideOver';

describe('<SlideOver />', () => {
  it('renders component successfully', () => {
    render(<SlideOver>Hello Slide Over</SlideOver>);
    const text = screen.getByText('Hello Slide Over');

    expect(text).toBeInTheDocument();
  });
});
