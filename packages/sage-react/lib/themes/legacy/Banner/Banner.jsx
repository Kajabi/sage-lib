import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import BannerContent from './BannerContent';
import BannerWrapper from './BannerWrapper'

export const Banner = (props) => {
  const {
    active,
    bannerContext,
    className,
    type,
  } = props;
  const classNames = classnames(
    'sage-banner',
    className,
    {
      [`sage-banner--${type}`]: type,
      [`sage-banner--active`]: active,
    }
  );

  const wrapperClassNames = classnames(
    'sage-banner-wrapper',
    {
      [`sage-banner-wrapper--context-${bannerContext}`]: props.bannerContext,
    }
  );

  return (
    <>
      (bannerContext ? <BannerWrapper {...props} /> : <BannerContent {...props} />)
    </>
  );
};

Banner.defaultProps = {
  active: null,
  bannerContext: null,
  children: null,
  className: null,
  dismissable: null,
  id: null,
  link: null,
  text: null,
  type: null
};

Banner.propTypes = {
  active: PropTypes.bool,
  bannerContext: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  dismissable: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string,
  // link: ,
  text: PropTypes.string,
  type: PropTypes.string,
};
