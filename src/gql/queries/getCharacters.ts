import { gql } from "@apollo/client";
import { FRAGMENT_CHARACTER } from "../fragments/character";

export const GET_CHARACTERS = gql`
  query GetCharacters($page: Int) {
    characters(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
       ...Character
      }
    }
  }
  ${FRAGMENT_CHARACTER}
`;
