import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from '../Link';
import { SageTokens } from '../configs';
import { ButtonGroup } from './ButtonGroup';
import { BUTTON_COLORS, BUTTON_ICON_POSITIONS } from './configs';

export const Button = React.forwardRef(({
  alignEnd,
  children,
  className,
  customContentClassName,
  color,
  disabled,
  fullWidth,
  hasCustomContent,
  icon,
  iconOnly,
  iconPosition,
  linkTag,
  small,
  subtle,
  ...rest
}, ref) => {
  const { to, href } = rest;
  const isLink = to || href;
  const TagName = isLink ? Link : 'button';
  const blockName = 'sage-btn';
  const classNames = classnames(
    blockName,
    className,
    {
      [`${blockName}--align-end`]: alignEnd,
      [`${blockName}--${color}`]: color,
      [`${blockName}--full-width`]: fullWidth,
      [`${blockName}--small`]: small,
      [`${blockName}--subtle`]: subtle,
      [`${blockName}--icon-${iconPosition}-${icon}`]: icon && !iconOnly,
      [`${blockName}--icon-only-${icon}`]: icon && iconOnly,
      disabled: isLink && disabled,
    }
  );

  const renderContent = () => {
    if (iconOnly) {
      return (
        <span className="visually-hidden">
          {children}
        </span>
      );
    }

    if (hasCustomContent) {
      return (
        <span
          className={classnames(
            'sage-btn__custom-content',
            customContentClassName,
          )}
        >
          {children}
        </span>
      );
    }

    return (
      <span className="sage-btn__truncate-text">
        {children}
      </span>
    );
  };

  return (
    <TagName
      ref={ref}
      className={classNames}
      aria-disabled={isLink && disabled}
      disabled={!isLink && disabled}
      tag={isLink ? linkTag : null}
      suppressDefaultClass={isLink}
      {...rest}
    >
      {renderContent()}
    </TagName>
  );
});

Button.Group = ButtonGroup;
Button.COLORS = BUTTON_COLORS;
Button.ICON_POSITIONS = BUTTON_ICON_POSITIONS;

Button.defaultProps = {
  alignEnd: false,
  children: null,
  className: '',
  customContentClassName: null,
  color: Button.COLORS.PRIMARY,
  disabled: false,
  fullWidth: false,
  hasCustomContent: false,
  icon: null,
  iconOnly: false,
  iconPosition: Button.ICON_POSITIONS.LEFT,
  linkTag: null,
  onClick: null,
  small: false,
  subtle: false,
  type: 'button',
};

Button.propTypes = {
  alignEnd: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(Object.values(Button.COLORS)),
  customContentClassName: PropTypes.string,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  hasCustomContent: PropTypes.bool,
  icon: PropTypes.oneOf(Object.values(SageTokens.ICONS)),
  iconOnly: PropTypes.bool,
  iconPosition: PropTypes.oneOf(Object.values(Button.ICON_POSITIONS)),
  linkTag: Link.tagPropTypes,
  onClick: PropTypes.func,
  small: PropTypes.bool,
  subtle: PropTypes.bool,
  type: PropTypes.string,
};
