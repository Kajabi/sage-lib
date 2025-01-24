import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from '../Link';
import { Loader } from '../Loader';
import { SageTokens, SageClassnames } from '../configs';
import { ButtonGroup } from './ButtonGroup';
import {
  BUTTON_COLORS,
  BUTTON_ICON_POSITIONS,
  BUTTON_DEFAULT_LOADING_TEXT,
} from './configs';

export const Button = React.forwardRef(({
  alignEnd,
  children,
  className,
  customContentClassName,
  color,
  disabled,
  disclosure,
  fullWidth,
  hasCustomContent,
  icon,
  iconOnly,
  iconPosition,
  linkTag,
  loading,
  onClick,
  selected,
  small,
  subtle,
  kjbElementId,
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
      [`${blockName}--disclosure`]: disclosure,
      [`${blockName}--selected`]: selected,
      [`${blockName}--small`]: small,
      [`${blockName}--subtle`]: subtle,
      [`${blockName}--is-loading`]: loading,
      [`${blockName}--icon-${iconPosition}-${icon}`]: icon && !iconOnly,
      [`${blockName}--icon-only-${icon}`]: icon && iconOnly,
      disabled: isLink && disabled,
    }
  );

  const setIconClassName = (iconOnly, iconPosition) => {
    if (iconOnly) {
      return '';
    }
    return iconPosition === 'right' ? SageClassnames.SPACERS.XS_LEFT : SageClassnames.SPACERS.XS_RIGHT;
  };

  if (loading) {
    rest['aria-busy'] = true;
    rest['aria-label'] = rest['aria-label'] || BUTTON_DEFAULT_LOADING_TEXT;
    rest['aria-live'] = 'polite';
  }

  let generatedClassNames = 'sage-btn__truncate-text';
  if (iconOnly) {
    generatedClassNames = 'visually-hidden';
  }
  if (hasCustomContent) {
    generatedClassNames = classnames('sage-btn__custom-content', customContentClassName);
  }

  if (isLink) { rest.suppressDefaultClass = true; }

  return (
    <TagName
      ref={ref}
      className={classNames}
      aria-disabled={isLink && disabled}
      data-kjb-element={kjbElementId}
      disabled={!isLink && disabled}
      tag={isLink ? linkTag : null}
      kjbElementId={kjbElementId}
      {...(isLink ? { suppressDefaultClass: isLink } : {})}
      onClick={onClick}
      {...rest}
    >
      {icon && (
        <pds-icon
          name={icon}
          class={setIconClassName(iconOnly, iconPosition)}
        />
      )}
      <span className={generatedClassNames}>
        {children}
      </span>
      {disclosure && (
        <pds-icon
          name="caret-down"
          class={SageClassnames.SPACERS.XS_LEFT}
        />
      )}
      {!hasCustomContent && (
        <Loader
          loading={loading}
          type={Loader.TYPES.SPINNER_IN_BUTTON}
          label={null}
        />
      )}

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
  disclosure: false,
  fullWidth: false,
  hasCustomContent: false,
  icon: null,
  iconOnly: false,
  iconPosition: Button.ICON_POSITIONS.LEFT,
  linkTag: null,
  loading: false,
  onClick: null,
  selected: false,
  small: false,
  subtle: false,
  kjbElementId: null,
  type: 'button',
};

Button.propTypes = {
  alignEnd: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(Object.values(Button.COLORS)),
  customContentClassName: PropTypes.string,
  disabled: PropTypes.bool,
  disclosure: PropTypes.bool,
  fullWidth: PropTypes.bool,
  hasCustomContent: PropTypes.bool,
  icon: PropTypes.oneOf(Object.values(SageTokens.ICONS)),
  iconOnly: PropTypes.bool,
  iconPosition: PropTypes.oneOf(Object.values(Button.ICON_POSITIONS)),
  linkTag: Link.tagPropTypes,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  small: PropTypes.bool,
  subtle: PropTypes.bool,
  kjbElementId: PropTypes.string,
  type: PropTypes.string,
};
