import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SageTokens } from '../configs';
import { ICON_CARD_COLORS, ICON_SIZES } from './configs';

export const Icon = ({
  cardColor,
  circular,
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

  const wrapperClassNames = classnames(
    'sage-icon-background',
    {
      [`sage-icon-background--${cardColor}`]: cardColor,
      [`sage-icon-background--#{component.size}`]: size.present,
      'sage-icon-background--circular': circular,
    },
  );

  const attributes = {};
  if (!label || label === '') {
    attributes['aria-hidden'] = true;
  } else {
    attributes['aria-label'] = label;
  }

  const renderIcon = () => (
    <i className={classNames} {...attributes} {...rest} />
  );

  return cardColor ? (
    <div className={wrapperClassNames}>
      {renderIcon()}
    </div>
  ) : renderIcon();
};

Icon.CARD_COLORS = ICON_CARD_COLORS;
Icon.COLORS = SageTokens.COLOR_SLIDERS;
Icon.ICONS = SageTokens.ICONS;
Icon.SIZES = ICON_SIZES;

Icon.defaultProps = {
  cardColor: null,
  circular: false,
  className: '',
  color: SageTokens.COLOR_SLIDERS.INHERIT,
  label: '',
  size: null,
};

Icon.propTypes = {
  cardColor: PropTypes.oneOf(Object.values(Icon.CARD_COLORS)),
  circular: PropTypes.bool,
  className: PropTypes.string,
  color: PropTypes.oneOf(Object.values(Icon.COLORS)),
  icon: PropTypes.oneOf(Object.values(Icon.ICONS)).isRequired,
  label: PropTypes.string,
  size: PropTypes.oneOf(Object.values(Icon.SIZES)),
};
