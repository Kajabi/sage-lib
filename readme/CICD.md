# Continuous Integration, Deployment, Versioning, and Releases

Continuous Integration is being handled by GitHub Actions with deployments going to EKS. Lerna is integrated into the Pipeline to allow for automatic Versioning, Changelogs, and Releases.

## Jobs

### lint-test-build

The `lint-build-test` job is reponsible for verifying the integrity of the suite. It ensures all linting, testing, and build procedures pass before allowing a merge. This job is run as part of every PR and push to `main`.

### release-and-deploy

The `release-and-deploy` step only triggers on `main` pushes that are not initiated by the CI system. This includes merges into `main` from a PR.

[Lerna](https://github.com/lerna/lerna) will then review the changes to the PR and automatically generate `CHANGELOG.md` files and bump the versions of all the packages and underlying gem. Package versions will only change if modifications were detected to the underlying package. These modifications are signified by the developer using the [Conventional Commits Standard](https://www.conventionalcommits.org/en/v1.0.0/). To find out more about how Lerna handles version changes you can review the [bootstrap](https://github.com/lerna/lerna/tree/main/commands/bootstrap#readme) and [publish](https://github.com/lerna/lerna/tree/main/commands/publish#readme) documentation.

The `bin/bump-gem.sh` script is executed as part of the versioning processes to the `@kajabi/sage` package which is located in the `docs/` folder. This script reviews the version change Lerna is committing to the package and mirrors that with a `bump` to the `sage_rails` gem, keeping them in parity.

Once all versioning is handled Lerna will [publish](https://github.com/lerna/lerna/tree/main/commands/publish#readme) tags and releases to the main repository.

GitHub Actions will then initiate a deployment of the primary "docs" site, the storybook site as part of the `@kajabi/sage-react` package, and the sassdocs site as part of the `@kajabi/sage-assets` package. Read the Deployment section of this document for more information.

## Deployment

There are 3 applications as part of the Sage suite. Each of these elements have their own deployment procedures and configuration.

### Rails "Docs" Site

Deployed to: https://sage-lib-documentation.production.kajabi.farm/

### React Storybook Site

Deployed to: https://sage-lib-storybook.production.kajabi.farm/

### SASSDocs Site

Deployed to: https://sage-lib-sassdocs.production.kajabi.farm/
