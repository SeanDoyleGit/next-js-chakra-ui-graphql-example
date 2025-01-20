import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import type { ReactNode } from "react";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
  cache: new InMemoryCache(),
});

const ApolloClientProvider = ({ children }: { children: ReactNode }) => <ApolloProvider client={client}>{children}</ApolloProvider>;

export default ApolloClientProvider;
