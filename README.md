This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

This project uses [Chakra UI](https://chakra-ui.com/) for styling, [Apollo Client](https://www.apollographql.com/docs/react/) for graphql queries and [Storybook](https://storybook.js.org/) for component development.

View the live vercel deployment here https://next-js-chakra-ui-graphql-example.vercel.app/

## Getting Started

Set up the graphql endpoint in the .env file

This project currently uses `NEXT_PUBLIC_GRAPHQL_URL: https://rickandmortyapi.com/graphql`

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

Deployment is automatically handled by Vercel when merging in the main branch.

View webpage here https://next-js-chakra-ui-graphql-example.vercel.app/

## Run Storybook

Run storybook with command `npm run storybook`

## Run Jest

Run jest with command `npm run test`

## Run lint

Run lint with command `npm run lint`

Fix linting errors with `npm run lint-fix`

Running linters for specific files `npm run lint ./src/components/ComponentName.tsx`