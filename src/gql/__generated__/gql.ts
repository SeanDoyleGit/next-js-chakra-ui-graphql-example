/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "\n  fragment Character on Character {\n    id\n    name\n    status\n    species\n    type\n    gender\n    image\n    created\n    origin {\n      ...Location\n    }\n    location {\n      ...Location\n    }\n    episode {\n      ...Episode\n    }\n  }\n": types.CharacterFragmentDoc,
    "\n  fragment Episode on Episode {\n    id\n    name\n    air_date\n    episode\n    created\n  }\n": types.EpisodeFragmentDoc,
    "\n  fragment Location on Location {\n    id\n    name\n    type\n    dimension\n    created\n  }\n": types.LocationFragmentDoc,
    "\n  query GetCharacters($page: Int) {\n    characters(page: $page) {\n      info {\n        count\n        pages\n        next\n        prev\n      }\n      results {\n        id\n        name\n        status\n        species\n        type\n        gender\n        origin {\n          id\n          name\n          type\n          dimension\n        }\n        location {\n          name\n          id\n        }\n        image\n      }\n    }\n  }\n": types.GetCharactersDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment Character on Character {\n    id\n    name\n    status\n    species\n    type\n    gender\n    image\n    created\n    origin {\n      ...Location\n    }\n    location {\n      ...Location\n    }\n    episode {\n      ...Episode\n    }\n  }\n"): (typeof documents)["\n  fragment Character on Character {\n    id\n    name\n    status\n    species\n    type\n    gender\n    image\n    created\n    origin {\n      ...Location\n    }\n    location {\n      ...Location\n    }\n    episode {\n      ...Episode\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment Episode on Episode {\n    id\n    name\n    air_date\n    episode\n    created\n  }\n"): (typeof documents)["\n  fragment Episode on Episode {\n    id\n    name\n    air_date\n    episode\n    created\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment Location on Location {\n    id\n    name\n    type\n    dimension\n    created\n  }\n"): (typeof documents)["\n  fragment Location on Location {\n    id\n    name\n    type\n    dimension\n    created\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetCharacters($page: Int) {\n    characters(page: $page) {\n      info {\n        count\n        pages\n        next\n        prev\n      }\n      results {\n        id\n        name\n        status\n        species\n        type\n        gender\n        origin {\n          id\n          name\n          type\n          dimension\n        }\n        location {\n          name\n          id\n        }\n        image\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetCharacters($page: Int) {\n    characters(page: $page) {\n      info {\n        count\n        pages\n        next\n        prev\n      }\n      results {\n        id\n        name\n        status\n        species\n        type\n        gender\n        origin {\n          id\n          name\n          type\n          dimension\n        }\n        location {\n          name\n          id\n        }\n        image\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;