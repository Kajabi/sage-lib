import React from 'react';
import PropTypes from 'prop-types';

export const CarouselSlide = ({
  content
}) => (
  <div
    aria-label="benzo"
    aria-roledescription="slide"
    className="sage-carousel__slide"
    role="group"
  >
    {content}
  </div>
);

CarouselSlide.defaultProps = {
  content: null,
};

CarouselSlide.propTypes = {
  content: PropTypes.node,
};
