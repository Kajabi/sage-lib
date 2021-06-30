import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { AVATAR_COLORS } from './configs';

export const Avatar = ({
  className,
  centered,
  color,
  img,
  initials,
  size,
  ...rest
}) => {
  const classNames = classnames(
    'sage-avatar',
    className,
    {
      'sage-avatar--centered': centered,
      [`sage-avatar--${color}`]: color,
    }
  );

  const style = {};

  if (img) {
    style.backgroundImage = `url('${img}')`;
    style.backgroundSize = 'cover';
  }

  if (size) {
    style.width = size;
    style.height = size;
  }

  return (
    <div className={classNames} style={style} {...rest}>
      {img ?
        (
          <img alt={initials} className="sage-avatar__image" src={img}/>
        ) :
        (
          <svg className="sage-avatar__initials" viewBox="0 0 32 32">
            <text x="16" y="20">{initials}</text>
          </svg>
        )}
    </div>
  );
};

Avatar.COLORS = AVATAR_COLORS;

Avatar.defaultProps = {
  centered: false,
  className: '',
  color: AVATAR_COLORS.DEFAULT,
  img: '',
  initials: '',
  size: null,
};

Avatar.propTypes = {
  centered: PropTypes.bool,
  className: PropTypes.string,
  color: PropTypes.oneOf(Object.values(AVATAR_COLORS)),
  img: PropTypes.string,
  initials: PropTypes.string,
  size: PropTypes.string,
};
