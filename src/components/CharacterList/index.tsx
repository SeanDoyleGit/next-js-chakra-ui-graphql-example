import type { Character } from "@/gql/__generated__/graphql";
import theme from "@/theme";
import { Box, Center, SimpleGrid } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import Image from "next/image";

export interface CharacterListProps {
  isLoading: boolean;
  characters: Character[];
  onCharacterClick: (id: string) => void;
}

interface DummyCharacter {
  id: string;
  image: string;
  name: string;
}

const fadeIn = keyframes`
  from {
    background: ${theme.colors.gray[700]};
  }
  to {
    background: ${theme.colors.gray[600]};
  }
`;

const CharacterList = ({ isLoading, characters, onCharacterClick }: CharacterListProps) => {
  const loadingCharacters: DummyCharacter[] = Array.from({ length: 9 }, (_, index) => ({
    id: index.toString(),
    image: "",
    name: "",
  }));

  return (
    <Center>
      <SimpleGrid columns={[1, 1, 2, 3]} spacing={10}>
        {(isLoading ? loadingCharacters : characters).map((character: Character | DummyCharacter) => (
          <Box
            key={character.id}
            as="button"
            onClick={() => onCharacterClick(character.id ?? "")}
            pos="relative"
            w={350}
            h={350}
            borderRadius={10}
            overflow="hidden"
            bg="gray.700"
            animation={`${fadeIn} 1s ease-in-out infinite alternate`}
          >
            {isLoading ? null : <Image src={character.image ?? ""} alt={character.name ?? ""} fill />}
            <Box
              pos="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              bg="transparent"
              _hover={{ bg: "whiteAlpha.400" }} // semi-transparent gray
              _active={{ bg: "whiteAlpha.500" }} // more opaque gray
            />
          </Box>
        ))}
      </SimpleGrid>
    </Center>
  );
};

export default CharacterList;
