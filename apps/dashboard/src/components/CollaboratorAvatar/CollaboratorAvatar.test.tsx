import { render, screen } from '@testing-library/react';
import { CollaboratorAvatar } from './CollaboratorAvatar';

describe('<CollaboratorAvatar />', () => {
  it('renders avatar component with name initials', () => {
    render(<CollaboratorAvatar name="Wendel Freitas" />);
    const text = screen.getByText('WF');

    expect(text).toBeInTheDocument();
  });

  it('renders avatar component with first name', () => {
    render(<CollaboratorAvatar name="Wendel Freitas" />);
    const firstname = screen.getByText('Wendel');

    expect(firstname).toBeInTheDocument();
  });
});
