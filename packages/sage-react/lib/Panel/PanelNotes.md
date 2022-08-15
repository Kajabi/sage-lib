Panels is a basic organizer for placing featured content on the stage in the Sage Design system. Place any other elements you need between the opening and closing tags. The Panel handles spacing automatically. Details and further implementation of more specific panel children is coming soon.

The basic Panel is a compositional component that allows any content as its children, but typically includes at least one of the following elements:

- `Panel.Header` -- Contains header content such as the `Panel.Title`. Additional elements such as `Button`s will push to the right edge of the panel.
- `Panel.Block` -- While there are a variety of elements available for organizing content in the body of the panel, the `Block` is a good go-to, particularly when adding typography blocks. Set `sageType={true}` to enforce standard typography spacing and styling with just basic markup. Employ `t-sage` type specs and other utilities as needed otherwise.
- `Panel.Footer` -- Containes footer content such as action buttons. These are aligned to the right of the space by default but can be set to spread across the frame with `alignSpread={true}`.

A few other elements include:

- `Panel.Subheader` -- just like `Panel.Header` but for subheadings within the Panel. 
- `Panel.Divider` -- a simple line to use as a divider between groups for extra visual offset.
- `Panel.Title` -- In lieu of a full `Header`, the `Title` can be used independently. However, only one `Title` should be used in a given Panel.
- `Panel.Subtitle` -- In lieue of a full `Subheader`, the `Subtitle` may be used for adding just a subtitle element within a panel.

Additional structured elements are discussed in other stories. Each page shows one of the elements, but any number of them can be used in combination inside a panel. None of these structured elements are required to be used—always aim for the simplest markup that achieves the semantic, accessible, and visually accurate results.
