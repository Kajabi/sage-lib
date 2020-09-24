import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../Icon';
import configs from './configs';
import { htmlAttributePropTypes, hyperlinkAttributePropTypes } from '../configs';

const Button = ({
  alignEnd,
  children,
  className,
  color,
  htmlAttributes,
  hyperlinkAttributes,
  icon,
  iconOnly,
  iconPosition,
  onClick,
  size,
  type,
}) => {
  const blockName = 'sage-btn';
  const classNames = classnames(
    blockName,
    className,
    {
      [`${blockName}--align-end`]: alignEnd,
      [`${blockName}--${color}`]: color,
      [`${blockName}--${size}`]: size,
      [`${blockName}--icon-${iconPosition}-${icon}`]: icon && !iconOnly,
      [`${blockName}--icon-only-${icon}`]: icon && iconOnly,
    }
  );

  const TagName = hyperlinkAttributes ? 'a' : 'button';

  let otherProps = {
    onClick,
    ...htmlAttributes,
  };

  if (hyperlinkAttributes) {
    otherProps = Object.assign(otherProps, hyperlinkAttributes);
  } else {
    otherProps = Object.assign(otherProps, { type });
  }

  return (
    <TagName className={classNames} {...otherProps}>
      {iconOnly ? (
        <span className="visually-hidden">
          {children}
        </span>
      ) : (
        <>
          {children}
        </>
      )}
    </TagName>
  );
};

Button.configs = configs;

Button.defaultProps = {
  alignEnd: false,
  className: '',
  color: 'primary',
  htmlAttributes: null,
  hyperlinkAttributes: null,
  icon: null,
  iconOnly: false,
  iconPosition: 'left',
  onClick: null,
  size: null,
  type: 'button',
};

Button.propTypes = {
  alignEnd: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf(Object.values(configs.COLORS)),
  hyperlinkAttributes: PropTypes.shape(hyperlinkAttributePropTypes),
  htmlAttributes: PropTypes.shape(htmlAttributePropTypes),
  icon: PropTypes.oneOf(Object.values(Icon.ICONS)),
  iconOnly: PropTypes.bool,
  iconPosition: PropTypes.oneOf(Object.values(configs.ICON_POSITIONS)),
  onClick: PropTypes.func,
  size: PropTypes.oneOf(Object.values(configs.SIZES)),
  type: PropTypes.string,
};

export default Button;
