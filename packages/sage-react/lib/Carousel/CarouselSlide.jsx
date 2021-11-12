import React from 'react';
import PropTypes from 'prop-types';

export const CarouselSlide = ({
  content,
  index,
  length,
}) => (
  <div
    aria-label={`${index + 1} of ${length}`}
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
  index: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
};
