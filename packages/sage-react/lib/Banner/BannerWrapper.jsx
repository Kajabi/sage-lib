import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { BannerContent } from './BannerContent';

export const BannerWrapper = ({
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
    'sage-banner-wrapper',
    {
      [`sage-banner-wrapper--context-${bannerContext}`]: bannerContext,
    }
  );

  return (
    <div className={classNames}>
      <BannerContent
        active={active}
        bannerContext={bannerContext}
        className={className}
        dismissable={dismissable}
        id={id}
        link={link}
        text={text}
        type={type}
        {...rest}
      >
        {children}
      </BannerContent>
    </div>
  );
};

BannerWrapper.defaultProps = {
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

BannerWrapper.propTypes = {
  active: PropTypes.bool,
  bannerContext: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  dismissable: PropTypes.bool,
  id: PropTypes.string,
  link: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.string,
};
