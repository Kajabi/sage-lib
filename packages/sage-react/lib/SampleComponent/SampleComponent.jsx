import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SAMPLE_TOKEN } from './configs'; // component configurations as needed

export const SampleComponent = ({ children, className }) => {

  const classNames = classnames('sage-sample-component', className);

  return (
    <div className={classNames}>
      {children}
    </div>
  );
};

// Public assignment of component configuration tokens as needed=
SampleComponent.SAMPLE_TOKEN = SAMPLE_TOKEN;

SampleComponent.defaultProps = {
  // optional default values here in alpha order
  children: null,
  className: null,
};

SampleComponent.propTypes = {
  // all proptypes here in alpha order
  children: PropTypes.node,
  className: PropTypes.string,
};
