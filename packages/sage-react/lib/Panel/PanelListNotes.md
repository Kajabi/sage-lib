Panel Lists provide a more visually nuanced presentation for a set of commonly-structure items. Note the following:

- List items can be provided through the `items` prop or a set of elements can be passed directly as `children`.
- When `items` are provided you can also have them automatically wrapped as `Panel.ListItem` elements by passing `wrapItems={true}`. You do not need this if the items have their own wrapping elements such as if they are a custom component or specific kind of list item.
- Also when `items` are provided, a Sage Grid Template can be provided for the set of items using `itemGridTemplate` and the `SageTokens.GRID_TEMPLATES` dictionary.
- `blockSpacing` can be provided a value to affect the blocked (top and bottom) spacing for items in the list.
- Finally, items can be provided a consistent `itemClassName` for additional organization or consistent styling.
