---
to: <%= absPath %>/<%= component_name %>.test.tsx
---
import { render, screen } from '@testing-library/react';
import { <%= component_name %> } from './<%= component_name %>';

describe('<<%= component_name %> />', () => {
  it('renders component successfully', () => {
    render(<<%= component_name %> />);
    const text = screen.getByText('Hello Horarioz');

    expect(text).toBeInTheDocument();
  });
});

