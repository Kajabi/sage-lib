import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from '../Link';
import { SageTokens } from '../configs';
import { TAB_STYLES, CHOICE_TYPES, CHOICE_ICON_ALIGNMENTS } from './configs';

export const TabsItem = ({
  alignCenter,
  children,
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
  verticalAlignIcon,
  ...rest
}) => {
  const { to, href } = rest;
  const isLink = to || href;
  let TagName = children
    ? 'div'
    : 'button';
  TagName = isLink
    ? Link
    : TagName;
  const itemStyleProtected = itemStyle === TAB_STYLES.PROGRESSBAR ? TAB_STYLES.TAB : itemStyle;
  const isChoice = itemStyle === TAB_STYLES.CHOICE;
  const isIconType = type && type === CHOICE_TYPES.ICON;
  const isRadioType = type && type === CHOICE_TYPES.RADIO;
  const baseClass = `sage-${itemStyleProtected}`;

  const classNames = classnames(
    className,
    {
      [baseClass]: itemStyleProtected,
      [`${baseClass}--active`]: isActive,
      [`${baseClass}--align-center`]: isIconType && alignCenter,
      [`${baseClass}--${type}`]: type && !isIconType,
      [`${baseClass}--icon-${icon}`]: isIconType && icon,
      [`${baseClass}--vertical-align-icon-${verticalAlignIcon}`]: isChoice && verticalAlignIcon && (isIconType || isRadioType),
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
    };

    if (!children) {
      attrs.type = 'button';
    }
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
          <span className={`sage-choice__content ${children && 'sage-choice__content--custom'}`}>
            {label && (
              <em className="sage-choice__text">
                {label}
              </em>
            )}
            {subtext && (
              <span className="sage-choice__subtext">
                {subtext}
              </span>
            )}
            {children}
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

TabsItem.STYLES = TAB_STYLES;
TabsItem.CHOICE_TYPES = CHOICE_TYPES;
TabsItem.ICON_ALIGNMENTS = CHOICE_ICON_ALIGNMENTS;

TabsItem.defaultProps = {
  alignCenter: false,
  children: null,
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
  verticalAlignIcon: CHOICE_ICON_ALIGNMENTS.DEFAULT,
};

TabsItem.propTypes = {
  alignCenter: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  graphic: PropTypes.node,
  icon: PropTypes.oneOf(Object.values(SageTokens.ICONS)),
  isActive: PropTypes.bool,
  itemStyle: PropTypes.oneOf(Object.values(TabsItem.STYLES)),
  label: PropTypes.string.isRequired,
  linkText: PropTypes.string,
  onClick: PropTypes.func,
  panelId: PropTypes.string.isRequired,
  subtext: PropTypes.string,
  type: PropTypes.oneOf(Object.values(TabsItem.CHOICE_TYPES)),
  verticalAlignIcon: PropTypes.oneOf(Object.values(TabsItem.ICON_ALIGNMENTS))
};
