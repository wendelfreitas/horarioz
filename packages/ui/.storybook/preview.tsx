import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

// Global decorator to apply the styles to all stories
export const decorators = [
  (Story) => (
    <ChakraProvider>
      <Story />
    </ChakraProvider>
  ),
];
