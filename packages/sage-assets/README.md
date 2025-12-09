# Sage "Assets" Package

The Sage Assets package contains all SCSS stylesheets, token definitions, and design system styling for the Sage Design System.

## Token System

Sage Assets uses Pine design tokens which are loaded **externally** (not bundled):

- **Pine Tokens** - Loaded by the consuming application (docs app, KP, etc.)
  - Provides semantic tokens (e.g., `--pine-color-primary`) for dark mode compatibility
  - NOT bundled in sage-assets to avoid duplication when both Pine and Sage are used

- **Style Dictionary** - Legacy system maintained for backward compatibility
  - Used for SCSS hex value lookups via `sage-color-hex()` function
  - Located in `/style-dictionary/tokens/`

### Using Color Tokens

```scss
// For CSS properties (dark mode compatible)
.my-component {
  background-color: sage-color(primary, 300); // Returns: var(--pine-color-primary)
  color: sage-color(white); // Returns: var(--pine-color-white)
}

// For SCSS color operations (requires hex values)
$lightness: lightness(sage-color-hex(primary, 300)); // Returns: #2463eb
```

See `SCSS_COLOR_OPERATIONS_STRATEGY.md` for detailed guidance on when to use each function.

## Local Scripts

The following scripts can be ran by typing `yarn <script_name>` in the root of this repository. The following section goes over each script in detail.

### `build`

One time build of the package

### `build:webpack`

Specific build for webpack

### `build:webpack:watch`

Specific build for webpack with a watcher attached

### `build:sassdoc`

One time build of the SassDoc assets

### `build:sassdoc:watch`

Continually watch and build the SassDoc assets

### `build:watch`

Continually watch and build the package

### `preversion`

Automated script to run during preversion. Used in the Lerna monorepo

### `start`

Start the SassDocs http server on port 4200

### `start:local`

For local development, starts server along with watchers
