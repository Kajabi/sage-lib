import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { ICONS, ICON_SIZES } from './constants';

const Icon = ({ className, icon, label, size }) => {
  const classNames = classnames(
    className,
    {
      [`sage-icon-${icon}`]: icon && (!size || size === ICON_SIZES.MD),
      [`sage-icon-${icon}-${size}`]: icon && size,
    }
  );

  const attributes = {};
  if (label === '') {
    attributes['aria-hidden'] = true;
  } else {
    attributes['aria-label'] = label;
  }

  return (
    <i className={classNames} {...attributes} />
  );
};

Icon.ICONS = ICONS;
Icon.SIZES = ICON_SIZES;

Icon.defaultProps = {
  className: '',
  label: '',
  size: null,
};

Icon.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.oneOf(Object.values(ICONS)).isRequired,
  label: PropTypes.string,
  size: PropTypes.oneOf(Object.values(ICON_SIZES)),
};

export default Icon;
