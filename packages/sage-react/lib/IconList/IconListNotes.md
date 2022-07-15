The Icon List component allows you to create a list whose items contain either an icon or a toggle (radio, checkbox) alongside indented text for a neat presentation of a specialized list.

This component is compositional with the following options available:

- `IconList.Item` is a wrapper for each item in the list. You can place any content inside this that you'd like. Attributes to specify settings for either an `icon` or an `input` can be provided on this element including:
  - `icon` -- the Sage Icon to use
  - `iconColor` -- color for the icon
  - `input` -- either `radio` or `checkbox` to display instead of an icon.
  - `inputId` -- HTML `id` for the `input` element when used.
  - `inputName` -- HTML `name` to be applied to the `input` element when used.
  - `inputValue` -- HTML `value` to be applied to the `input` element when used.
  - `label` -- An accessible label for the icon or the input field.
  - `checked` -- whether or not the toggle input is "checked"
- `IconList.Item.Title` (placed inside `Item`) outputs a formatted heading for the content in the list item. Optionally, a particular HTML heading tag can be specified for this with `tag`.
- `IconList.Item.Label` (placed inside `Item`) should be used instead of `Title` to accompany a toggle such as a checkbox or radio. Be sure to pass the accompanying input's `id` to this element's `htmlFor` attribute.
- `IconList.Item.Subtext` (placed inside `Item`) can optionally be used for larger content underneath a `Label`.
