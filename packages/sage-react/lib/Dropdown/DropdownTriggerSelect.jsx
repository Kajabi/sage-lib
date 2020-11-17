import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import { SageTokens } from '../configs';

const DropdownTriggerSelect = ({
  disabled,
  onClick,
  label,
  selectedValue,
}) => (
  <>
    <Button
      color={Button.COLORS.SECONDARY}
      className="sage-dropdown__trigger-selected-value"
      disabled={disabled}
      icon={SageTokens.ICONS.CARET_DOWN}
      iconPosition={Button.ICON_POSITIONS.RIGHT}
      type="button"
      onClick={onClick}
    >
      {selectedValue}
    </Button>
    <span className="sage-dropdown__trigger-label">
      {label}
    </span>
  </>
);

DropdownTriggerSelect.defaultProps = {
  selectedValue: ' ',
  disabled: false,
  onClick: null,
};

DropdownTriggerSelect.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  label: PropTypes.string.isRequired,
  selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default DropdownTriggerSelect;
