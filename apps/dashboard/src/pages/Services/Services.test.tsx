import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWrapper } from '@utils/tests/helpers';
import { Services } from './Services';

describe('<Services />', () => {
  it('renders component successfully', () => {
    renderWrapper(<Services />);
    const text = screen.getByText('@Services.my-services');

    expect(text).toBeInTheDocument();
  });

  it('should open and close create service form', async () => {
    renderWrapper(<Services />);
    const button = screen.getByText('@Services.create-service');

    userEvent.click(button);

    await waitFor(() => screen.getByTestId('create-service-button'));

    const text = screen.getByTestId('create-service-button');

    userEvent.click(screen.getByText('@ServiceForm.cancel'));

    await waitFor(() => screen.getByText('@ServiceForm.cancel'));

    expect(text).toBeInTheDocument();
  });
});
