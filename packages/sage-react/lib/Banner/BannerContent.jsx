import React from 'react';
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
  link,
  text,
  type,
  ...rest
}) => {
  const classNames = classnames(
    'sage-banner',
    className,
    {
      [`sage-banner--${type}`]: type,
      'sage-banner--active': active,
    }
  );

  return (
    <div
      className={classNames}
      {...rest}
      id={id}
    >
      {text && (
        <p className="sage-banner__text">{text}</p>
      )}

      {link && (
        <Button
          className="sage-banner__link"
          subtle={true}
          href={link.href}
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
  link: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.oneOf(Object.values(BannerContent.TYPES)),
};
