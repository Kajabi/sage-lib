import React from 'react';
import PropTypes from 'prop-types';

export const FormSection = ({
  children,
  subtitle,
  title,
  ...rest
}) => (
  <div className="sage-form-section" {...rest}>
    <div className="sage-form-section__info">
      <h3 className="sage-form-section__title">{title}</h3>
      {subtitle && (
        <p className="sage-form-section__subtitle">{subtitle}</p>
      )}
    </div>
    <div className="sage-form-section__content">
      <div className="sage-form-section__panel">
        {children}
      </div>
    </div>
  </div>
);

FormSection.defaultProps = {
  children: null,
  subtitle: null,
};

FormSection.propTypes = {
  children: PropTypes.node,
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
};
