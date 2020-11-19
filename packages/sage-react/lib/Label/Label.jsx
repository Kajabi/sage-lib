import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SageTokens } from '../configs';
import { LABEL_TYPES, LABEL_COLORS } from './configs';

const Label = ({
  children,
  className,
  color,
  isInteractive,
  iconLeft,
  iconRight,
  type,
  ...rest
}) => {
  const TagName = isInteractive ? 'button' : 'span';
  const classNames = classnames(
    'sage-label',
    className,
    {
      [`sage-label--${color}`]: color,
      [`sage-label--icon-left-${iconLeft}`]: iconLeft,
      [`sage-label--icon-right-${iconRight}`]: iconRight,
      [`sage-label--${type}`]: type,
      'sage-label--interactive': isInteractive,
    }
  );

  return (
    <TagName
      className={classNames}
      {...rest}
    >
      {children}
    </TagName>
  );
};

Label.COLORS = LABEL_COLORS;
Label.TYPES = LABEL_TYPES;

Label.defaultProps = {
  children: null,
  className: null,
  isInteractive: false,
  color: LABEL_COLORS.DRAFT,
  iconLeft: null,
  iconRight: null,
  type: LABEL_TYPES.DEFAULT,
};

Label.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isInteractive: PropTypes.bool,
  color: PropTypes.oneOf(Object.values(LABEL_COLORS)),
  iconLeft: PropTypes.oneOf(Object.values(SageTokens.ICONS)),
  iconRight: PropTypes.oneOf(Object.values(SageTokens.ICONS)),
  type: PropTypes.oneOf(Object.values(LABEL_TYPES)),
};

export default Label;
