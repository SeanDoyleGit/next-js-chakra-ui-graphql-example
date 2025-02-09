"use client";

import { useCharacters } from "@/hooks/useCharacters";
import { useEffect, useState } from "react";
import CharactersPageUI from "./ui";

export interface CharactersPageProps {
  searchParams: { page: string | undefined; character: string | undefined };
}

export default function CharactersPage({ searchParams }: CharactersPageProps) {
  const [selectedCharacterId, setSelectedCharacterId] = useState<string | null>(searchParams.character ?? null);
  const [currentPage, setCurrentPage] = useState(Number.parseInt(searchParams.page ?? "0"));

  const { isLoading, characters, info } = useCharacters({ page: currentPage });

  const updatePage = (page: number) => {
    setCurrentPage(page);
    window.history.pushState(null, "", `?page=${page}`);
  };

  const selectCharacter = (id: string | null) => {
    setSelectedCharacterId(id);
    if (id) {
      window.history.pushState(null, "", `?page=${currentPage}&character=${id}`);
    } else {
      window.history.pushState(null, "", `?page=${currentPage}`);
    }
  };
  useEffect(() => {
    console.log("currentPage", currentPage);
    if (!currentPage || currentPage < 1) {
      setCurrentPage(1);
      window.history.pushState(null, "", "?page=1");
    }
  }, [currentPage]);

  return (
    <CharactersPageUI
      isLoading={isLoading}
      characters={characters}
      selectedCharacterId={selectedCharacterId}
      totalPages={info.pages ?? 0}
      currentPage={currentPage}
      updatePage={updatePage}
      selectCharacter={selectCharacter}
    />
  );
}
