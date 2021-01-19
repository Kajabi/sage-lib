import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { AVATAR_COLORS } from './configs';

export const Avatar = ({
  className,
  color,
  initials,
  ...rest
}) => {
  const classNames = classnames(
    'sage-avatar',
    className,
    {
      [`sage-avatar--${color}`]: color
    }
  );

  return (
    <div className={classNames} {...rest}>
      <svg className="sage-avatar__initials" viewBox="0 0 32 32">
        <text x="16" y="20">{initials}</text>
      </svg>
    </div>
  );
};

Avatar.COLORS = AVATAR_COLORS;

Avatar.defaultProps = {
  className: '',
  color: AVATAR_COLORS.SAGE,
  initials: ''
};

Avatar.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(Object.values(AVATAR_COLORS)),
  initials: PropTypes.string
};
