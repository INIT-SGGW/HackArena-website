# HackArena website

This is a repo for the HackArena website. It is a monorepo that contains the frontend and backend code for the website.

## What's inside?

This monorepo includes the following:

### Apps and Packages

    .
    ├── apps
    │   ├── admin                     # Next.js app.
    │   ├── backend                   # NestJS app.
    │   └── web                       # Next.js app.
    └── packages
        ├── @repo/api                 # Shared `NestJS` resources.
        ├── @repo/eslint-config       # `eslint` configurations (includes `prettier`)
        ├── @repo/jest-config         # `jest` configurations
        ├── @repo/typescript-config   # `tsconfig.json`s used throughout the monorepo
        ├── @repo/tailwind-config     # `tailwindcss` configurations
        └── @repo/ui                  # Shareable stub React component library.

## Getting Started

The only thing you will need is `pnpm` installed on your machine. You can install it by running:

```bash
npm install -g pnpm
```

After that, you can install the dependencies by running:

```bash
pnpm install
```

## Scripts

The following scripts are available:

#### build

```bash
# Will build all the app & packages with the supported `build` script.
pnpm run build

# ℹ️ If you plan to only build apps individually,
# Please make sure you've built the packages first.
```

#### dev

```bash
# Will run the development server for all the app & packages with the supported `dev` script.
pnpm run dev

# ℹ️ You can use :<app-name> to run a specific app.
pnpm run dev:web
```

#### test

```bash
# Will launch a test suites for all the app & packages with the supported `test` script.
pnpm run test

# You can launch e2e testes with `test:e2e`
pnpm run test:e2e
```

#### lint

```bash
# Will lint all the app & packages with the supported `lint` script.
pnpm run lint
```

#### format

```bash
# Will format all the supported `.ts,.js,json,.tsx,.jsx` files.
pnpm format
```
