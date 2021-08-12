import React from 'react';
import PropTypes from 'prop-types';
import { SageTokens } from '../configs';
import { Dropdown } from './Dropdown';
import { DropdownItemList } from './DropdownItemList';
import { DROPDOWN_PANEL_SIZES } from './configs';

export const OptionsDropdown = ({
  align,
  className,
  exitPanelHandler,
  isPinned,
  onEscapeHook,
  panelMaxWidth,
  panelSize,
  options,
}) => (
  <Dropdown
    align={align}
    className={className}
    exitPanelHandler={exitPanelHandler}
    icon={SageTokens.ICONS.DOT_MENU_HORIZONTAL}
    isLabelVisible={false}
    isPinned={isPinned}
    label="Options"
    onEscapeHook={onEscapeHook}
    panelMaxWidth={panelMaxWidth}
    panelSize={panelSize}
    triggerModifier="options"
    triggerButtonSubtle={true}
  >
    <Dropdown.ItemList items={options} />
  </Dropdown>
);

OptionsDropdown.PANEL_SIZES = DROPDOWN_PANEL_SIZES;

OptionsDropdown.defaultProps = {
  align: null,
  className: null,
  exitPanelHandler: (evt) => evt,
  isPinned: true,
  onEscapeHook: () => false,
  panelMaxWidth: null,
  panelSize: DROPDOWN_PANEL_SIZES.DEFAULT,
  options: null,
};

OptionsDropdown.propTypes = {
  align: PropTypes.oneOf([
    'right',
  ]),
  className: PropTypes.string,
  exitPanelHandler: PropTypes.func,
  isPinned: PropTypes.bool,
  onEscapeHook: PropTypes.func,
  panelMaxWidth: PropTypes.string,
  panelSize: PropTypes.oneOf(Object.values(DROPDOWN_PANEL_SIZES)),
  options: DropdownItemList.itemsPropTypes,
};
