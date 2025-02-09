import type { Character } from "@/gql/__generated__/graphql";
import {
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

interface CharacterModalProps {
  onClose: () => void;
  character: Character;
}

const CharacterModal: React.FC<CharacterModalProps> = ({ onClose, character }) => {
  return (
    <Modal size="lg" isCentered isOpen onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader px={8}>{character.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody px={8} pb={8}>
          <SimpleGrid columns={[1, 2]} spacing={8}>
            <Image src={character.image ?? ""} alt={character.name ?? ""} borderRadius={10} height="100%" />
            <Flex direction="column" justify="space-between">
              <Flex direction="row" gap={2}>
                <Text as="dt" fontWeight="bold">
                  Status:
                </Text>
                <Text as="dd">{character.status}</Text>
              </Flex>
              <Flex direction="row" gap={2}>
                <Text as="dt" fontWeight="bold">
                  Species:
                </Text>
                <Text as="dd">{character.species}</Text>
              </Flex>
              <Flex direction="row" gap={2}>
                <Text as="dt" fontWeight="bold">
                  Type:
                </Text>
                <Text as="dd">{character.type || "N/A"}</Text>
              </Flex>
              <Flex direction="row" gap={2}>
                <Text as="dt" fontWeight="bold">
                  Gender:
                </Text>
                <Text as="dd">{character.gender}</Text>
              </Flex>
              <Flex direction="row" gap={2}>
                <Text as="dt" fontWeight="bold">
                  Origin:
                </Text>
                <Text as="dd">{character.origin?.name}</Text>
              </Flex>
              <Flex direction="row" gap={2}>
                <Text as="dt" fontWeight="bold">
                  Location:
                </Text>
                <Text as="dd">{character.location?.name}</Text>
              </Flex>
            </Flex>
          </SimpleGrid>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CharacterModal;
