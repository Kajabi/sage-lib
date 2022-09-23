import React from 'react';
import PropTypes from 'prop-types';
import { Toggle } from './Toggle';

export const Switch = ({ type, ...rest }) => (
  <Toggle toggleStyle={Toggle.STYLES.SWITCH} type={type} {...rest} />
);

Switch.defaultProps = {
  checked: false,
  className: null,
  // customContent: null,
  disabled: false,
  hasBorder: false,
  hasError: false,
  hideText: false,
  message: null,
  // onChange: (v) => v,
  // partialSelection: false,
  // itemInList: false,
  required: false,
  // standalone: false,
  togglePosition: Toggle.POSITIONS.DEFAULT,
  // toggleStyle: Toggle.TYPES.DEFAULT,
  value: '',
  type: Toggle.TYPES.CHECKBOX,
};

Switch.propTypes = {
  checked: PropTypes.bool,
  className: PropTypes.string,
  // customContent: PropTypes.node,
  disabled: PropTypes.bool,
  hasBorder: PropTypes.bool,
  hasError: PropTypes.bool,
  hideText: PropTypes.bool,
  // id: PropTypes.string.isRequired,
  // itemInList: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  message: PropTypes.string,
  name: PropTypes.string.isRequired,
  // onChange: PropTypes.func,
  // partialSelection: PropTypes.bool,
  required: PropTypes.bool,
  // standalone: PropTypes.bool,
  togglePosition: PropTypes.oneOf(Object.values(Toggle.POSITIONS)),
  // toggleStyle: PropTypes.oneOf(Object.values(Toggle.STYLES)),
  type: PropTypes.oneOf(Object.values(Toggle.TYPES)).isRequired,
  value: PropTypes.string,
  type: PropTypes.oneOf(Object.values(Toggle.TYPES)),
};


/*
Toggle.defaultProps = {
  checked: false,
  className: null,
  customContent: null,
  disabled: false,
  hasBorder: false,
  hasError: false,
  hideText: false,
  message: null,
  // onChange: (v) => v,
  // partialSelection: false,
  // itemInList: false,
  required: false,
  // standalone: false,
  togglePosition: Toggle.POSITIONS.DEFAULT,
  // toggleStyle: Toggle.TYPES.DEFAULT,
  value: '',
};

Toggle.propTypes = {
  checked: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  hasBorder: PropTypes.bool,
  hasError: PropTypes.bool,
  hideText: PropTypes.bool,
  // id: PropTypes.string.isRequired,
  // itemInList: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  message: PropTypes.string,
  name: PropTypes.string.isRequired,
  // onChange: PropTypes.func,
  // partialSelection: PropTypes.bool,
  required: PropTypes.bool,
  // standalone: PropTypes.bool,
  togglePosition: PropTypes.oneOf(Object.values(Toggle.POSITIONS)),
  // toggleStyle: PropTypes.oneOf(Object.values(Toggle.STYLES)),
  type: PropTypes.oneOf(Object.values(Toggle.TYPES)).isRequired,
  value: PropTypes.string
};




   checked: false,
    disabled: false,
    hasBorder: false,
    hasError: false,
    hideText: false,
    label: 'Switch label',
    message: 'Subtext appears',
    name: 'switch-demo',
    required: false,
    togglePosition: Toggle.POSITIONS.DEFAULT,
    type: Toggle.TYPES.CHECKBOX,
    value: 'Demo'
*/