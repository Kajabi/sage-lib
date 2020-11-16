The Type component is a container that can be implemented in order to enforce spacing for larger blocks of rich text according to the [Sage Type Spec](https://sage-design-system.kajabi.com/pages/style/typography) rules.

The Sage component library also provides a dictionary for the Sage Type Spec classes. Simply:

```
import { SageClassnames } from 'common/components/Sage';
```

And then use one of more these classes as the `className` for an element such as `SageClassnames.TYPE.HEADING_3`. 

Note that no spec classes are necessary for type inside the `Type` container unless the desired style is to differ from the default for the appropriate semantic tag. <strong>Always prefer the semantic tag and apply a class to alter its appearance if needed.</strong>

Color variations are also available through the `SageClassnames.TYPE_COLORS` dictionary. See the [Sage Color System](https://sage-design-system.kajabi.com/pages/style/color) for reference. These should be used sparingly.
