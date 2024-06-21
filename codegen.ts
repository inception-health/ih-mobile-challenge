import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://swapi-graphql.netlify.app/.netlify/functions/index",
  generates: {
    "./src/__generated__/": {
      preset: "client",
    },
  },
  ignoreNoDocuments: true,
};

export default config;
