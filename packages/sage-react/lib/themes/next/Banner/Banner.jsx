import React from 'react';
import PropTypes from 'prop-types';
import { BannerContent } from './BannerContent';
import { BannerWrapper } from './BannerWrapper';

import { BANNER_TYPES } from './configs';

export const Banner = ({
  bannerContext,
  ...rest
}) => {
  return (
    (bannerContext !== null)
      ? <BannerWrapper bannerContext={bannerContext} {...rest} />
      : <BannerContent bannerContext={bannerContext} {...rest} />
  );
};

Banner.TYPES = BANNER_TYPES;

Banner.defaultProps = {
  bannerContext: null
};

Banner.propTypes = {
  bannerContext: PropTypes.string
};
