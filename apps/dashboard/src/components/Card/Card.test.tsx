import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('<Card />', () => {
  it('should renders component successfully', () => {
    render(<Card>Hello Card</Card>);
    const text = screen.getByText('Hello Card');

    expect(text).toBeInTheDocument();
  });

  it('should renders component with title and description', () => {
    render(
      <Card title="Title" description="Description">
        Hello Card
      </Card>
    );
    const text = screen.getByText('Hello Card');
    const title = screen.getByText('Title');
    const description = screen.getByText('Description');

    expect(text).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
});
