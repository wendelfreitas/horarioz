import { render, screen } from '@testing-library/react';
import { Drawer } from './Drawer';

describe('<Drawer />', () => {
  it('should render a Drawer with title and children', () => {
    const onClose = jest.fn();
    render(
      <Drawer title="Hello Horarioz" isOpen onClose={onClose}>
        Hello Children
      </Drawer>
    );
    const text = screen.getByText('Hello Horarioz');

    expect(text).toBeInTheDocument();
  });

  it('should render a Drawer with title, children and description', () => {
    const onClose = jest.fn();
    render(
      <Drawer
        title="Hello!"
        description="Hello Horarioz"
        isOpen
        onClose={onClose}
      >
        Hello Children
      </Drawer>
    );
    const text = screen.getByText('Hello Horarioz');

    expect(text).toBeInTheDocument();
  });
});
