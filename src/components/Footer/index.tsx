import { Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      as="footer"
      h="footer-height"
      w="100%"
      bg="gray.700"
      color="white"
      alignItems="center"
      justifyContent="center"
      position="absolute"
      bottom={0}
      left={0}
      right={0}
    >
      <Text textAlign="center" fontSize="sm">
        © {new Date().getFullYear()} Your Mum. All rights reserved.
      </Text>
    </Flex>
  );
};

export default Footer;
