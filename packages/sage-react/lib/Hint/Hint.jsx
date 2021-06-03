import React from 'react';
import PropTypes from 'prop-types';

export const Hint = ({ text = 'Hello, world!' }) => (
  <div className="hint">
    <h1 className="hint__text">{text} This is a hint, dude!</h1>
  </div>
);

Hint.defaultProps = {
};

Hint.propTypes = {
  text: PropTypes.string.isRequired
};
