# Sage Dictionary

The Sage Dictionary is a library of tokens and component configurations built using [Style Dictionary](https://amzn.github.io/style-dictionary/).
This allows us to keep a simple JSON structure for these values but allow each to be formatted and distributed to the other Sage packages automatically.

More coming soon!

## CTI structure

Style Dictionary follows the "Category Type Item (CTI)" structure as a baseline for how JSON documents are structure but also allows for custom extensions.

We have followed CTI as much as possible in our system. We've also made use of some categories as follows within the `style-dictionary/tokens/` directory by using the following categories:

- `color` - Style dictionary provides transforms that take any standard color values and automatically provide additional format values.
  This makes it easy to set colors as hex values in our data structure but consumer them in other formats elsewhere.
  We have set up the following `types`:
  - `base` -- the small set of core color values for our system
  - `slider` -- the expanded set of color slides for each of our base colors
  - `combos` -- configurations of color combinations used by several different components
  - `custom` -- additional colors used in the system beyond the base palette.
- `content` - Style dictionary provides transforms for treating content formats as strings.
  We have set up the following `types`:
  - `icons` - Unicode values for the icons in our icon fonts.
  - `grid-templates` - "morse code"-like grid template configurations. See Documentation > Grid Templates.
- `size` - Style dictioanry provides transforms for taking size measurements (numbers) and converting them to other units.
  In our case, we built a custom transform based on Style Dictioanry's `size/object` preset that adds a `rem()` output for our Sass context.
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

We have extended this structure with the following custom categories:

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
These take the core data, mutated by "transforms", and output based on "formats" so that dictionary content can be distributed to different areas of our system.

We have configured the following platforms:

- React Tokens
- React Component Typings
- Rails Tokens
- Rails Component Schemas
- Sass Tokens

## Transforms

While core dictionary values are stored in JSON format, Style Dictionary provides Transforms that allow us to mutate this core data in many different ways.
There are transforms delivered with Style Dictionary and we have added our own custom transformations for a few different places.

Details coming soon.

## Formats

Style Dictionary Platforms rely on transforms and formats to generate the desired output.
In the case of formats, these provide specific templates for how values are output in platform-specific files and syntax.

While Style Dictionary provides a number of default formats, for Sage we built custom formats that use Handlebars templates to generate the desired output. See the `style-dictionary/templates/` folder.
Any new templates must be registerred in the `templateFiles` array set within `style-dictionary/bin/templating.js`.

Details coming soon.

## Utilities

Outside of the Style Dictionary system we built a small library of utilities that support aspects of our custom additions.

Details coming soon.
