import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SageTokens } from '../configs';
import { CHOICE_ICON_ALIGNMENTS, CHOICE_TYPES } from './configs';

export const Choice = ({
  alignCenter,
  className,
  customContentClass,
  disabled,
  graphic,
  icon,
  isActive,
  linkText,
  subtext,
  text,
  type,
  verticalAlignIcon,
  ...rest
}) => {
  const baseClass = 'sage-choice';
  const isIconType = type && type === CHOICE_TYPES.ICON;
  const isRadioType = type && type === CHOICE_TYPES.RADIO;

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

  const attrs = {
    'aria-selected': isActive,
    className: classNames,
    disabled,
    ...rest,
  };

  return (
    <div className={classNames} {...attrs}>
      {graphic && (
        <span className="sage-choice__graphic">
          <img src={graphic} alt="" />
        </span>
      )}
      <div className={`sage-choice__content ${customContentClass}`}>
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
      </div>
      {linkText && (
        <span className="sage-choice__link-text">
          {linkText}
        </span>
      )}
    </div>
  );
};

Choice.CHOICE_TYPES = CHOICE_TYPES;
Choice.CHOICE_ICON_ALIGNMENTS = CHOICE_ICON_ALIGNMENTS;

Choice.defaultProps = {
  alignCenter: false,
  className: '',
  customContentClass: '',
  disabled: false,
  graphic: null,
  icon: null,
  isActive: false,
  linkText: null,
  subtext: null,
  type: null,
  verticalAlignIcon: CHOICE_ICON_ALIGNMENTS.DEFAULT,
};

Choice.propTypes = {
  alignCenter: PropTypes.bool,
  className: PropTypes.string,
  customContentClass: PropTypes.string,
  disabled: PropTypes.bool,
  graphic: PropTypes.string,
  icon: PropTypes.oneOf(Object.values(SageTokens.ICONS)),
  isActive: PropTypes.bool,
  linkText: PropTypes.string,
  subtext: PropTypes.string,
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.values(Choice.CHOICE_TYPES)),
  verticalAlignIcon: PropTypes.oneOf(Object.values(Choice.CHOICE_ICON_ALIGNMENTS))
};
