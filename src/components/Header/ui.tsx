import { Avatar, Button, Flex, IconButton, SkeletonCircle } from "@chakra-ui/react";
import NextLink from "next/link";
import { FaMoon, FaSun } from "react-icons/fa";
import { RiHomeFill } from "react-icons/ri";

interface HeaderProps {
  username: string | null;
  avatarUrl: string | null;
  toggleColorMode: () => void;
  colorMode: string;
}

const HeaderUI = ({ username, avatarUrl, toggleColorMode, colorMode }: HeaderProps) => {
  return (
    <Flex
      h="header-height"
      bg="gray.700"
      as="header"
      py={4}
      px={6}
      position="absolute"
      alignItems="center"
      justifyContent="space-between"
      top={0}
      left={0}
      right={0}
    >
      <NextLink href="/" passHref legacyBehavior>
        <IconButton variant="link" as="a" color="gray.100" aria-label="Home" size="lg" fontSize={30} icon={<RiHomeFill />} />
      </NextLink>
      <Flex alignItems="center" gap={8}>
        <IconButton
          variant="ghost"
          fontSize={20}
          icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
          onClick={toggleColorMode}
          color="gray.100"
          aria-label={colorMode === "dark" ? "Toggle color mode to light" : "Toggle color mode to dark"}
        />
        <SkeletonCircle isLoaded={!!username && !!avatarUrl} fadeDuration={0} w={12} h={12}>
          <NextLink href="/profile" passHref legacyBehavior>
            <Button as="a" variant="link">
              <Avatar loading="lazy" size="md" name={username ? `${username} avatar image` : "Loading"} src={avatarUrl ?? ""} />
            </Button>
          </NextLink>
        </SkeletonCircle>
      </Flex>
    </Flex>
  );
};

export default HeaderUI;
