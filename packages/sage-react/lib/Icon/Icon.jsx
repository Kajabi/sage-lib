import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SageTokens } from '../configs';
import { ICON_ADJACENT_TYPES, ICON_CARD_COLORS, ICON_SIZES } from './configs';

export const Icon = ({
  adjacentType,
  backgroundHeight,
  backgroundWidth,
  cardColor,
  circular,
  className,
  color,
  icon,
  label,
  size,
  kjbElementId,
  ...rest
}) => {
  const classNames = classnames(
    className,
    'sage-icon',
    {
      [`sage-icon-${icon}`]: icon && (!size || size === ICON_SIZES.MD),
      [`sage-icon-${icon}-${size}`]: icon && size,
      [`t-sage--color-${color}`]: color,
      [`sage-icon--adjacent-type-${adjacentType}`]: adjacentType,
    }
  );

  const wrapperClassNames = classnames(
    'sage-icon-background',
    {
      'sage-icon-background--custom-size': backgroundHeight || backgroundWidth,
      [`sage-icon-background--${cardColor}`]: cardColor,
      [`sage-icon-background--${size}`]: size,
      'sage-icon-background--circular': circular,
    },
  );

  const attributes = {};
  if (!label || label === '') {
    attributes['aria-hidden'] = true;
  } else {
    attributes['aria-label'] = label;
    attributes.role = 'img';
  }

  const sizeMapping = {
    [ICON_SIZES.XS]: '8px',
    [ICON_SIZES.SM]: '12px',
    [ICON_SIZES.MD]: '16px',
    [ICON_SIZES.LG]: '20px',
    [ICON_SIZES.XL]: '24px',
    [ICON_SIZES.XXL]: '28px',
    [ICON_SIZES.XXXL]: '32px',
    [ICON_SIZES.XXXXL]: '36px',
  };

  const renderIcon = () => (
    <pds-icon name={icon} class={`t-sage--color-${color} ${classNames}`} size={sizeMapping[size]} {...rest} />
  );

  const setBackgroundDimensions = () => {
    const props = {};

    backgroundHeight = backgroundHeight || backgroundWidth;
    backgroundWidth = backgroundWidth || backgroundHeight;

    if (circular) {
      backgroundWidth = backgroundHeight;
    }

    props['--sage-icon-background-height'] = backgroundHeight;
    props['--sage-icon-background-width'] = backgroundWidth;

    return props;
  };

  return cardColor ? (
    <div
      style={setBackgroundDimensions()}
      className={wrapperClassNames}
    >
      {renderIcon()}
    </div>
  ) : renderIcon();
};

Icon.ADJACENT_TYPES = ICON_ADJACENT_TYPES;
Icon.CARD_COLORS = ICON_CARD_COLORS;
Icon.COLORS = SageTokens.COLOR_SLIDERS;
Icon.ICONS = SageTokens.ICONS;
Icon.SIZES = ICON_SIZES;

Icon.defaultProps = {
  adjacentType: null,
  backgroundHeight: null,
  backgroundWidth: null,
  cardColor: null,
  circular: false,
  className: '',
  color: SageTokens.COLOR_SLIDERS.INHERIT,
  label: '',
  size: null,
  kjbElementId: null,
};

Icon.propTypes = {
  /**
   * Improves alignment for icons that are placed beside type.
   */
  adjacentType: PropTypes.oneOf(Object.values(Icon.ADJACENT_TYPES)),
  /**
   * Allows a custom height for the icon background.
   */
  backgroundHeight: PropTypes.string,
  /**
   * Allows a custom width for the icon background.
   */
  backgroundWidth: PropTypes.string,
  /**
   * Rather than just changing the icon color with the color property, this option
   * adds a padded background behind the icon in one of the brand status color options.
   */
  cardColor: PropTypes.oneOf(Object.values(Icon.CARD_COLORS)),
  /**
   * Optionally, when an icon has a background color, present the shape
   * inside a circle (as opposed to default square with rounded corners.
   */
  circular: PropTypes.bool,
  /**
   * Allows a custom class name to be added to the icon.
   */
  className: PropTypes.string,
  /**
   * Which color to use to render the icon.
   */
  color: PropTypes.oneOf(Object.values(Icon.COLORS)),
  /**
   * Which icon to display.
   */
  icon: PropTypes.oneOf(Object.values(Icon.ICONS)).isRequired,
  /**
   * An optional accessible label to use for the icon.
   */
  label: PropTypes.string,
  /**
   * Adjusts the size of the icon.
   */
  size: PropTypes.oneOf(Object.values(Icon.SIZES)),
  /**
   * Specifies the value of the data-kjb-element attribute for test automation
   */
  kjbElementId: PropTypes.string,
};
