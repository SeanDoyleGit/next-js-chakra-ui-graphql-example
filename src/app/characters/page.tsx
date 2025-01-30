"use client";

import CharacterList from "@/components/CharacterList";
import Pagination from "@/components/Pagination";
import { useCharacters } from "@/hooks/useCharacters";
import { Center, Heading, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface CharactersPageProps {
  searchParams: { page: string | undefined };
}

export default function CharactersPage({ searchParams }: CharactersPageProps) {
  const [currentPage, setCurrentPage] = useState(Number.parseInt(searchParams.page ?? "0"));

  const { isLoading, characters, info } = useCharacters({ page: currentPage });

  const updatePage = (page: number) => {
    setCurrentPage(page);
    window.history.pushState(null, "", `?page=${page}`);
  };

  useEffect(() => {
    if (currentPage < 1) {
      setCurrentPage(1);
      window.history.pushState(null, "", "?page=1");
    }
  }, [currentPage]);

  return (
    <Center py={20}>
      <Stack spacing={20}>
        <Heading as="h1" size="4xl" textAlign="center">
          Rick & Morty Characters
        </Heading>
        <CharacterList isLoading={isLoading} characters={characters} onCharacterClick={() => {}} />
        <Center>
          <Pagination
            isLoading={isLoading}
            currentPage={currentPage}
            totalPages={info.pages ?? 0}
            onPrevPage={() => updatePage(currentPage - 1)}
            onNextPage={() => updatePage(currentPage + 1)}
          />
        </Center>
      </Stack>
    </Center>
  );
}
