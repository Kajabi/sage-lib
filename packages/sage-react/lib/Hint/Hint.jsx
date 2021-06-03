import React from 'react';
import PropTypes from 'prop-types';

export const Hint = ({ text = 'Hello, world!' }) => (
  <h1>{text} This is a hint.</h1>
);

Hint.defaultProps = {
};

Hint.propTypes = {
  text: PropTypes.string.isRequired
};
