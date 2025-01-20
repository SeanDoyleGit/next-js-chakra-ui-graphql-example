require("dotenv").config();
import type { CodegenConfig } from "@graphql-codegen/cli";

console.log(process.env.NEXT_PUBLIC_GRAPHQL_URL);

const config: CodegenConfig = {
  schema: process.env.NEXT_PUBLIC_GRAPHQL_URL,
  documents: ["src/**/*.{ts,tsx}"],
  generates: {
    "./src/gql/__generated__/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  ignoreNoDocuments: true,
  config: {
    scalars: {
      Upload: { input: "File", output: "File" },
    },
  },
};

export default config;
