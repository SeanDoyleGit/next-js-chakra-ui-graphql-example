import { gql } from "@apollo/client";

export const FRAGMENT_LOCATION = gql`
  fragment Location on Location {
    id
    name
    type
    dimension
    created
  }
`;
