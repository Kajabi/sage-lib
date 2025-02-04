import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { PdsIcon } from '@pine-ds/react';
import { SageTokens } from '../configs';
import { Icon } from '../Icon';
import { AVATAR_COLORS } from './configs';

export const Avatar = ({
  badge,
  badgeBackgroundColor,
  badgeForegroundColor,
  badgeIcon,
  className,
  centered,
  color,
  image,
  useFallbackGraphic,
  size,
  ...rest
}) => {
  const classNames = classnames(
    'sage-avatar',
    className,
    {
      'sage-avatar--centered': centered,
      'sage-avatar--custom-badge': badgeBackgroundColor || badgeIcon || badgeForegroundColor,
      [`sage-avatar--${color}`]: color,
    }
  );

  const badgeClassnames = classnames(
    'sage-avatar__badge',
    {
      'sage-avatar__badge--custom-bg': badgeBackgroundColor
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
        <div
          className={badgeClassnames}
          style={{ '--badge-custom-bg-color': badgeBackgroundColor || '' }}
        >
          <Icon
            icon={badgeIcon || Icon.ICONS.CHECK_CIRCLE_FILLED}
            color={badgeForegroundColor || Icon.COLORS.PRIMARY_300}
            size={setBadgeSize()}
          />
        </div>
      )}
      {image.src && (
        <img alt={image.alt || ''} className="sage-avatar__image" src={image.src} id={image.id} />
      )}
      {(!image.src || useFallbackGraphic) && (
        <PdsIcon name="user-filled" color="var(--pine-color-mercury-500)" className="sage-avatar__graphic" />
      )}
    </div>
  );
};

Avatar.COLORS = AVATAR_COLORS;

Avatar.defaultProps = {
  badge: false,
  badgeBackgroundColor: null,
  badgeForegroundColor: null,
  badgeIcon: null,
  centered: false,
  className: '',
  color: AVATAR_COLORS.DEFAULT,
  image: {},
  size: null,
  useFallbackGraphic: true,
};

Avatar.propTypes = {
  badge: PropTypes.bool,
  badgeBackgroundColor: PropTypes.string,
  badgeForegroundColor: PropTypes.oneOf(Object.values(SageTokens.COLOR_SLIDERS)),
  badgeIcon: PropTypes.oneOf(Object.values(SageTokens.ICONS)),
  centered: PropTypes.bool,
  className: PropTypes.string,
  color: PropTypes.oneOf(Object.values(AVATAR_COLORS)),
  image: PropTypes.shape({
    alt: PropTypes.string,
    src: PropTypes.string,
    id: PropTypes.string
  }),
  size: PropTypes.string,
  useFallbackGraphic: PropTypes.bool,
};
