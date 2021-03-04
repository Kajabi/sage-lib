import React from 'react';
import PropTypes from 'prop-types';

const FeatureToggle = ({
  altText,
  children,
  description,
  image,
  linkLocation,
  linkText,
  title,
  ...rest
}) => (
  <li className="sage-form-section" {...rest}>
    <h3 class="sage-feature-toggle__title">{title}</h3>
    <div class="sage-feature-toggle__content">
      <p>{description}</p>
      {/* import a button here */}
    </div>
    <div class="sage-feature-toggle__aside">
      {children}
    </div>
    <a class="sage-feature-toggle__image-link">
      <img class="sage-feature-toggle__image" src={image} alt={altText} />
    </a>
  </li>
);

FeatureToggle.defaultProps = {
  altText: null,
  children: null,
  description: null,
  image: null,
  linkLocation: null,
  linkText: null,
  title: null,
};

FeatureToggle.propTypes = {
  altText: PropTypes.string,
  children: PropTypes.node,
  description: PropTypes.string,
  image: PropTypes.string,
  linkLocation: PropTypes.string,
  linkText: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default FeatureToggle;
