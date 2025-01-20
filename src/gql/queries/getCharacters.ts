import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql(`
  query GetCharacters($page: Int) {
    characters(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        status
        species
        type
        gender
        origin {
          id
          name
          type
          dimension
        }
        location {
          name
          id
        }
        image
      }
    }
  }
`);
