import React from 'react';
import PropTypes from 'prop-types';
import { Toggle } from './Toggle';

export const Switch = ({ type, ...rest }) => (
  <Toggle toggleStyle={Toggle.STYLES.SWITCH} type={type} {...rest} />
);

Switch.defaultProps = {
  type: Toggle.TYPES.CHECKBOX,
};

Switch.propTypes = {
  type: PropTypes.oneOf(Object.values(Toggle.TYPES)),
};
