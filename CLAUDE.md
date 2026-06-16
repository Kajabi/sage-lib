# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Sage is Kajabi's design system, shipped as a **Lerna + Yarn Workspaces monorepo**. A single
`yarn install` at the root bootstraps every package. Branch off `develop` (the default branch
for PRs); `main` is the release branch.

Tooling is pinned via asdf (`.tool-versions`): Node 22.7.0, Ruby 3.3.9 (Ruby is only needed
for the `docs` gem, which runs Rails 7.2). Note the `sage-react` package still targets a legacy
toolchain — React 16, Webpack 4, Jest 26 — and several scripts need
`NODE_OPTIONS=--openssl-legacy-provider` (already baked into the relevant scripts). The `docs`
app, by contrast, runs Webpack 5 via shakapacker. CI builds on Node 20 and 22.

## Packages

| Package | Path | What it is |
|--|--|--|
| `@kajabi/sage-react` | `packages/sage-react` | React component library + Storybook. The primary surface for component work. |
| `@kajabi/sage-assets` | `packages/sage-assets` | SCSS source (the actual styling) + Sassdoc site. |
| `@kajabi/sage-system` | `packages/sage-system` | Vanilla JS behaviors for the Rails (non-React) components. |
| `@kajabi/sage-packs` | `packages/sage-packs` | Bundles assets/system/react for consumption by Rails apps. |
| `@kajabi/sage` (gem) | `docs` | Rails 7.2 app (Ruby 3.3.9): the public documentation site **and** the `sage_rails` gem (server-rendered components). |

Packages are versioned together by Lerna (`lerna.json` holds the shared version); releases are
automated from Conventional Commits.

## Common commands (run from repo root)

```bash
yarn setup            # First-time setup (prompts for a GitHub PAT for the private npm registry)
yarn start            # Run everything in parallel: token build + watchers + docs (4000) + Storybook (4100) + Sassdoc (4200)
yarn build            # Build all packages (style-dictionary, assets, react, system)
yarn build:sd         # Rebuild Style Dictionary tokens ONLY — see "Design tokens" below
yarn lint             # Lint everything (assets stylelint, react eslint, docs)
yarn test             # Production test run (currently just React Jest)
yarn storybook        # Storybook for sage-react only
```

Per-package work is usually faster run inside the package dir:

```bash
cd packages/sage-react
yarn test                                   # Jest, all specs (runInBand)
yarn test path/to/Component.spec.jsx        # Single spec file
yarn test -t "name of test"                 # Single test by name
yarn test:dev                               # Jest with coverage + live coverage server (4110)
yarn lint                                   # eslint "lib/**/*.{js,jsx}"
yarn storybook                              # start-storybook -p 4100
```

Lint the SCSS package with `yarn lint:assets` from root (stylelint, `--max-warnings 0`).

## Design tokens (Style Dictionary) — important

Tokens are the single source of truth in `style-dictionary/tokens/**/*.json` (CTI structure;
see `DICTIONARY.md`). `yarn build:sd` compiles them into **three generated files that must not
be hand-edited**:

- `packages/sage-assets/lib/stylesheets/dictionary/_tokens.scss` (`$sd-sage-` Sass vars)
- `packages/sage-react/lib/configs/dictionary/tokens.js` (`SageDictionary` for React)
- `docs/lib/sage_rails/app/sage_tokens/sage_dictionary.rb` (`SageDictionary` for Rails)

To change a token, edit the JSON and run `yarn build:sd` (it is **not** auto-watched). Then
commit the regenerated outputs.

## React component conventions

A component lives in its own dir under `packages/sage-react/lib/<Name>/` and is exported
through `packages/sage-react/lib/index.js`. The standard file set (see `Button/` for a clean
example):

- `Component.jsx` — implementation
- `index.js` — re-export (`export { Button } from './Button';`)
- `configs.js` — exported constant maps for variant options (e.g. `BUTTON_COLORS`), SCREAMING_SNAKE_CASE
- `Component.story.jsx` / `.story.mdx` — Storybook docs (both `.jsx` and `.mdx` forms appear)
- `Component.spec.jsx` — Jest + Testing Library tests (note: `.spec.jsx`, not `.test.jsx`)

Implementation patterns to match:

- Components use `React.forwardRef` and validate props with `PropTypes` (this codebase predates
  and does not use TypeScript for components).
- Class names are built with the `classnames` package using a BEM-style `blockName` (e.g.
  `sage-btn`, with `--modifier` variants driven by props).
- Shared tokens/classnames are imported from `../configs` (`SageTokens`, `SageClassnames`); these
  are partly generated from Style Dictionary.
- Test helpers, mocks, and stubs live in `packages/sage-react/lib/test/` (Jest `setupFilesAfterEnv`
  points at `lib/test/setupTests.js`). Don't put real specs under `lib/test/`.

The actual visual styling is **not** in the React package — it's the SCSS in `sage-assets`
(`lib/stylesheets/components/_<name>.scss`). A component change often spans both packages.

## Commits & releases

This repo enforces [Conventional Commits](https://www.conventionalcommits.org/) via a
`commit-msg` lefthook hook (commitlint). Use `yarn commit` (Commitizen) if unsure of the format.
Changelogs and version bumps are generated per-package from these commit messages, so:

- **Do not squash-and-merge** PRs — squashing destroys the per-package commit history the
  automated changelogs depend on (see `CONTRIBUTING.md`).
- A `pre-commit` hook runs `bin/yarn-check.sh`.

## Bridging to kajabi-products

To develop Sage changes live against a local `kajabi-products` app, run `yarn start` here, then
`yarn bridge:kajabi-products` (prompts once for the local kajabi-products path, stored in `.env`).
`yarn bridge:kajabi-products:destroy` reverts to the published packages. See README for details.
