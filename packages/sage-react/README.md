# Sage "React" Package

## Adding new components

The following can be of assistance when you need to add a new component to the package:

- Copy the `SampleComponent` folder within `bin` into `lib` for a starter file set. Replace `SampleComponent` with your actual component's name in any files and file names. These include:
  - `SampleComponent.jsx` the main component file.
  - `SampleComponent.story.jsx` a Storybook story file to exhibit uses of the component. 
  - `configs.js` optional definition file for tokens and other utilities for this component.
  - `index.js` root export for this component to be referenced consistently elsewhere.
- Add an entry for this new component in `packages/sage-react/lib/index.js` in keeping with the other entries.
- Confirm the component appears in Storybook when the app is running.
- Happy developing!

## Usage

Within a separate application that uses this package, import the desired component as follows:

```js
import { Button, Icon } from '@kajabi/sage-react'
```

Within this library itself, import the desired component by pointing to its folder within the package:

```js
import { Button } from '../Button';
import { Icon } from '../Icon';
```

## Local Scripts

The following scripts can be ran by typing `yarn <script_name>` in the root of this repository. The following section goes over each script in detail.

### `build`

One time build of the package. Builds Storybook as well.

### `build:watch`

Continually watch and build the package

### `lint`

Runs the linter that is also used during CI.

### `storybook`

Runs the storybook server. Access at http://localhost:4100/

### `test`

Tuns Jest tests of React components and outputs a report in the console.

### `test:coverage:watch`

Runs all Jest tests in `watchAll` mode and with coverage output.

### `test:coverage:server`

Runs a `browsersync` server on http://localhost:4110/ with live reload to display the `coverage/lcov-report` output. See `test:dev`. You must run `test:coverage:watch` at least once before this command will work smoothly.

### `test:dev`

Runs `test:coverage:watch` and `test:coverage:server` in parallel for an integrated testing Jest experience. If on first load you see `Cannot GET /` simply make a change to a `.spec.jsx` file, watch for console test output to finish and then refresh the browser. Live reload should continue thereafter.
