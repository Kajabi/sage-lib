import React from 'react';
import { Toggle } from './Toggle';

export const Checkbox = (props) => (
  <Toggle {...props} />
);

Checkbox.defaultProps = {
  type: Toggle.TYPES.CHECKBOX,
  ...Toggle.defaultProps
};

Checkbox.propTypes = { ...Toggle.propTypes };
