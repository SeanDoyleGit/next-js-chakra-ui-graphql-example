'use client';
import { Box, Heading, Text, Button, useColorMode } from '@chakra-ui/react';
import NextLink from 'next/link';

export default function HomePage() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h1" size="2xl" mb={4}>
        Welcome to My Home Page
      </Heading>
      <Text fontSize="lg" mb={6}>
        This is a simple home page demo using Chakra UI components.
      </Text>
      <Button onClick={toggleColorMode}>Toggle {colorMode === 'light' ? 'Dark' : 'Light'}</Button>
      <NextLink href="/about" passHref legacyBehavior>
        <Button as="a" colorScheme="blue">
          About
        </Button>
      </NextLink>
    </Box>
  );
}
