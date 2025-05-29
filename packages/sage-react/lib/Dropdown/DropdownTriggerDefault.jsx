import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';
import { SageTokens } from '../configs';

export const DropdownTriggerDefault = ({
  className,
  disabled,
  disclosure,
  icon,
  isLabelVisible,
  label,
  onClick,
  subtle,
  ...rest
}) => (
  <Button
    className={className}
    color={Button.COLORS.SECONDARY}
    disabled={disabled}
    disclosure={disclosure}
    icon={icon}
    iconOnly={!isLabelVisible}
    onClick={onClick}
    type="button"
    subtle={subtle}
    {...rest}
  >
    {label}
  </Button>
);

DropdownTriggerDefault.defaultProps = {
  className: '',
  disabled: false,
  disclosure: false,
  isLabelVisible: true,
  icon: null,
  subtle: false,
};

DropdownTriggerDefault.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  disclosure: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.oneOf(Object.values(SageTokens.ICONS)),
  isLabelVisible: PropTypes.bool,
  subtle: PropTypes.bool,
};
