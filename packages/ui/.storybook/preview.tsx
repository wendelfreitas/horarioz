import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../src';

// Global decorator to apply the styles to all stories
export const decorators = [
  (Story) => (
    <ChakraProvider theme={theme}>
      <Story />
    </ChakraProvider>
  ),
];

export const parameters = {
  chakra: {
    theme,
  },
};
