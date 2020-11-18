import React from 'react';
import PropTypes from 'prop-types';

const CardImage = ({ src, alt, ...rest }) => (
  <div className="sage-card__img">
    <img src={src} alt={alt} {...rest} />
  </div>
);

CardImage.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default CardImage;
