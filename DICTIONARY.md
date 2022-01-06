# Sage Dictionary

The Sage Dictionary is a library of tokens and component configurations built using [Style Dictionary](https://amzn.github.io/style-dictionary/).
This allows us to keep a simple JSON structure for these values but allow each to be formatted and distributed to the other Sage packages automatically.

In summary, Style Dictionary allows the following:

1. We set up `json` files in `/style-dictionary/tokens` that follow a particular format for centralizing token values. For now we have just shown what is possible with the various color and grid template tokens.
2. `yarn build:sd` runs within `yarn start` and our normal build process and compiles these token values out to the other formats based on the configurations set up in `/style-dictionary/configs.js`:
    - `packages/sage-assets/lib/stylesheets/dictionary/_tokens.scss` for a series of Sass variables with a prefix of `$sd-sage-`
    - `docs/lib/sage_rails/app/sage_components/sage_dictionary.rb` from `SageDictionary` within Rails.
    - `packages/sage-react/lib/configs/dictionary/tokens.js` for `SageDictionary` within React.

    Note that `yarn build:sd` must be run manually whenever changes are made to any of the `style-dictionary` files. Future will include an automated watch script.

3. These compiled tokens are manually implemented underneath each platform's existing variables/constants to ensure minimal external change for consuming Sage tokens at this time.

## CTI structure

Style Dictionary follows the "Category Type Item (CTI)" structure as a baseline for how JSON documents are structure but also allows for custom extensions.

We have followed CTI as much as possible in our system. We've also made use of some categories as follows within the `style-dictionary/tokens/` directory by using the following categories:

- `color` - Style dictionary provides Transforms that take any standard color values and automatically provide additional format values.
  This makes it easy to set colors as hex values in our data structure but consumer them in other formats elsewhere.
  We have set up the following `types`:
  - `base` -- the full set of color values for our system including each one's hex value, type color classname, and alias/code such as `primary-100`
  - `combos` -- configurations of color combinations used by several different components
  - `core` -- the abbreviated set of base color values that correspond to the `300` value for each color.
  - `custom` -- additional colors used in the system beyond the base palette.
- `content` - Style dictionary provides Transforms for treating content formats as strings.
  We have set up the following `types`:
  - `grid-templates` - "morse code"-like grid template configurations. See Documentation > Grid Templates.
- FUTURE:
  - `content/icons` - Unicode values for the icons in our icon fonts.
  - `size` - Style dictioanry provides Transforms for taking size measurements (numbers) and converting them to other units.
    In our case, we built a custom Transform based on Style Dictioanry's `size/object` preset that adds a `rem()` output for our Sass context.
    We have set up the following `types`:
    - `border-radius`
    - `breakpoint` (media query `min` and `max`)
    - `container` - Options for system layout containers
    - `font-size`
    - `icon` - Options for sizing icons
    - `icon-background` - Options for sizing the background space in which icons can be placed.
    - `letter-spacing`
    - `line-height`
    - `sidebar` - Options for our system sidebar size
    - `spacer` - Standard spacers used throughout the system

We have plans to further extend this structure with the following custom categories:

- `component` -- configurations for each of our system components so as to ensure a consistent structure is used by all packages. These use the following data structure:
  - [compoent]
    - [props]
      - `attributes` - additional configurations specific to our system. These do not use the `value` sub-property, allowing a direct data assignment.
        - `reuqired` - [boolean] whether or not this property is required.
        - `description` - [string|html] a description of the property and its intended use.
      - `default` - default value to use when not required.
      - `options` - a set of options allowable on this component.
      - `schema` - the schema to use. This typically referes to a `component.schema` preset for commone configurations but can also provide a similar structure directly here.
- `type` -- configurations for type. Note that size-based values such as font size and line-height are set up in the `size` category (see above).
  - `weight` - Configurations for font weights provided by our system fonts.
  - `type-pairing` - Our standardized pairings for `font-size` and `line-height`.
  - `responsive` - Configurations for which type pairings to use resonsively for our primary type specs
  - `type-spec` - Our core type specifications. These use a particular weight and responsive configuration for `font-size` and `line-height` pairings and expose the CSS class name to be used for each.
- `style` -- CSS-specific configurations 
  - `border`
  - `shadow`
  - `z-index`

## Platforms

Platforms are the core set of configurations that determine the ways that dictionary data is output.
These take the core data, mutated by "Transforms", and output based on "Formats" so that dictionary
content can be distributed to different areas of our system.

We have configured the following platforms:

- Rails Tokens
- React Tokens
- Sass Tokens

In the future we intend to develop platforms for the following:

- React Component Typescript Typings
- Rails Component Schemas

See [Style Dictionary's documentation for Configuring Platforms](https://amzn.github.io/style-dictionary/#/config) and `style-dictionary/bin/platforms.js` for our implementation.

## Transforms

While core dictionary values are stored in JSON format, Style Dictionary provides Transforms that allow us to mutate this core data in many different ways.
There are Transforms delivered with Style Dictionary and we have added our own custom Transformations for a few different places.

See [Style Dictionary's documentation for Transforms](https://amzn.github.io/style-dictionary/#/Transforms) and `style-dictionary/bin/Transforms.js` for our implementation.

Note that groups of Transforms can be set up for a platform as well. See `style-dictionary/bin/Transform-groups.js` for our implementation of this feature.

## Formats

Style Dictionary Platforms rely on Transforms and Formats to generate the desired output.
Formats provide specific templates for how values are output in platform-specific files and syntax.

While Style Dictionary provides a number of default Formats, for Sage we built custom Formats that use Handlebars templates to generate the desired output. See the `style-dictionary/templates/` folder.
Any new templates must be registerred in the `templateFiles` array set within `style-dictionary/bin/templating.js`.

See [Style Dictionary's documentation for Transforms](https://amzn.github.io/style-dictionary/#/formats) and `style-dictionary/bin/formats.js` for our implementation.

## Templates

Style Dictionary provides the opportunity within Formats to use a variety of templating approaches for controlling how tokens are output. We have chosen to use Handlebars to create templates for such purposes.

See `style-dictionary/bin/templating.js` and `style-dictionary/templates` for more.

## Utilities

Outside of the Style Dictionary system we built a small library of utilities that support aspects of our custom additions.

See `style-dictionary/bin/utilities.js` for more.
