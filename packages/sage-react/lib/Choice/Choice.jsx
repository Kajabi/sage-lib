import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SageTokens } from '../configs';
import { CHOICE_ICON_ALIGNMENTS, CHOICE_TYPES } from './configs';

export const Choice = ({
  className,
  icon,
  isActive,
  label,
  subtext,
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
    'sage-choice--radio',
    {
      [`${baseClass}--active`]: isActive,
      [`${baseClass}--${type}`]: type && !isIconType,
      [`${baseClass}--icon-${icon}`]: isIconType && icon,
      [`${baseClass}--vertical-align-icon-${verticalAlignIcon}`]: verticalAlignIcon && (isIconType || isRadioType),
    }
  );
  return (
    <div className={classNames} {...rest}>
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
    </div>
  );
};

Choice.CHOICE_TYPES = CHOICE_TYPES;
Choice.CHOICE_ICON_ALIGNMENTS = CHOICE_ICON_ALIGNMENTS;

Choice.defaultProps = {
  className: '',
  icon: null,
  isActive: false,
  subtext: null,
  type: null,
  verticalAlignIcon: CHOICE_ICON_ALIGNMENTS.DEFAULT,
};

Choice.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.oneOf(Object.values(SageTokens.ICONS)),
  isActive: PropTypes.bool,
  label: PropTypes.string.isRequired,
  subtext: PropTypes.string,
  type: PropTypes.oneOf(Object.values(Choice.CHOICE_TYPES)),
  verticalAlignIcon: PropTypes.oneOf(Object.values(Choice.CHOICE_ICON_ALIGNMENTS))
};
