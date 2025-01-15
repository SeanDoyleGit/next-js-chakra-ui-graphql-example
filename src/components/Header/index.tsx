import { Avatar, Button, Flex, IconButton } from "@chakra-ui/react";
import NextLink from "next/link";
import { RiHomeFill } from "react-icons/ri";

interface HeaderProps {
  username: string | null;
  avatarUrl: string | null;
}

const Header = ({ username, avatarUrl }: HeaderProps) => {
  return (
    <Flex
      h="header-height"
      bg="gray.700"
      as="header"
      p={4}
      position="fixed"
      alignItems="center"
      justifyContent="space-between"
      top={0}
      left={0}
      right={0}
    >
      <NextLink href="/" passHref legacyBehavior>
        <IconButton variant="link" as="a" color="gray.100" aria-label="Home" size="lg" fontSize="30px" icon={<RiHomeFill />} />
      </NextLink>
      {username ? (
        <NextLink href="/profile" passHref legacyBehavior>
          <Button as="a" variant="link">
            <Avatar size="md" name={username} src={avatarUrl ?? undefined} />
          </Button>
        </NextLink>
      ) : (
        <NextLink href="/login" passHref legacyBehavior>
          <Button as="a" colorScheme="light" href="/login">
            Login
          </Button>
        </NextLink>
      )}
    </Flex>
  );
};

export default Header;
