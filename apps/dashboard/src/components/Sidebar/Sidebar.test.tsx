import { screen } from '@testing-library/react';
import { renderWrapper } from '../../utils/tests/helpers';
import { Sidebar } from './Sidebar';

describe('<Sidebar />', () => {
  it('renders component successfully', () => {
    renderWrapper(<Sidebar />);
    const text = screen.getByText('Logout');

    expect(text).toBeInTheDocument();
  });
});
