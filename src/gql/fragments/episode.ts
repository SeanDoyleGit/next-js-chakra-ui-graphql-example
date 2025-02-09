import { gql } from "@apollo/client";

export const FRAGMENT_EPISODE = gql`
  fragment Episode on Episode {
    id
    name
    air_date
    episode
    created
  }
`;
