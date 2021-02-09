import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const LabelGroup = ({ children, className, }) => (
  <div className={`sage-label-group ${className || ''}`}>{children}</div>
);

LabelGroup.defaultProps = {
  className: null,
  children: null,
};

LabelGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
