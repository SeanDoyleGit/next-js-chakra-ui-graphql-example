import { useProfile } from "@/hooks/useProfile";
import { useDisclosure } from "@chakra-ui/react";
import { useEffect } from "react";
import LoginModalUI from "./ui";

const LoginModal = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const { isLoggedIn, isLoading, login } = useProfile();

  useEffect(() => {
    if (!isLoggedIn && !isLoading) {
      onOpen();
    }
  }, [isLoggedIn, isLoading, onOpen]);

  const handleLogin = ({ username, jobTitle }: { username: string; jobTitle: string }) => {
    if (!username || !jobTitle) {
      return;
    }

    login({ username, jobTitle });
    onClose();
  };

  return <LoginModalUI isOpen={isOpen} onLogin={handleLogin} />;
};

export default LoginModal;
