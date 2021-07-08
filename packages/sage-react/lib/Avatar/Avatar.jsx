import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { AVATAR_COLORS } from './configs';

export const Avatar = ({
  className,
  centered,
  color,
  image,
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

  if (size) {
    style.width = size;
    style.height = size;
  }

  return (
    <div className={classNames} style={style} {...rest}>
      {image.alt && image.alt !== null && image.src && image.src !== null
        ? (
          <img alt={image.alt} className="sage-avatar__image" src={image.src} />
        )
        : (
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
  image: {},
  initials: null,
  size: null,
};

Avatar.propTypes = {
  centered: PropTypes.bool,
  className: PropTypes.string,
  color: PropTypes.oneOf(Object.values(AVATAR_COLORS)),
  image: PropTypes.shape({
    alt: PropTypes.string,
    src: PropTypes.string
  }),
  initials: PropTypes.string,
  size: PropTypes.string,
};
