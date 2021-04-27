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

Continuely watch and build the package

### `lint`

Runs the linter that is also used during CI.

### `storybook`

Runs the storybook server. Access at http://localhost:4100/
