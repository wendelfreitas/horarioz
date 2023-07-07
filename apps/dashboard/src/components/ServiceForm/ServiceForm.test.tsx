import { ServiceForm } from './ServiceForm';
import { screen, act } from '@testing-library/react';
import fireEvent from '@testing-library/user-event';
import { renderWrapper } from '@/utils/tests/helpers';

describe('<ServiceForm />', () => {
  it('renders component successfully', () => {
    const onClose = jest.fn();
    renderWrapper(<ServiceForm isOpen onClose={onClose} />);
    const text = screen.getByText('@ServiceForm.service-name');

    expect(text).toBeInTheDocument();
  });

  it('should close the service form drawer', () => {
    const onClose = jest.fn();
    renderWrapper(<ServiceForm isOpen onClose={onClose} />);
    const close = screen.getByText('@ServiceForm.cancel');

    expect(close).toBeInTheDocument();

    close.click();

    expect(onClose).toBeCalled();
  });

  it('should fill all form inputs and click to submit', async () => {
    const onClose = jest.fn();
    renderWrapper(<ServiceForm isOpen onClose={onClose} />);

    const button = screen.getByTestId('create-service-button');
    const name = screen.getByText('@ServiceForm.service-name');
    const price = screen.getByText('@ServiceForm.service-price');
    const duration = screen.getByPlaceholderText('HH:MM');

    await act(async () => {
      await fireEvent.type(name, 'Name');
      await fireEvent.type(price, '20');
      await fireEvent.type(duration, '01:00');

      fireEvent.click(button);
    });

    expect(duration).toHaveValue('01:00');
  });
});
