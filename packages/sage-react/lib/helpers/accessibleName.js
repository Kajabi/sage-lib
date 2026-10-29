import PropTypes from 'prop-types';

// pds-icon hides an icon that has no label of its own, so an icon-only
// control can't take its name from the icon. The caller names the control.
//
// Two ways to name one:
// - Visually hidden text, where the component renders it: Button's `iconOnly`
//   children, HelpLink's children.
// - `aria-label` or `aria-labelledby` on the control, for components with no
//   text slot to hide: Link, NavLink, Tab and Choice.

const isNonBlank = (value) => typeof value === 'string' && value.trim() !== '';

// Choice's radio configs: the real accessible-name source is the hidden native input
// (radioConfigs is spread directly onto it), not the outer label/wrapper's own aria-label.
export const hasAriaName = (props) => {
  const source = props.radioConfigs || props;
  return isNonBlank(source['aria-label']) || isNonBlank(source['aria-labelledby']);
};

// PropTypes check for icon-only controls: `isIconOnly(props)` says whether the
// control would render an icon and nothing else that names it. It also keeps
// the string check for `aria-label`, which it owns.
export const iconOnlyNamePropType = (isIconOnly) => (props, propName, componentName, ...rest) => {
  const typeError = PropTypes.string(props, propName, componentName, ...rest);
  if (typeError) return typeError;
  if (!isIconOnly(props) || hasAriaName(props)) return null;
  return new Error(
    `${componentName}: an icon-only ${componentName} needs \`aria-label\` or \`aria-labelledby\`. `
    + 'Its icon does not name it.'
  );
};
