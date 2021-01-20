import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from '../Link';
import { SageTokens } from '../configs';
import { TAB_STYLES, CHOICE_TYPES } from './configs';

export const TabsItem = ({
  alignCenter,
  className,
  disabled,
  graphic,
  label,
  icon,
  isActive,
  itemStyle,
  linkText,
  onClick,
  panelId,
  subtext,
  type,
  ...rest
}) => {
  const { to, href } = rest;
  const isLink = to || href;
  const TagName = isLink ? Link : 'button';
  const itemStyleProtected = itemStyle === TAB_STYLES.PROGRESSBAR ? TAB_STYLES.TAB : itemStyle;
  const isChoice = itemStyle === TAB_STYLES.CHOICE;
  const isIconType = type && type === CHOICE_TYPES.ICON;
  const baseClass = `sage-${itemStyleProtected}`;
  const classNames = classnames(
    className,
    {
      [baseClass]: itemStyleProtected,
      [`${baseClass}--active`]: isActive,
      [`${baseClass}--align-center`]: isIconType && alignCenter,
      [`${baseClass}--${type}`]: type && !isIconType,
      [`${baseClass}--icon-${icon}`]: isIconType && icon,
    }
  );

  let attrs = {
    'aria-controls': panelId,
    'aria-selected': isActive,
    className: classNames,
    role: 'tab',
    ...rest,
  };

  if (isLink) {
    attrs = {
      ...attrs,
      'aria-disabled': disabled,
    };
  } else {
    attrs = {
      ...attrs,
      disabled,
      onClick: () => onClick(panelId),
      type: 'button',
    };
  }

  return (
    <TagName {...attrs}>
      {isChoice ? (
        <>
          {graphic && (
            <span className="sage-choice__graphic">
              {graphic}
            </span>
          )}
          <span className="sage-choice__content">
            <em className="sage-choice__text">
              {label}
            </em>
            {subtext && (
              <span className="sage-choice__subtext">
                {subtext}
              </span>
            )}
          </span>
          {linkText && (
            <span className="sage-choice__link-text">
              {linkText}
            </span>
          )}
        </>
      ) : label}
    </TagName>
  );
};

TabsItem.CHOICE_TYPES = CHOICE_TYPES;

TabsItem.defaultProps = {
  alignCenter: false,
  className: null,
  disabled: false,
  graphic: null,
  icon: null,
  isActive: false,
  itemStyle: 'tab',
  linkText: null,
  onClick: (id) => id,
  subtext: null,
  type: null,
};

TabsItem.propTypes = {
  alignCenter: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  graphic: PropTypes.node,
  icon: PropTypes.oneOf(Object.values(SageTokens.ICONS)),
  isActive: PropTypes.bool,
  itemStyle: PropTypes.oneOf(Object.values(TAB_STYLES)),
  label: PropTypes.string.isRequired,
  linkText: PropTypes.string,
  onClick: PropTypes.func,
  panelId: PropTypes.string.isRequired,
  subtext: PropTypes.string,
  type: PropTypes.oneOf(Object.values(CHOICE_TYPES)),
};
