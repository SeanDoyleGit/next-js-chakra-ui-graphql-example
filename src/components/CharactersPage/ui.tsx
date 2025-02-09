"use client";

import CharacterList from "@/components/CharacterList";
import CharacterModal from "@/components/CharacterModal";
import Pagination from "@/components/Pagination";
import type { Character } from "@/gql/__generated__/graphql";
import { Center, Heading, Stack } from "@chakra-ui/react";

interface CharactersPageUIProps {
  isLoading: boolean;
  characters: Character[];
  selectedCharacterId: string | null;
  totalPages: number;
  currentPage: number;
  updatePage: (page: number) => void;
  selectCharacter: (id: string | null) => void;
}

export default function CharactersPageUI({
  isLoading,
  characters,
  selectedCharacterId,
  totalPages,
  currentPage,
  updatePage,
  selectCharacter,
}: CharactersPageUIProps) {
  const selectedCharacter = characters.find((character) => character.id === selectedCharacterId);
  return (
    <Center py={20}>
      <Stack spacing={20}>
        <Heading as="h1" size="4xl" textAlign="center">
          Rick & Morty Characters
        </Heading>
        <CharacterList isLoading={isLoading} characters={characters} onCharacterClick={selectCharacter} />
        <Center>
          <Pagination
            isLoading={isLoading}
            currentPage={currentPage}
            totalPages={totalPages}
            onPrevPage={() => updatePage(currentPage - 1)}
            onNextPage={() => updatePage(currentPage + 1)}
          />
        </Center>
      </Stack>
      {selectedCharacter && <CharacterModal onClose={() => selectCharacter(null)} character={selectedCharacter} />}
    </Center>
  );
}
