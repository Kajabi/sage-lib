import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SageClassnames } from '../configs';
import { ICON_ALIGNMENTS, TYPES } from './configs';

export const Choice = ({
  alignCenter,
  children,
  className,
  customContentClassName,
  disabled,
  graphic,
  icon,
  isActive,
  linkText,
  radioConfigs,
  subtext,
  target,
  text,
  type,
  verticalAlignIcon,
  ...rest
}) => {
  const baseClass = 'sage-choice';
  const isIconType = type && type === TYPES.ICON;
  const isRadioType = type && type === TYPES.RADIO;
  const isArrowType = type && type === TYPES.ARROW;

  const classNames = classnames(
    baseClass,
    className,
    {
      [`${baseClass}--active`]: isActive,
      [`${baseClass}--align-center`]: isIconType && alignCenter,
      [`${baseClass}--${type}`]: type && !isIconType,
      [`${baseClass}--icon-${icon}`]: isIconType && icon,
      [`${baseClass}--vertical-align-icon-${verticalAlignIcon}`]: verticalAlignIcon && (isIconType || isRadioType),
    }
  );

  const contentClassNames = classnames(
    `${baseClass}__content`,
    {
      [`${baseClass}__content--custom`]: children,
      [`${customContentClassName}`]: customContentClassName,
    }
  );

  const hasRadioConfigs = !!radioConfigs;
  const isLabel = hasRadioConfigs;
  const isLink = ('href' in rest);
  const isButton = !isLink && !isLabel;
  let TagName = children ? 'div' : 'button';
  if (isLabel) TagName = 'label';
  if (isLink) TagName = 'a';

  const attrs = {
    'aria-controls': target,
    'aria-disabled': TagName === 'div' ? disabled : null,
    'aria-selected': isActive,
    className: classNames,
    'data-js-tabs-target': target,
    disabled: TagName !== 'div' && disabled,
    tabIndex: TagName === 'div' ? '0' : null,
    role: 'tab',
    ...(hasRadioConfigs && { htmlFor: radioConfigs.id }),
    ...(isButton && { type: 'button' }),
    ...rest,
  };

  return (
    <TagName className={classNames} {...attrs}>
      {hasRadioConfigs && (
        <div className="sage-choice__radio visually-hidden">
          <input
            {...radioConfigs}
            checked={isActive}
            type="radio"
          />
        </div>
      )}
      {graphic && (
        <span className="sage-choice__graphic">
          <img src={graphic} alt="" />
        </span>
      )}
      {(isIconType || isArrowType) && (
        <pds-icon
          name={isArrowType ? 'caret-right' : icon}
          class={!isArrowType ? SageClassnames.SPACERS.XS_RIGHT : ''}
        />
      )}
      <div className={contentClassNames}>
        {text && (
          <em className="sage-choice__text">
            {text}
          </em>
        )}
        {subtext && (
          <span className="sage-choice__subtext">
            {subtext}
          </span>
        )}
        {children}
      </div>
      {linkText && (
        <span className="sage-choice__link-text">
          {linkText}
        </span>
      )}
    </TagName>
  );
};

Choice.TYPES = TYPES;
Choice.ICON_ALIGNMENTS = ICON_ALIGNMENTS;

Choice.defaultProps = {
  alignCenter: false,
  children: null,
  className: '',
  customContentClassName: '',
  disabled: false,
  graphic: null,
  icon: null,
  isActive: false,
  linkText: null,
  radioConfigs: null,
  subtext: null,
  target: null,
  text: null,
  type: null,
  verticalAlignIcon: ICON_ALIGNMENTS.DEFAULT,
};

Choice.propTypes = {
  alignCenter: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  customContentClassName: PropTypes.string,
  disabled: PropTypes.bool,
  graphic: PropTypes.string,
  icon: PropTypes.string,
  isActive: PropTypes.bool,
  linkText: PropTypes.string,
  radioConfigs: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
  }),
  subtext: PropTypes.string,
  target: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.oneOf(Object.values(Choice.TYPES)),
  verticalAlignIcon: PropTypes.oneOf(Object.values(Choice.ICON_ALIGNMENTS))
};
