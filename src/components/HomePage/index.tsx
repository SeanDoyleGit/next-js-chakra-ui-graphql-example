import { Box, Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";
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
      <VStack spacing={6}>
        <Flex flexDir={["column", "row"]}>
          <Text fontSize="lg" mr={2}>
            You can toggle the color mode
          </Text>
          <Button display="inline" onClick={toggleColorMode}>
            Toggle {colorMode === "light" ? "Dark" : "Light"}
          </Button>
        </Flex>
        <Flex flexDir={["column", "row"]}>
          <Text fontSize="lg" mr={2}>
            View your profile page
          </Text>
          <NextLink href="/profile" passHref legacyBehavior>
            <Button as="a" colorScheme="blue">
              View Profile
            </Button>
          </NextLink>
        </Flex>
        <Flex flexDir={["column", "row"]}>
          <Text fontSize="lg" mr={2}>
            View the Rick & Morty characters page
          </Text>
          <NextLink href="/characters" passHref legacyBehavior>
            <Button as="a" colorScheme="blue">
              View Characters
            </Button>
          </NextLink>
        </Flex>
      </VStack>
    </Box>
  );
}
