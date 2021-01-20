import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SageTokens } from '../configs';
import { ICON_SIZES } from './configs';

export const Icon = ({
  className,
  color,
  icon,
  label,
  size,
  ...rest
}) => {
  const classNames = classnames(
    className,
    {
      [`sage-icon-${icon}`]: icon && (!size || size === ICON_SIZES.MD),
      [`sage-icon-${icon}-${size}`]: icon && size,
      [`t-sage--color-${color}`]: color,
    }
  );

  const attributes = {};
  if (!label || label === '') {
    attributes['aria-hidden'] = true;
  } else {
    attributes['aria-label'] = label;
  }

  return (
    <i className={classNames} {...attributes} {...rest} />
  );
};

Icon.COLORS = SageTokens.COLOR_SLIDERS;
Icon.ICONS = SageTokens.ICONS;
Icon.SIZES = ICON_SIZES;

Icon.defaultProps = {
  className: '',
  color: SageTokens.COLOR_SLIDERS.INHERIT,
  label: '',
  size: null,
};

Icon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(Object.values(SageTokens.COLOR_SLIDERS)),
  icon: PropTypes.oneOf(Object.values(SageTokens.ICONS)).isRequired,
  label: PropTypes.string,
  size: PropTypes.oneOf(Object.values(ICON_SIZES)),
};
