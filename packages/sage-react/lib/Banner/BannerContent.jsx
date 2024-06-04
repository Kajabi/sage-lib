import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SageTokens } from '../configs';
import { Button } from '../Button';

import { BANNER_TYPES } from './configs';

export const BannerContent = ({
  active,
  bannerContext,
  children,
  className,
  dismissable,
  id,
  onDismiss,
  link,
  text,
  type,
  ...rest
}) => {
  const [isActive, setIsActive] = useState(active);

  const classNames = classnames(
    'sage-banner',
    className,
    {
      [`sage-banner--${type}`]: type,
      'sage-banner--active': isActive,
    }
  );

  const handleDismiss = () => {
    setIsActive(false);
    if (onDismiss) onDismiss();
  };

  const iconMap = {
    secondary: "info-circle",
    warning: "warning",
    danger: "danger",
    default: "flag",
  };

  const icon_name = iconMap[type] || iconMap.default;

  return (
    <div
      className={classNames}
      {...rest}
      id={id}
    >
      <pds-icon name={icon_name} class="sage-banner__icon"></pds-icon>
      {text && (
        <p className="sage-banner__text">{text}</p>
      )}

      {link && (
        <Button
          className="sage-banner__link"
          subtle={true}
          href={link.href || '#'}
          rel={link.rel}
          target={link.target}
        >
          {link.name}
        </Button>
      )}

      {children}

      {dismissable && (
        <Button
          className="sage-banner__close"
          icon={SageTokens.ICONS.REMOVE}
          iconOnly={true}
          subtle={true}
          onClick={handleDismiss}
        >
          Dismiss
        </Button>
      )}
    </div>
  );
};

BannerContent.TYPES = BANNER_TYPES;

BannerContent.defaultProps = {
  active: false,
  bannerContext: null,
  children: null,
  className: null,
  dismissable: null,
  id: null,
  link: null,
  onDismiss: null,
  text: null,
  type: null
};

BannerContent.propTypes = {
  active: PropTypes.bool,
  bannerContext: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  dismissable: PropTypes.bool,
  id: PropTypes.string,
  link: PropTypes.shape({
    href: PropTypes.string,
    name: PropTypes.string,
    rel: PropTypes.string,
    target: PropTypes.string
  }),
  onDismiss: PropTypes.func,
  text: PropTypes.string,
  type: PropTypes.oneOf(Object.values(BannerContent.TYPES)),
};
