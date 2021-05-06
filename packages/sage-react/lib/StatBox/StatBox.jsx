import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SAMPLE_TOKEN } from './configs'; // component configurations as needed

export const StatBox = ({ children, className }) => {
  const classNames = classnames('sage-stat-box', className);

  return (
    <div className={classNames}>
      {children}
    </div>
  );
};

// Public assignment of component configuration tokens as needed
StatBox.SAMPLE_TOKEN = SAMPLE_TOKEN;

StatBox.defaultProps = {
  // optional default values here in alpha order
  children: null,
  className: null,
};

StatBox.propTypes = {
  // all proptypes here in alpha order
  children: PropTypes.node,
  className: PropTypes.string,
};
