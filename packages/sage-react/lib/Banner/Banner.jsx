import React from 'react';
import PropTypes from 'prop-types';
import { BannerContent } from './BannerContent';
import { BannerWrapper } from './BannerWrapper';

import { BANNER_TYPES } from './configs';

export const Banner = ({
  active,
  bannerContext,
  kjbElementId,
  ...rest
}) => (
  (bannerContext !== null)
    ? <BannerWrapper bannerContext={bannerContext} active={active} {...rest} />
    : <BannerContent bannerContext={bannerContext} active={active} {...rest} />
);

Banner.TYPES = BANNER_TYPES;

// Defining all default props and prop types explicitly to populate story table
Banner.defaultProps = {
  active: false,
  bannerContext: null,
  dismissable: true,
  link: null,
  onDismiss: null,
  kjbElementId: null,
  text: null,
  type: Banner.TYPES.DEFAULT,
};

Banner.propTypes = {
  active: PropTypes.bool,
  bannerContext: PropTypes.string,
  dismissable: PropTypes.bool,
  link: PropTypes.shape({
    href: PropTypes.string,
    name: PropTypes.string,
    rel: PropTypes.string,
    target: PropTypes.string
  }),
  onDismiss: PropTypes.func,
  kjbElementId: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.oneOf(Object.values(BANNER_TYPES)),
};
