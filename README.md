# Sage Design System

The Sage Design System (SDS) is our single source of truth, providing everything you need to build great products for our customers. It is the culmination of designers and developers working together to give teams the ability to ship high-quality products faster.

[Visit Sage Design System →](https://sage-design-system.kajabi.com/)

## Structure

![Sage Structure](readme/sage-structure.png "Sage Structure")

### Lerna Mono-Repository

The Sage Design System is a [Lerna Mono-Repository](https://github.com/lerna/lerna) (or a monorepo for short). From the Lerna README:

>Splitting up large codebases into separate independently versioned packages is extremely useful for code sharing. However, making changes across many repositories is messy and difficult to track, and testing across repositories becomes complicated very quickly.
>
> To solve these (and many other) problems, some projects will organize their codebases into multi-package repositories (sometimes called monorepos). Projects like Babel, React, Angular, Ember, Meteor, Jest, and many others develop all of their packages within a single repository.
>
> Lerna is a tool that optimizes the workflow around managing multi-package repositories with git and npm.
>
> Lerna can also reduce the time and space requirements for numerous copies of packages in development and build environments - normally a downside of dividing a project into many separate NPM packages.

There are 5 total packages in the monorepo:

#### @kajabi/sage

Located in `./docs`

More info in the [README](./docs/README.md)

#### @kajabi/sage-assets

Located in `./packages/sage-assets`

More info in the [README](./packages/sage-assets/README.md)

#### @kajabi/sage-packs

Located in `./packages/sage-packs`

More info in the [README](./packages/sage-packs/README.md)

#### @kajabi/sage-react

Located in `./packages/sage-react`

More info in the [README](./packages/sage-react/README.md)

#### @kajabi/sage-system

Located in `./packages/sage-system`

More info in the [README](./packages/sage-system/README.md)

### Conventional Commits

This repository utilizes the
[Conventional Commits Standarard](https://www.conventionalcommits.org/en/v1.0.0/). Utilizing this standard allows us to automatically version our software during the Continuous Integration process as well as generating CHANGELOG.md files for each of the packages.

A `commit-msg` hook has been added to the repository to enforce this behavior. Ensure you have read over the convention and understand it prior to making a Pull Request.

## Local Development: Sage

### Getting Started

Run the Setup script:

```bash
$ yarn setup
```

If this is your first time using Sage you will be prompted to provide a GitHub Personal Access token. This token will be placed in your global `~/.npmrc` file, if it exists, or an `~/.npmrc` file will be created for you. If the Sage installer identifies a GitHub Access token in your `~/.npmrc` you will not be prompted.  You can find more information on obtaining a token [here](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token).

Start the suite:
```bash
$ yarn start
```

To visit the primary documentation site: http://localhost:4000/
To visit the storybook site: http://localhost6006/

### Bridging Kajabi Products

The Kajabi Products repository needs to be locally linked to your Sage repository in order to have live reloading of your changes during your development cycle. This process is natively handled by Sage:

```bash
$ yarn bridge:kajabi-products
```

If this is your first time using `yarn bridge` you will be prompted to provide your path to your local Kajabi Products repository. This can be an absolute (`~/home/me/code/kajabi-products`) or relative (`../kajabi-products`). The value you enter will be instered into your local `.env` file. If a `.env` file does not exist one will be created for your based on the `.env.dist` file in this repository.

>*Note: In the event you mistype your repository path, or it's location changes you can edit it's value in the `.env` file*

When running the `bridge` you *must* have `yarn start` running in this repository in order for your changes to be actively compiled.

Within your Kajabi Products repository, run the project as you normally would and in tandem also run Kajabi-Products' `webpack-dev-server`. In order for Kajabi Products to watch changes within your local Sage repo `webpack-dev-server` needs to be running.

```bash
$ heroku local
```

```bash
$ bin/webpack-dev-server
```

### Destroying the Kajabi Products Bridge

From time to time you will need to destroy your Kajabi Products Bridge and utilize the production version of the packages on the branch. To destroy the bridge:

```bash
$ yarn bridge:kajabi-products:destroy
```
## Update Kajabi-Products To The Latest Sage Version

More to come...

## Local Scripts

The following scripts can be ran by typing `yarn <script_name>` in the root of this repository. The following section goes over each script in detail.

### `bootstrap`

Proxy for the Lerna (bootstrap)[https://github.com/lerna/lerna/tree/master/commands/bootstrap] command. This will install all dependencies and link any cross-dependencies of the monorepo.

### `bridge:kajabi-products`

Creates a local "bridge" between your local Sage packages and the Kajabi Products repo. Use this bridge when you want to be able to locally edit changes in Sage and see them live in Kajabi Products.

### `bridge:kajabi-products:destroy`

Destroys the bridge created by `bridge:kajabi-products`

### `build`

Runs all `build:*` based scripts

### `build:assets`

One time build of the `@kajabi/sage-assets` package

### `build:react`

One time build of the `@kajabi/sage-react` package

### `build:system`

One time build of the `@kajabi/sage-system` package

### `docs`

Start the documentation site from the `docs/` folder. Will be located at http://localhost:4000/

### `docs:bundle`

Run `bundle install` on the `docs/` folder.

### `external`

Destroy any local link between the Sage Rails gem and the internal Sage Packages

### `gem:bump:type`

Determine the current required "bump type" for the Sage Rails gem. This value is based on the current version value of the npm package it is associated with. (null|patch|minor|major|ect.)

### `lint`

Run all `lint:*` scripts

### `lint:assets`

Lint the `@kajabi/sage-assets` package

### `local`

Establish a local link between the Sage Rails gem and the internal Sage Packages

### `setup`

Run the initial setup scripts

### `setup:init`

Install local packages for the main repository and `docs/` path

### `start`

Continuely compiles packages on changes and starts the applications
To visit the primary documentation site: http://localhost:4000/
To visit the storybook site: http://localhost6006/

### `storybook`

Launch "storybook" from the `@kajabi/sage-react` package

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

### `watch`

Run all `watch:*` scripts

### `watch:assets`

Continuely watch and build the `@kajabi/sage-assets` npm package

### `watch:react`

Continuely watch and build the `@kajabi/sage-react` npm package

### `watch:system`

Continuely watch and build the `@kajabi/sage-system` npm package

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md)

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

