import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Icon } from '../Icon';
import { AVATAR_COLORS } from './configs';

export const Avatar = ({
  badge,
  className,
  centered,
  color,
  image,
  initials,
  lazyLoadInitials,
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

  const setBadgeSize = () => {
    let badgeIconSize = 'xs';
    const avatarSizeAsInteger = size.replace(/[^0-9]/g, '');

    if (avatarSizeAsInteger >= 32 && avatarSizeAsInteger < 48) {
      badgeIconSize = Icon.SIZES.SM;
    } else if (avatarSizeAsInteger >= 48 && avatarSizeAsInteger < 64) {
      badgeIconSize = Icon.SIZES.MD;
    } else if (avatarSizeAsInteger >= 64 && avatarSizeAsInteger < 80) {
      badgeIconSize = Icon.SIZES.LG;
    } else if (avatarSizeAsInteger >= 80 && avatarSizeAsInteger < 96) {
      badgeIconSize = Icon.SIZES.XL;
    } else if (avatarSizeAsInteger >= 96 && avatarSizeAsInteger < 112) {
      badgeIconSize = Icon.SIZES.XXL;
    } else if (avatarSizeAsInteger >= 112 && avatarSizeAsInteger < 128) {
      badgeIconSize = Icon.SIZES.XXXL;
    } else if (avatarSizeAsInteger >= 128) {
      badgeIconSize = Icon.SIZES.XXXXL;
    }
    return badgeIconSize;
  };

  return (
    <div className={classNames} style={style} {...rest}>
      {badge && (
        <div className="sage-avatar__badge">
          <Icon
            icon={Icon.ICONS.CHECK_CIRCLE_FILLED}
            color={Icon.COLORS.PRIMARY_500}
            size={setBadgeSize()}
          />
        </div>
      )}
      {(!image.src && !initials) && (
        <svg className="sage-avatar__graphic" viewBox="0 0 28 28"><path fillRule="evenodd" clipRule="evenodd" d="M19.038 14.594a8.167 8.167 0 1 0-10.077 0C3.767 16.236 0 21.094 0 26.834a1.167 1.167 0 1 0 2.333 0c0-5.8 4.701-10.5 10.5-10.5h2.334c5.799 0 10.5 4.7 10.5 10.5a1.167 1.167 0 1 0 2.333 0c0-5.74-3.766-10.598-8.962-12.24ZM8.167 8.167a5.833 5.833 0 1 1 11.666 0 5.833 5.833 0 0 1-11.666 0Z" fill="#054FB8" /></svg>
      )}
      {image.src && (
        <img alt={image.alt || ''} className="sage-avatar__image" src={image.src} id={image.id} />
      )}
      {lazyLoadInitials && (
        <svg className="sage-avatar__initials" viewBox="0 0 32 32">
          <text x="16" y="20">{initials}</text>
        </svg>
      )}
    </div>
  );
};

Avatar.COLORS = AVATAR_COLORS;

Avatar.defaultProps = {
  badge: false,
  centered: false,
  className: '',
  color: AVATAR_COLORS.DEFAULT,
  image: {},
  initials: '',
  lazyLoadInitials: true,
  size: null,
};

Avatar.propTypes = {
  badge: PropTypes.bool,
  centered: PropTypes.bool,
  className: PropTypes.string,
  color: PropTypes.oneOf(Object.values(AVATAR_COLORS)),
  image: PropTypes.shape({
    alt: PropTypes.string,
    src: PropTypes.string,
    id: PropTypes.string
  }),
  initials: PropTypes.string,
  lazyLoadInitials: PropTypes.bool,
  size: PropTypes.string,
};
