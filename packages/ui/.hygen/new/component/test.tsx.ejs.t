---
to: <%= absPath %>/<%= component_name %>.test.tsx
---
import React from 'react';
import { render, screen } from '@testing-library/react';
import { <%= component_name %> } from '.';

describe('<<%= component_name %> />', () => {
  it('renders component successfully', () => {
    render(<<%= component_name %> />);
    const text = screen.getByText('Hello Appetizer');

    expect(text).toBeInTheDocument();
  });
});

