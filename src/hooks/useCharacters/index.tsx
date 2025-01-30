import type { Character, GetCharactersQuery } from "@/gql/__generated__/graphql";
import { GET_CHARACTERS } from "@/gql/queries/getCharacters";
import { useQuery } from "@apollo/client";
import { useProfile } from "../useProfile";

interface UseCharactersProps {
  page: number;
}

export const useCharacters = ({ page }: UseCharactersProps) => {
  const { isLoggedIn } = useProfile();
  const { loading, data } = useQuery<GetCharactersQuery>(GET_CHARACTERS, { variables: { page }, skip: !page || !isLoggedIn });

  const isLoading = loading || !data?.characters?.results;
  const characters = (data?.characters?.results || []).filter((character) => character !== null) as Character[];
  const info = data?.characters?.info || {};

  return { isLoading, characters, info };
};
