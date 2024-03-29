## Sage Documentation and Rails Components

This folder contains the documentation site that exhibits the Sage design system. See `app`.

It also contains the Gem for the Rails component library. See `lib/sage_rails`.

This relies on the `sage-assets` and `sage-system` packages to provide the styles and JavaScript for the base system. A library of corresponding React components can be found in `sage-react`, and all these pieces are pulled together and distributed via `sage-packs` for use in Rails applications.

### Creating

New code may be generated in the system using either a generator or based on some boilerplate code.

#### Rails Generators

The following generators will create the desired aspect in the main Documentation site, Rails component library, and/or the `sage-assets` style system. Each is documented in the `<root directory>/docs/lib/generators` directory.

📝 NOTE: All generators in the Sage Design System must be run from within the `<root directory>/docs` directory.

- **Token** -- a SCSS map and function to use for system tokens.
  ```
  rails generate sage_token <MY_TOKEN_NAME>
  ```

- **Component** -- generates source files, documentation files, and style sheets for a component. See also Rails Component generator below.
  ```
  rails generate sage_component <MY_COMPONENT_NAME> <attributes...>
  ```

- **Page** -- a page within the documentation system.
  ```
  rails generate sage_page <MY_PAGE_NAME>
  ```

#### React and System JS

Often components here will need either system JavaScript or a similar React component. See the README within `packages/sage-system` and `packages/sage-react` as needed.

#### Development

##### Production Image

In order to build the docker image you must specify a GITHUB_TOKEN as a build arg.

    ```
    docker buildx build --build-arg RAILS_ENV=production --build-arg GITHUB_TOKEN  -t sage-docs --load .
    ```

Running the image:

    ```
    docker run --rm -it -p 3000:3000 -e RAILS_ENV=production -e SECRET_KEY_BASE=foobarbaz -t sage-docs
    ```

The image requires SSL in production mode. You can use ngrok.io to setup SSL

    ```
    ngrok http 3000
    ```

You can then access the image running locally via your ngrok domain for verification. Fonts may not work if your domain
is not allowed.
