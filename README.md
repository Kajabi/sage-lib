# Sage Design System

The Sage Design System (SDS) is our single source of truth, providing everything you need to build great products for our customers. It is the culmination of designers and developers working together to give teams the ability to ship high-quality products faster.

[Visit Sage Design System →](https://sage-design-system.kajabi.com/)

#### Password Protection
The SDS documentation site uses [Lockup](https://github.com/gblakeman/lockup) for password protection. Currently this is disabled but can be easily enabled by setting the ENV variable `LOCKUP_CODEWORD` in Heroku.

## Structure

This repo contains the Sage documentation site and the SDS as a webpack-compatible frontend package and rails engine located within `./lib/..`.

![image](https://user-images.githubusercontent.com/565743/83690086-b0acce00-a5b5-11ea-90f5-9b8e8b0bd337.png)

## Local Development: Sage

### Getting Started

Install the dependencies.

```bash
$ yarn install
```

```bash
$ bundle
```

### Run Locally

Run the rails & webpack development servers in tandem.
```bash
$ yarn start
```

Additional scripts live within `./package.json` and can be run in the console using `yarn run <COMMAND NAME>`.

The documentation site can be accessed at [`http://localhost:4000`](http://localhost:4000/). Happy development!

### Contributing

To contribute to Sage development you must be an authorized contributor, typically as an employee of Kajabi. Otherwise:

1. Create a branch off of `master` on which to add your changes. Push the branch and open a PR.
2. Once approval has been given  merge the PR into `master` using the Squash and Merge option and be sure that your merge commit message succinctly but accurately describes the changes you made.
3. Find the active draft release in [Github Releases](https://github.com/Kajabi/sage/releases) and edit the release notes to include information relative to your PR. Be sure to note any cases where your work will necessitate updates wherever this system is implemented (see notes below under Version Bump process regarding patch versus minor versions).


## Local Development: Kajabi-Products

### Getting Started

To link your _local_ Sage repo's assets within Kajabi-Products we have a shell script that automates this process.

```bash
# IMPORTANT! Run the Sage script within the root of your local Kajabi-Products repo, not the Sage repo.

$ <RELATIVE PATH TO SAGE REPO>/bin/sage-local-link.sh <BOOLEAN>


# For example if the Kajabi-Products and Sage repos are sibling directories:
# $ ../sage/bin/sage-local-link.sh true
```

The script requires a boolean argument designating whether to setup or tear down the link to your local Sage repo.
- Frontend is an automation of `yarn link`, you can do this process manually as well. [See the yarn docs for more details.](https://classic.yarnpkg.com/en/docs/cli/link/)
- Rails Gem is an automation of `bundle config local.sage_rails`

### Run Locally

Within Kajabi-Products, run the project as you normally would and in tandem also run Kajabi-Products' webpack-dev-server. In order for Kajabi-Products to watch changes within your local Sage repo webpack-dev-server needs to be running.
```bash
# Run Kajabi-Products
$ heroku local
```

```bash
# Run Kajabi-Products' webpack-dev-server
$ bin/webpack-dev-server
```

It's recommended to run the Sage documentation site in tandem with Kajabi-Products. The documentation site is hosted through port `4000` to avoid conflicts with Kajabi-Products' use of the `30XX` range.

## Deploying Sage

### Cut A New Version Of Sage

#### If This Is Your First Deploy

Ensure you have…

1. Deploy rights to the [sage-design-system Heroku app](https://dashboard.heroku.com/apps/sage-design-system/access)
2. The [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli#download-and-install) installed
3. Added the Heroku app as a git remote location (`heroku git:remote -a sage-design-system`)

#### Version Bump & Deploy Docs

First ensure all new code is completed through a PR and merged into `master`. Then:

1. Check with the UX Dev group via the `ux-dev` channel in Kajabi Slack to see if there are any concerns regarding a version bump. Assuming no concerns are voiced, continue.
2. Find the current draft release in [Github Releases](https://github.com/Kajabi/sage/releases) and review its contents in order to determine what this next version bump should be. Generally:

    - A Patch (_._.n; non-blocking changes) should be used when only small styling is adjusted or new elements/objects are added that are yet to be implemented in `kajabi-products` or other repos that use this design system.
    - A Minor bump (_.n.0; blocking changes) should be used when more significant styling is completed, markup is changed on any object or element, or substantive changes are made to the system's documentation. _When in doubt, bump a new `minor` version.

    Keep the version draft open as you will return to it shortly.

3. From the `master` branch (after first ensuring your local branch is up to date with `origin`) use `bin/sage-release` script to bump the package & gem version with a version-tagged git commit as follows:

    ```bash
    # Use the minor or patch arguments to update the minor or patch version number respectively
    $ bin/sage-tag patch
    # This will automatically push the git-tagged commit to github and deploy to Heroku
    ```

    **Note:** The Sage version is defined in 3 locations:
      - `./package.json` frontend package version
      - `SageRails::VERSION` gem version
      - tagged git commit containing the version bump update
    Please ensure these values match after a version bump.

    This command also automatically deploys the new version bump to our [sage-design-system.kajabi.com](https://sage-design-system.kajabi.com/) public documentation.

4. Once the deployment is complete make sure the version commit is also pushed to the `origin`.
5. Return to [Github Releases](https://github.com/Kajabi/sage/releases) and the draft release you consulted earlier. Update its number and title to match the version tag you just bumped and map it to the tag that pushed with your version commit from the step above.
6. Publish the Release.
7. Update the `ux-dev` channel in Kajabi Slack.
8. Create a new Draft release with the next logical version number matching the existing tag and title naming conventions from the other Releases. This will ensure others can add their updates to the release notes as they merge changes moving forward.

### Update Kajabi-Products To The Latest Sage Version
Our main app uses a version-tagged commit from the Kajabi/Sage master branch as the source for the Sage frontend dependency.

Both the Sage Frontend package and the sage_rails gem **should be updated**.

#### Sage Frontend
```bash
# Example:
# yarn upgrade sage@git://github.com/Kajabi/sage.git#0.17.0

$ yarn upgrade sage@git://github.com/Kajabi/sage.git#<GIT VERSION TAG>
```

### sage_rails
First update the Kajabi-Products gemfile:
```diff
# Example:
# gem "sage_rails", "<SAGERAILS GEM VERSION>", tag: "<GIT VERSION TAG>", git: "https://github.com/kajabi/sage", glob: "lib/sage_rails/*.gemspec"

-  gem "sage_rails", "1.11.2", tag: "v1.11.2", git: "https://github.com/kajabi/sage", glob: "lib/sage_rails/*.gemspec"
+  gem "sage_rails", "1.11.3", tag: "v1.11.3", git: "https://github.com/kajabi/sage", glob: "lib/sage_rails/*.gemspec"

```
Then run `bundle install`.
```bash
$ bundle install
```

## Installation
### Frontend Package
Add the frontend package to your `package.json`.
```bash
$ yarn add git://github.com/Kajabi/sage.git
```

Exclude the Sage package from being ignored in your webpack development server.
```yml
# Within webpacker.yml

development:
  <<: *default
    watch_options:
      ignored: '[/node_modules([\\]+|\/)+(?!sage)/]'

```

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
