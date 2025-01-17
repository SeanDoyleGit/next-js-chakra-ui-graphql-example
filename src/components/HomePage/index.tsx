import { Box, Button, Heading, Text } from "@chakra-ui/react";
import NextLink from "next/link";

interface HomePageProps {
  colorMode: string;
  toggleColorMode: () => void;
}

export default function HomePage({ colorMode, toggleColorMode }: HomePageProps) {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h1" size="2xl" mb={4}>
        Welcome to My Home Page
      </Heading>
      <Text fontSize="lg" mb={6}>
        This is a simple home page demo using Chakra UI components.
      </Text>

      <Button onClick={toggleColorMode}>Toggle {colorMode === "light" ? "Dark" : "Light"}</Button>
      <NextLink href="/profile" passHref legacyBehavior>
        <Button as="a" colorScheme="blue">
          View Profile
        </Button>
      </NextLink>
    </Box>
  );
}
