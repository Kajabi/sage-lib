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
            color={Icon.COLORS.PRIMARY_300}
            size={setBadgeSize()}
          />
        </div>
      )}
      {image.src && (
        <img alt={image.alt || ''} className="sage-avatar__image" src={image.src} />
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
    src: PropTypes.string
  }),
  initials: PropTypes.string,
  lazyLoadInitials: PropTypes.bool,
  size: PropTypes.string,
};
