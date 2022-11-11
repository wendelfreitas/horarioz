import { render, screen } from '@testing-library/react';
import { Alert } from './Alert';

describe('<Alert />', () => {
  it('renders component successfully', () => {
    render(<Alert title="Warning Alert" type="warning" />);
    const text = screen.getByText('Warning Alert');

    expect(text).toBeInTheDocument();
  });

  it('renders component with string content', () => {
    render(
      <Alert
        title="Warning Alert"
        type="warning"
        content="Hello string content"
      />
    );
    const text = screen.getByText('Hello string content');

    expect(text).toBeInTheDocument();
  });

  it('should render component inside content', () => {
    render(
      <Alert
        title="Warning Alert"
        type="warning"
        content={
          <div>
            <p>Component Content</p>
          </div>
        }
      />
    );
    const text = screen.getByText('Component Content');

    expect(text).toBeInTheDocument();
  });

  it('should render this component with border styles', () => {
    const { container } = render(
      <Alert
        title="Warning Alert"
        type="warning"
        border
        content="Content with border"
      />
    );
    const wrapper = container.firstChild;

    expect(wrapper).toHaveClass('border-2');
  });
});
