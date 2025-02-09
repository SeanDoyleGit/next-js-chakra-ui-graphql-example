import { gql } from "@apollo/client";
import { FRAGMENT_EPISODE } from "./episode";
import { FRAGMENT_LOCATION } from "./location";

export const FRAGMENT_CHARACTER = gql`
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

  ${FRAGMENT_LOCATION}
  ${FRAGMENT_EPISODE}
`;
