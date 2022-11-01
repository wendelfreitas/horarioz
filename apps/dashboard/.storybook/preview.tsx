import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';

// Global decorator to apply the styles to all stories
export const decorators = [
  (Story) => (
    <QueryClientProvider client={new QueryClient()}>
      <Story />
    </QueryClientProvider>
  ),
];
