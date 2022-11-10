import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://office.skybox.gg:3000/',
  documents: './src/**/*.graphql',
  generates: {
    './src/graphql/generated-types.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
    },
  },
};

export default config;
