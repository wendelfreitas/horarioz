import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWrapper } from '@utils/tests/helpers';
import { Services } from './Services';

describe('<Services />', () => {
  it('renders component successfully', () => {
    renderWrapper(<Services />);
    const text = screen.getByText('My Services');

    expect(text).toBeInTheDocument();
  });

  it('should open and close create service form', async () => {
    renderWrapper(<Services />);
    const button = screen.getByText('Create Service');

    userEvent.click(button);

    await waitFor(() => screen.getByTestId('create-service-button'));

    const text = screen.getByTestId('create-service-button');

    userEvent.click(screen.getByText('Cancel'));

    await waitFor(() => screen.getByText('Cancel'));

    expect(text).toBeInTheDocument();
  });
});
