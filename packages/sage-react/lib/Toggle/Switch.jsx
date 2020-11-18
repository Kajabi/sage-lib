import React from 'react';
import PropTypes from 'prop-types';
import Toggle from './Toggle';

const Switch = ({ type, ...rest }) => (
  <Toggle toggleStyle={Toggle.STYLES.SWITCH} type={type} {...rest} />
);

Switch.defaultProps = {
  type: Toggle.TYPES.CHECKBOX,
};

Switch.propTypes = {
  type: PropTypes.oneOf(Object.values(Toggle.TYPES)),
};

export default Switch;
