import PropTypes from 'prop-types';

export const CONTAINER_SIZES = {
  TINY: 'tiny',
  XS: 'xs',
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
  XL: 'xl',
  FULL: 'full',
};

export const GRID_BREAKPOINT_TOGGLES = {
  SHOW: 'show',
  HIDE: 'hide',
};

export const validNumberWithinGrid = (props, propName, componentName) => {
  componentName = componentName || 'ANONYMOUS';

  if (props[propName]) {
    const value = props[propName];
    if (typeof value === 'number') {
      return (value >= 1 && value <= 12) ? null : new Error(`${propName} in ${componentName} is not within 1 to 12`);
    }
  }

  return null;
};

export const validBreakpoint = PropTypes.oneOf([
  PropTypes.oneOf(Object.values(GRID_BREAKPOINT_TOGGLES)),
  validNumberWithinGrid,
]);
