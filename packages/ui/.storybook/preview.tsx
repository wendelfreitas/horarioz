import React from 'react';
import { ThemeProvider } from '../src/components/ThemeProvider/ThemeProvider';
import '../src/styles/index.css';
// Global decorator to apply the styles to all stories
export const decorators = [
  (Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
];
