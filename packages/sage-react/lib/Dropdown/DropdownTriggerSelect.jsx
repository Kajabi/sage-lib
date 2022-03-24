import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { SageClassnames, SageTokens } from '../configs';
import { LEGACY_EMPTY_SELECTED_VALUE } from './configs';

export const DropdownTriggerSelect = ({
  disabled,
  defaultIcon,
  label,
  icon,
  onClick,
  selectedValue,
}) => {
  const [configs, setConfigs] = React.useState(false);

  React.useEffect(() => {
    if (selectedValue && selectedValue !== ' ' && selectedValue !== LEGACY_EMPTY_SELECTED_VALUE) {
      setConfigs({
        icon,
        label: selectedValue,
      })
    } else {
      setConfigs({
        icon: defaultIcon,
        label,
      });
    }
  }, [defaultIcon, icon, label, selectedValue]);

  return (
    <>
      <Button
        color={Button.COLORS.SECONDARY}
        className="sage-dropdown__trigger-selected-value"
        disabled={disabled}
        icon={SageTokens.ICONS.CARET_DOWN}
        iconPosition={Button.ICON_POSITIONS.RIGHT}
        raised={false}
        type="button"
        onClick={onClick}
      >
        {configs.icon && (<Icon icon={configs.icon} className={SageClassnames.SPACERS.XS_RIGHT} />)}
        {configs.label}
      </Button>
    </>
  );
};

DropdownTriggerSelect.defaultProps = {
  defaultIcon: null,
  disabled: false,
  icon: null,
  onClick: null,
  selectedValue: null,
};

DropdownTriggerSelect.propTypes = {
  defaultIcon: PropTypes.oneOf(Object.values(SageTokens.ICONS)),
  disabled: PropTypes.bool,
  icon: PropTypes.oneOf(Object.values(SageTokens.ICONS)),
  onClick: PropTypes.func,
  label: PropTypes.string.isRequired,
  selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};
