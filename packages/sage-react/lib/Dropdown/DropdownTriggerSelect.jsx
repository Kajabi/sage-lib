import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { SageClassnames, SageTokens } from '../configs';

export const DropdownTriggerSelect = ({
  disabled,
  defaultIcon,
  label,
  icon,
  onClick,
  selectedValue,
  triggerClassnames
}) => {
  const classNames = classnames(
    'sage-dropdown__trigger-selected-value',
    triggerClassnames,
  );

  return (
    <>
      <Button
        color={Button.COLORS.SECONDARY}
        className={classNames}
        disabled={disabled}
        icon={SageTokens.ICONS.ENLARGE}
        iconPosition={Button.ICON_POSITIONS.RIGHT}
        type="button"
        onClick={onClick}
      >
        {icon && (<Icon icon={icon} className={SageClassnames.SPACERS.XS_RIGHT} />)}
        {selectedValue}
      </Button>
      <span className="sage-dropdown__trigger-label">
        {defaultIcon && (<Icon icon={defaultIcon} className={SageClassnames.SPACERS.XS_RIGHT} />)}
        {label}
      </span>
    </>
  );
};

DropdownTriggerSelect.defaultProps = {
  defaultIcon: null,
  disabled: false,
  icon: null,
  onClick: null,
  selectedValue: ' ',
  triggerClassnames: null,
};

DropdownTriggerSelect.propTypes = {
  defaultIcon: PropTypes.oneOf(Object.values(SageTokens.ICONS)),
  disabled: PropTypes.bool,
  icon: PropTypes.oneOf(Object.values(SageTokens.ICONS)),
  onClick: PropTypes.func,
  label: PropTypes.string.isRequired,
  selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  triggerClassnames: PropTypes.string,
};
