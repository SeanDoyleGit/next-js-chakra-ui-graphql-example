import { Box, Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" h="footer-height" bg="gray.700" color="white" textAlign="center" position="fixed" left={0} bottom={0} right={0}>
      <Flex h="100%" alignItems="center" justifyContent="center">
        <Text fontSize="sm">© {new Date().getFullYear()} Your Mum. All rights reserved.</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
