# Continuous Integration, Deployment, Versioning, and Releases

Continuous Integration is being handled by CircleCI with deployments going to Heroku. Lerna is integrated into the Pipeline to allow for automatic Versioning, Changelogs, and Releases.

## Jobs

### lint-test-build

The `lint-build-test` job is reponsible for verifying the integrity of the suite. It ensures all linting, testing, and build procedures pass before allowing a merge. This job is run as part of every PR and push to `main`.

*NOTE: Do not ever push to `main` directly*

[Review Apps](https://devcenter.heroku.com/articles/github-integration-review-apps) have been integrated on every PR. They will only show the main Rails Documentation Site.

### release-and-deploy

The `release-and-deploy` step only triggers on `main` pushes that are not initiated by the CI system. This includes merges into `main` from a PR.

[Lerna](https://github.com/lerna/lerna) will then review the changes to the PR and automatically generate `CHANGELOG.md` files and bump the versions of all the packages and underlying gem. Package versions will only change if modifications were detected to the underlying package. These modifications are signified by the developer using the [Conventional Commits Standard](https://www.conventionalcommits.org/en/v1.0.0/). To find out more about how Lerna handles version changes you can review the [bootstrap](https://github.com/lerna/lerna/tree/main/commands/bootstrap#readme) and [publish](https://github.com/lerna/lerna/tree/main/commands/publish#readme) documentation.

The `bin/bump-gem.sh` script is executed as part of the versioning processes to the `@kajabi/sage` package which is located in the `docs/` folder. This script reviews the version change Lerna is committing to the package and mirrors that with a `bump` to the `sage_rails` gem, keeping them in parity.

Once all versioning is handled Lerna will [publish](https://github.com/lerna/lerna/tree/main/commands/publish#readme) tags and releases to the main repository.

CircleCI will then initiate a deployment of the primary "docs" site, the storybook site as part of the `@kajabi/sage-react` package, and the sassdocs site as part of the `@kajabi/sage-assets` package. Read the Deployment section of this document for more information.

## Deployment

There are 3 applications as part of the Sage suite. Each of these elements have their own deployment procedures and configuration.

### Rails "Docs" Site

Deployed to: https://sage-lib-documentation.herokuapp.com/

The `docs:deploy` script at the root of the monorepo is designed to push a subtree of the `docs/` folder to the Heroku master.

#### CircleCI Env Requirements

- **$GH_TOKEN**: A GitHub Personal Access Token with permissions to publish to the repository as well as packages.
- **$HEROKU_API_KEY**: An API key with access to deploy to the environment
- **$HEROKU_DOCS_APP_NAME**: The git address name for the Heroku app (e.g. "sage-lib-documentation")

#### Heroku Env Requirements

- **NPMRC**: Utilize the $GH_TOKEN environment variable listed in your CircleCI env in place of `<your_token>`:

```text
//npm.pkg.github.com/:_authToken=<your_token>
 @kajabi:registry=https://npm.pkg.github.com/
```

#### Heroku Buildpack Requirements

- https://github.com/debitoor/heroku-buildpack-npmrc.git
- heroku/ruby
- heroku/nodejs

### React Storybook Site

Deployed to: https://sage-lib-storybook.herokuapp.com/

The `storybook:deploy` script at the root of the monorepo is designed to push a subtree of the `packages/sage-react` folder to the Heroku master.

#### CircleCI Env Requirements

- **$GH_TOKEN**: A GitHub Personal Access Token with permissions to publish to the repository as well as packages.
- **$HEROKU_API_KEY**: An API key with access to deploy to the environment
- **$HEROKU_STORYBOOK_APP_NAME:** The git address name for the Heroku app (e.g. "sage-lib-storybook")

#### Heroku Buildpack Requirements

- heroku/nodejs

### SASSDocs Site

Deployed to: https://sage-lib-sassdocs.herokuapp.com/

The `sassdoc:deploy` script at the root of the monorepo is designed to push a subtree of the `packages/sage-assets` folder to the Heroku master.

#### CircleCI Env Requirements

- **$GH_TOKEN**: A GitHub Personal Access Token with permissions to publish to the repository as well as packages.
- **$HEROKU_API_KEY**: An API key with access to deploy to the environment
- **$HEROKU_SASSDOCS_APP_NAME**: The git address name for the Heroku app (e.g. "sage-lib-sassdocs")

#### Heroku Buildpack Requirements

- heroku/nodejs
