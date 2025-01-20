import { gql } from "@apollo/client";

export const FRAGMENT_CHARACTER = gql(`
  fragment Character on Character {
    id
    name
    status
    species
    type
    gender
    image
    created
    origin {
      ...Location
    }
    location {
      ...Location
    }
    episode {
      ...Episode
    }
  }
`);
