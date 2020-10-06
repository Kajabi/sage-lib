Sage Buttons allow a number of modifiers to customize their appearance including:

- Color -- use `color` prop; default is `primary`
- Size -- use `size` prop; default is standard size (40px)
- Alignment -- option to align to the right with `alignRight` set to `true`
- Icons -- All Sage icons can be added either to the left or the right of the button label using `icon` and `iconPosition` (left is default). You can even make an icon-only button with `iconOnly` set to `true` in which case the label becomes visually hidden leaving just the icon visible while still screen reader accessible.

Buttons can also be configured as hyperlinks while keeping the styling consistent. Just pass the desired properties (at least `href`) using the `hyperlinkAttributes` prop.