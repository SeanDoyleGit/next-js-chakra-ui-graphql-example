import { useProfile } from "@/hooks/useProfile";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { type FormEvent, useEffect, useState } from "react";

interface LoginModalUIProps {
  isOpen: boolean;
  onLogin: (data: { username: string; jobTitle: string }) => void;
}

export const LoginModalUI = ({ isOpen, onLogin }: LoginModalUIProps) => {
  const [username, setUsername] = useState("");
  const [jobTitle, setJobTitle] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!username || !jobTitle) {
      return;
    }

    onLogin({ username, jobTitle });
    setUsername("");
    setJobTitle("");
  };

  return (
    <Modal isOpen={isOpen} onClose={() => {}} isCentered>
      <ModalOverlay data-testid="login-modal-overlay" bg="blackAlpha.600" />
      <ModalContent>
        <form onSubmit={handleSubmit}>
          <ModalHeader>Login</ModalHeader>
          <ModalBody>
            <FormControl id="username" isRequired mb={4}>
              <FormLabel>Username</FormLabel>
              <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </FormControl>
            <FormControl id="jobTitle" isRequired>
              <FormLabel>Job Title</FormLabel>
              <Input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" colorScheme="blue">
              Login
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

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
