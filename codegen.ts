import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    overwrite: true,
    schema: [
        'https://api.goldsky.com/api/public/project_clyssta42hwyl01um0r6ad90c/subgraphs/scribe-analytics/1.0.1/gn',
        'https://api.goldsky.com/api/public/project_clyssta42hwyl01um0r6ad90c/subgraphs/scribe-farming/1.0.0/gn',
        'https://api.goldsky.com/api/public/project_clyssta42hwyl01um0r6ad90c/subgraphs/scribe-farming/1.0.0/gn',
    ],
    documents: 'src/graphql/queries/!(*.d).{ts,tsx}',
    generates: {
        'src/graphql/generated/graphql.tsx': {
            plugins: [
                'typescript',
                'typescript-operations',
                'typescript-react-apollo',
            ],
            config: {
                withHooks: true,
                withResultType: true,
            },
        },
    },
};

export default config;
