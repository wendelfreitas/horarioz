import { screen } from '@testing-library/react';
import { renderWrapper } from '@utils/tests/helpers';
import { Onboarding } from './Onboarding';

describe('<Onboarding />', () => {
  it('renders component successfully', () => {
    renderWrapper(<Onboarding />);
    const text = screen.getByText(/Welcome to Horarioz, let's get started/);

    expect(text).toBeInTheDocument();
  });
});
