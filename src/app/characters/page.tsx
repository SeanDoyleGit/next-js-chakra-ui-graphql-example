"use client";

import type { Character } from "@/gql/__generated__/graphql";
import { GET_CHARACTERS } from "@/gql/queries/getCharacters";
import { useQuery } from "@apollo/client";

export default function CharactersPage() {
  const { loading, data } = useQuery(GET_CHARACTERS, { variables: { page: 0 } });

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {data.characters.results.map((character: Character) => (
        <div key={character.id}>{character.name}</div>
      ))}
    </div>
  );
}
