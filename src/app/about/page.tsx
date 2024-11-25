import { Box, Heading, Text } from '@chakra-ui/react';

export default function AboutPage() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h1" size="2xl" mb={4}>
        About Page
      </Heading>
      <Text fontSize="lg" mb={6}>
        This is a simple about page
      </Text>
    </Box>
  );
}
