import { useColorMode } from "@chakra-ui/react";
import HeaderUI from "./ui";
import { useProfile } from "@/hooks/useProfile";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { username, avatarUrl } = useProfile();

  return <HeaderUI username={username} avatarUrl={avatarUrl} colorMode={colorMode} toggleColorMode={toggleColorMode} />;
};

export default Header;
