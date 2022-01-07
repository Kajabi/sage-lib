import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';
import { SageTokens } from '../configs';

export const DropdownTriggerDefault = ({
  disabled,
  icon,
  isLabelVisible,
  label,
  onClick,
  raised,
  subtle,
}) => (
  <Button
    color={Button.COLORS.SECONDARY}
    disabled={disabled}
    icon={icon}
    iconOnly={!isLabelVisible}
    onClick={onClick}
    type="button"
    raised={raised}
    subtle={subtle}
  >
    {label}
  </Button>
);

DropdownTriggerDefault.defaultProps = {
  disabled: false,
  isLabelVisible: true,
  icon: null,
  raised: false,
  subtle: false,
};

DropdownTriggerDefault.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.oneOf(Object.values(SageTokens.ICONS)),
  isLabelVisible: PropTypes.bool,
  raised: PropTypes.bool,
  subtle: PropTypes.bool,
};
