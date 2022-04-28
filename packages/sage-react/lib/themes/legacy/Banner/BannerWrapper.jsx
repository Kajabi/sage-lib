import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { BannerContent } from './BannerContent';

export const BannerWrapper = ({
  bannerContext,
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
      <BannerContent {...rest} />
    </div>
  );
};

BannerWrapper.defaultProps = {
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

BannerWrapper.propTypes = {
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
