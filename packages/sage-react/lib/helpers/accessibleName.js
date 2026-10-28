// pds-icon hides an icon that has no label of its own, so an icon-only
// control can't take its name from the icon. The caller names the control.
export const hasAriaName = (props) => !!(props['aria-label'] || props['aria-labelledby']);

// PropTypes check for icon-only controls: `isIconOnly(props)` says whether the
// control would render an icon and nothing else that names it.
export const iconOnlyNamePropType = (isIconOnly) => (props, _propName, componentName) => {
  if (!isIconOnly(props) || hasAriaName(props)) return null;
  return new Error(
    `${componentName}: an icon-only ${componentName} needs \`aria-label\` or \`aria-labelledby\`. `
    + 'Its icon does not name it.'
  );
};
