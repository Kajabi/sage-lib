import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SageTokens } from '../configs';
import { CHOICE_TYPES } from './config';

export const Choice = ({
  className,
  icon,
  isActive,
  type,
  ...rest
}) => {
  const baseClass = 'sage-choice';
  const isIconType = type && type === CHOICE_TYPES.ICON;
  // const isRadioType = type && type === CHOICE_TYPES.RADIO;

  const classNames = classnames(
    baseClass,
    className,
    'sage-choice--radio',
    {
      [`${baseClass}--active`]: isActive,
      [`${baseClass}--${type}`]: type && !isIconType,
      [`${baseClass}--icon-${icon}`]: isIconType && icon,
    }
  );
  return (
    <div className={classNames} {...rest}>
      <h1>Choice!</h1>
    </div>
  );
};

Choice.CHOICE_TYPES = CHOICE_TYPES;

Choice.defaultProps = {
  className: '',
  icon: null,
  isActive: false,
  type: null,
};

Choice.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.oneOf(Object.values(SageTokens.ICONS)),
  isActive: PropTypes.bool,
  type: PropTypes.oneOf(Object.values(Choice.CHOICE_TYPES)),
};
