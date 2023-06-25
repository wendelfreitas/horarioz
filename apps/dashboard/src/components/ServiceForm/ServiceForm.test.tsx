import { ServiceForm } from './ServiceForm';
import { screen, waitFor, act } from '@testing-library/react';
import fireEvent from '@testing-library/user-event';
import { renderWrapper } from '@/utils/tests/helpers';

describe('<ServiceForm />', () => {
  it('renders component successfully', () => {
    const onClose = jest.fn();
    renderWrapper(<ServiceForm isOpen onClose={onClose} />);
    const text = screen.getByText('@ServiceForm.service-name');

    expect(text).toBeInTheDocument();
  });
});
