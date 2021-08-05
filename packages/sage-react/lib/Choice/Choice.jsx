import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SageTokens } from '../configs';
import { ICON_ALIGNMENTS, TYPES } from './configs';

export const Choice = ({
  alignCenter,
  attributes,
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
  const isIconType = type && type === TYPES.ICON;
  const isRadioType = type && type === TYPES.RADIO;

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
    <div className={classNames} {...attrs} {...attributes}>
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

Choice.TYPES = TYPES;
Choice.ICON_ALIGNMENTS = ICON_ALIGNMENTS;

Choice.defaultProps = {
  alignCenter: false,
  attributes: null,
  className: '',
  customContentClass: '',
  disabled: false,
  graphic: null,
  icon: null,
  isActive: false,
  linkText: null,
  subtext: null,
  type: null,
  verticalAlignIcon: ICON_ALIGNMENTS.DEFAULT,
};

Choice.propTypes = {
  alignCenter: PropTypes.bool,
  attributes: PropTypes.shape({}),
  className: PropTypes.string,
  customContentClass: PropTypes.string,
  disabled: PropTypes.bool,
  graphic: PropTypes.string,
  icon: PropTypes.oneOf(Object.values(SageTokens.ICONS)),
  isActive: PropTypes.bool,
  linkText: PropTypes.string,
  subtext: PropTypes.string,
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.values(Choice.TYPES)),
  verticalAlignIcon: PropTypes.oneOf(Object.values(Choice.ICON_ALIGNMENTS))
};
