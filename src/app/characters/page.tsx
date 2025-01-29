"use client";

import CharacterList from "@/components/CharacterList";
import Pagination from "@/components/Pagination";
import type { Character, GetCharactersQuery } from "@/gql/__generated__/graphql";
import { GET_CHARACTERS } from "@/gql/queries/getCharacters";
import { useQuery } from "@apollo/client";
import { Center, Heading, Stack } from "@chakra-ui/react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface CharactersPageProps {
  searchParams: { page: string | undefined };
}

export default function CharactersPage({ searchParams }: CharactersPageProps) {
  const [currentPage, setCurrentPage] = useState(Number.parseInt(searchParams.page ?? "0"));
  const { push } = useRouter();
  const pathname = usePathname();

  const { loading, data } = useQuery<GetCharactersQuery>(GET_CHARACTERS, { variables: { page: currentPage }, skip: currentPage < 1 });

  console.log("CharactersPageProps", searchParams, currentPage, pathname, loading, data?.characters);

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

  const isLoading = loading || !data?.characters?.results;
  const characters = (data?.characters?.results || []).filter((character) => character !== null) as Character[];
  const info = data?.characters?.info || {};

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
