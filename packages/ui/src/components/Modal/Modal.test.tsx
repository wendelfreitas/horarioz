import { render, screen } from '@testing-library/react';
import { Modal } from './Modal';

describe('<Modal />', () => {
  it('renders component successfully', () => {
    const onClose = jest.fn();

    render(
      <Modal isOpen title="Hello Horarioz" onClose={onClose}>
        <p>Hello World</p>
      </Modal>
    );
    const text = screen.getByText('Hello Horarioz');
    const content = screen.getByText('Hello World');

    expect(text).toBeInTheDocument();
    expect(content).toBeInTheDocument();
  });

  it('should render modal component with type and show specific icon', () => {
    const onClose = jest.fn();

    render(
      <Modal isOpen title="Hello Horarioz" onClose={onClose} type="error">
        <p>Hello World</p>
      </Modal>
    );
    const icon = screen.getByTestId('error-icon');

    expect(icon).toBeInTheDocument();
  });

  it('should render modal component with footer', () => {
    const onClose = jest.fn();

    render(
      <Modal
        isOpen
        title="Hello Horarioz"
        onClose={onClose}
        type="error"
        footer={<button>Cancel</button>}
      >
        <p>Hello World</p>
      </Modal>
    );
    const button = screen.getByText('Cancel');

    expect(button).toBeInTheDocument();
  });
});
