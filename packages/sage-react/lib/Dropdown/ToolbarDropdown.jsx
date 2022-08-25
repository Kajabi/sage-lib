import React from 'react';
import PropTypes from 'prop-types';
import { SageTokens } from '../configs';
import { Dropdown } from './Dropdown';
import { DropdownItemList } from './DropdownItemList';
import { DROPDOWN_PANEL_SIZES, DROPDOWN_POSITIONS } from './configs';

export const ToolbarDropdown = ({
  align,
  className,
  exitPanelHandler,
  isPinned,
  onEscapeHook,
  panelMaxWidth,
  panelSize,
  options,
  triggerButtonSubtle,
}) => (
  <Dropdown
    align={align}
    className={className}
    disclosure={true}
    exitPanelHandler={exitPanelHandler}
    icon={SageTokens.ICONS.DOT_MENU_HORIZONTAL}
    isLabelVisible={false}
    isPinned={isPinned}
    label="Options"
    onEscapeHook={onEscapeHook}
    panelMaxWidth={panelMaxWidth}
    panelSize={panelSize}
    triggerModifier="options"
    triggerButtonSubtle={triggerButtonSubtle}
  >
    <Dropdown.ItemList items={options} />
  </Dropdown>
);

ToolbarDropdown.PANEL_SIZES = DROPDOWN_PANEL_SIZES;
ToolbarDropdown.POSITIONS = DROPDOWN_POSITIONS;

ToolbarDropdown.defaultProps = {
  align: DROPDOWN_POSITIONS.DEFAULT,
  className: null,
  exitPanelHandler: (evt) => evt,
  isPinned: true,
  onEscapeHook: () => false,
  panelMaxWidth: null,
  panelSize: DROPDOWN_PANEL_SIZES.DEFAULT,
  options: null,
  triggerButtonSubtle: true,
};

ToolbarDropdown.propTypes = {
  align: PropTypes.oneOf(Object.values(DROPDOWN_POSITIONS)),
  className: PropTypes.string,
  exitPanelHandler: PropTypes.func,
  isPinned: PropTypes.bool,
  onEscapeHook: PropTypes.func,
  panelMaxWidth: PropTypes.string,
  panelSize: PropTypes.oneOf(Object.values(DROPDOWN_PANEL_SIZES)),
  options: DropdownItemList.itemsPropTypes,
  triggerButtonSubtle: PropTypes.bool,
};