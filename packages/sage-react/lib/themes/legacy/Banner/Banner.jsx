import React from 'react';
import PropTypes from 'prop-types';
import { BannerContent } from './BannerContent';
import { BannerWrapper } from './BannerWrapper';

export const Banner = (props) => {
  const { bannerContext } = props;
  console.log("bannercontext: ", bannerContext);
  return (
    (bannerContext != "")
      ? <BannerWrapper {...props} />
      : <BannerContent {...props} />
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
