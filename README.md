![sage design system logo](readme/sage-hero.jpg)

<h1 style="text-align: center;">
  Sage Design System
</h1>

> The Sage Design System is our single source of truth, providing everything you need to build great products for our customers. It is the culmination of designers and developers working together to give teams the ability to ship high-quality products faster.

## 📚 Documentation

* To use Sage in your application, see our [Documentation Site](https://sage.kajabi.com/pages/index)
* To view the documentation for contributing to Sage, see our [internal Wiki](https://github.com/Kajabi/sage-lib/wiki)

## 🗒️ Create an Issue

Do you have an issue, bug, or suggestion you would like to add to the Design System? [Create an issue](https://github.com/Kajabi/sage-lib/issues/new/choose)!

## 👩‍💻 Contributing

### Conventional Commits

This repository utilizes the
[Conventional Commits Standard](https://www.conventionalcommits.org/en/v1.0.0/). Utilizing this standard allows us to automatically version our software during the Continuous Integration process and generate `CHANGELOG.md` files for each package.

### Unsure how to format your commit message?

Use `yarn commit` to launch a wizard to walk you through with [Commitizen](https://github.com/commitizen/cz-cli)

A `commit-msg` hook has been added to the repository to enforce this behavior. Ensure you have read over the convention and understand it before making a Pull Request.

### Repo Structure

There are five total packages in the monorepo:

| Package | Description | Location | README | CHANGELOG |
|--|--|--|---|--|
| **@kajabi/sage** | Gem with Rails components and a documentaiton site of the same | `./docs` | [README](./docs/README.md) | [CHANGELOG](./docs/CHANGELOG.md) |
| **@kajabi/sage-assets** | Styles and a Sassdoc site of the same | `./packages/sage-assets` | [README](./packages/sage-assets/README.md) | [CHANGELOG](./packages/sage-assets/CHANGELOG.md) |
| **@kajabi/sage-packs** | Packs `sage-assets`, `sage-system`, and `sage-react` for use in Rails applications. | `./packages/sage-packs` | [README](./packages/sage-packs/README.md) | [CHANGELOG](./packages/sage-packs/CHANGELOG.md) |
| **@kajabi/sage-react** | React component library and Storybook for documentation | `./packages/sage-react` | [README](./packages/sage-react/README.md) | [CHANGELOG](./packages/sage-react/CHANGELOG.md) |
| **@kajabi/sage-system** | JS scripts for use with the Rails components | `./packages/sage-system` | [README](./packages/sage-system/README.md) | [CHANGELOG](./packages/sage-system/CHANGELOG.md) |

Outside of these packages is a dictionary of tokens built using [Style Dictionary](https://amzn.github.io/style-dictionary/). This provides a central location for storing constant values and component configurations that is distributed to each respective package. [Learn more](DICTIONARY.md)

### Lerna Mono-Repository

The Sage Design System is a [Lerna Mono-Repository](https://github.com/lerna/lerna) (or a monorepo for short). From the Lerna README:

>Splitting up large codebases into separate independently versioned packages is extremely useful for code sharing. However, making changes across many repositories is messy and difficult to track, and testing across repositories becomes complicated very quickly.
>
> To solve these (and many other) problems, some projects will organize their codebases into multi-package repositories (sometimes called monorepos). Projects like Babel, React, Angular, Ember, Meteor, Jest, and many others develop their packages within a single repository.
>
> Lerna is a tool that optimizes the workflow around managing multi-package repositories with git and npm.
>
> Lerna can also reduce the time and space requirements for numerous copies of packages in development and build environments - usually a downside of dividing a project into many separate NPM packages.

### Adding Packages

This repository utilizes [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces/), which allows for the setup of multiple packages in such a way that you only need to run `yarn install` from the root of the repository, and all packages will be updated. In addition, the syntax is provided to target installation towards specific packages or the entire suite. Below are examples of adding packages:

```bash
# Adds the module-1 package to the packages in the 'prefix-' prefixed folders
$ yarn lerna add @kajabi/sage-assets packages/sage-*

# Install @kajabi/sage-assets in @kajabi/sage-react
$ yarn lerna add @kajabi/sage-assets --scope=@kajabi/sage-react

# Install @kajabi/sage-assets in @kajabi/sage-react as a devDependency
$ yarn lerna add @kajabi/sage-assets --scope=@kajabi/sage-react -D

# Install @kajabi/sage-assets to @kajabi/sage-react as a peerDependency
$ yarn lerna add @kajabi/sage-assets --scope=module-2 -P

# Install @kajabi/sage-assets in all modules except @kajabi/sage-assets
$ yarn lerna add @kajabi/sage-assets

# Install babel-core in all modules
$ yarn lerna add babel-core
```

### Local Development

#### Getting Started

Run the Setup script:

```bash
$ yarn setup
```

If this is your first time using Sage you will be prompted to provide a GitHub Personal Access token. This token will be placed in your global `~/.npmrc` file, if it exists, or an `~/.npmrc` file will be created for you. If the Sage installer identifies a GitHub Access token in your `~/.npmrc` you will not be prompted. You can find more information on obtaining a token [here](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token).

Start the suite:
```bash
$ yarn start
```

To visit the primary documentation site: http://localhost:4000/

To visit the Storybook (React components) site: http://localhost:4100/

To visit the Sassdocs (Sass documentation) site: http://localhost:4200/

#### Bridging Kajabi Products

The Kajabi Products repository needs to be locally linked to your Sage repository in order to have live reloading of your changes during your development cycle. This process is natively handled by Sage:

```bash
$ yarn bridge:kajabi-products
```

If this is your first time using `yarn bridge` you will be prompted to provide your path to your local Kajabi Products repository. This path can be absolute (`~/home/me/code/kajabi-products`) or relative (`../kajabi-products`). The value you enter will be inserted into your local `.env` file. If a `.env` file does not exist one will be created for you based on the `.env.dist` file in this repository.

>*Note: In the event you mistype your repository path or its location changes, you can edit its value in the `.env` file*

When running the `bridge`, you *must* have `yarn start` running in this repository for your changes to be actively compiled.

Within your Kajabi Products repository, run the project as you usually would and in tandem also run Kajabi-Products' `webpack-dev-server`. For Kajabi Products to watch changes within your local Sage repo `webpack-dev-server` needs to be running.

```bash
$ bin/webpack-dev-server
```

#### Destroying the Kajabi Products Bridge

From time to time you will need to destroy your Kajabi Products Bridge and utilize the production version of the packages on the branch. To destroy the bridge:

```bash
$ yarn bridge:kajabi-products:destroy
```
### Update `kajabi-products` to the latest Sage version

The Version Bump Process is documented in this [wiki article](https://github.com/Kajabi/sage-lib/wiki/Version-Bump-Process).

## Local Scripts

The following scripts can be run by typing `yarn <script_name>` in the root of this repository. :star:'s have been added to signify typical user-initiated tasks.

### `bootstrap`

Proxy for the Lerna [bootstrap](https://github.com/lerna/lerna/tree/main/commands/bootstrap) command. This will install all dependencies and link any cross-dependencies of the monorepo.

### `bridge:kajabi-products` :star:

This command creates a local "bridge" between your local Sage packages and the Kajabi Products repo. Use this bridge when you want to locally edit changes in Sage and see them live in Kajabi Products.

### `bridge:kajabi-products:status`

Displays the status of the local bridge link

### `bridge:kajabi-products:destroy` :star:

Destroys the bridge created by `bridge:kajabi-products`

### `build` :star:

Runs all `build:*` based scripts

### `build:assets`

One time build of the `@kajabi/sage-assets` package

### `build:react`

One time build of the `@kajabi/sage-react` package

### `build:system`

One time build of the `@kajabi/sage-system` package

### `commit` :star:

Utilize [Commitizen](https://github.com/commitizen/cz-cli) to generate a commit message following the [Conventional Commit Standard](https://www.conventionalcommits.org/en/v1.0.0/)

### `docs`

Start the documentation site from the `docs/` folder. Will be located at http://localhost:4000/

### `docs:bundle`

Run `bundle install` on the `docs/` folder.

### `docs:initialize`

Initialize the docs site. Install all gems/packages

### `external`

Destroy any local link between the Sage Rails gem and the internal Sage Packages

### `gem:bump:type`

Determine the current required "bump type" for the Sage Rails gem. This value is based on the current version value of the npm package it is associated with. (null|patch|minor|major|ect.)

### `lint` :star:

Run all `lint:*` scripts

### `lint:assets`

Lint the `@kajabi/sage-assets` package

### `local`

Establish a local link between the Sage Rails gem and the internal Sage Packages

### `sassdocs`

Run the SassDoc server from the `@kajabi/sage-assets` package.

### `setup` :star:

Run the initial setup scripts

### `setup:init`

Install local packages for the main repository and `docs/` path

### `start` :star:

Continually compiles packages on changes and starts the applications.

- To visit the primary documentation site: http://localhost:4000/
- To visit the Storybook (React components) site: http://localhost:4100/
- To visit the Sassdocs (Sass documentation) site: http://localhost:4200/

### `storybook`

Launch "storybook" from the `@kajabi/sage-react` package

### `test`

Run all `test:*` scripts

### `test:react`

Run the test suite on the `@kajabi/sage-react` npm package

### `ver:sage`

Get the current version of the `@kajabi/sage` npm package

### `ver:sage:gem`

Get the current version of the `sage_rails` gem

### `ver:assets`

Get the current version of the `@kajabi/sage-assets` npm package

### `ver:react`

Get the current version of the `@kajabi/sage-react` npm package

### `ver:system`

Get the current version of the `@kajabi/sage-system` npm package

### `watch` :star:

Run all `watch:*` scripts

### `watch:assets`

Continually watch and build the `@kajabi/sage-assets` npm package

### `watch:react`

Continually watch and build the `@kajabi/sage-react` npm package

### `watch:system`

Continually watch and build the `@kajabi/sage-system` npm package

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md)

## Automations

See [AUTOMATIONS.md](readme/AUTOMATIONS.md)

## CI/CD, Releases, and Versioning

See [CICD.md](readme/CICD.md)

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
