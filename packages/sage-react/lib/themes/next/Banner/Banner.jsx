import React from 'react';
import PropTypes from 'prop-types';
import { BannerContent } from './BannerContent';
import { BannerWrapper } from './BannerWrapper';

import { BANNER_TYPES } from './configs';

export const Banner = (props) => {
  const { bannerContext } = props;
  return (
    (bannerContext !== '')
      ? <BannerWrapper {...props} />
      : <BannerContent {...props} />
  );
};

Banner.TYPES = BANNER_TYPES;

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
  link: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.oneOf(Object.values(BannerContent.TYPES)),
};
