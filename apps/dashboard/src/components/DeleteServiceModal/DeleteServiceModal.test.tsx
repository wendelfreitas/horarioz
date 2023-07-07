import { renderWrapper } from '@/utils/tests/helpers';
import { screen } from '@testing-library/react';
import { DeleteServiceModal } from './DeleteServiceModal';

describe('<DeleteServiceModal />', () => {
  it('should renders component successfully', () => {
    const service = {
      id: '1',
      name: 'Service Test',
      company_id: '1',
      description: 'Lorem ipsum',
      duration: '01:00',
      price: 30,
      created_at: Date.now().toLocaleString(),
      updated_at: Date.now().toLocaleString(),
    };

    renderWrapper(
      <DeleteServiceModal isOpen service={service} onClose={jest.fn()} />
    );
    const title = screen.getByText('@DeleteServiceModal.delete-service-title');

    const name = screen.getByText('@DeleteServiceModal.confirm-delete');

    expect(title).toBeInTheDocument();
    expect(name).toBeInTheDocument();
  });
});
