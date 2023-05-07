import { render, screen } from '@testing-library/react';
import { Submenu } from './Submenu';

describe('<Submenu />', () => {
  it('renders component successfully', () => {
    render(<Submenu />);
    const text = screen.queryByText('submit');

    expect(text).not.toBeInTheDocument();
  });

  it('should render component with submenus', () => {
    render(
      <Submenu
        menus={[
          {
            name: 'Submenu',
            href: '/submenu',
            current: false,
          },
        ]}
      />
    );
    const text = screen.getByText('Submenu');

    expect(text).toBeInTheDocument();
  });

  it('should render component with submenus', () => {
    render(
      <Submenu
        menus={[
          {
            name: 'Submenu',
            href: '/submenu',
            current: true,
          },
        ]}
      />
    );
    const text = screen.getByText('Submenu');

    expect(text).toHaveClass('text-black');
  });
});
