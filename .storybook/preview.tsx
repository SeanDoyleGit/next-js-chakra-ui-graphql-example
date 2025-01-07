import type { Preview } from '@storybook/react';
import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import theme from '../src/theme';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <ChakraProvider theme={theme}>
          <Story />
        </ChakraProvider>
      );
    },
  ],
};

export default preview;
