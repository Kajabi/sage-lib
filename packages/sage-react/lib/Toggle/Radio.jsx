import React from 'react';
import Toggle from './Toggle';

const Radio = props => (
  <Toggle {...props} />
);

Radio.defaultProps = {
  type: Toggle.TYPES.RADIO,
  ...Toggle.defaultProps
};

Radio.propTypes = { ...Toggle.propTypes };

export default Radio;
