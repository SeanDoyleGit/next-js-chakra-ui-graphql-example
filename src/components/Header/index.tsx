import { useProfile } from "@/hooks/useProfile";
import { useColorMode } from "@chakra-ui/react";
import HeaderUI from "./ui";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { username, avatarUrl } = useProfile();

  return <HeaderUI username={username} avatarUrl={avatarUrl} colorMode={colorMode} toggleColorMode={toggleColorMode} />;
};

export default Header;
