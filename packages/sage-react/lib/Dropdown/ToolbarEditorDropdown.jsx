import React from 'react';
import PropTypes from 'prop-types';
import { SageTokens } from '../configs';
import { Dropdown } from './Dropdown';
import { DropdownItemList } from './DropdownItemList';
import { DROPDOWN_PANEL_SIZES, DROPDOWN_POSITIONS } from './configs';

export const ToolbarEditorDropdown = ({
  align,
  className,
  exitPanelHandler,
  isPinned,
  onEscapeHook,
  panelMaxWidth,
  panelSize,
  options,
  triggerClassnames,
  triggerButtonSubtle,
}) => (
  <Dropdown
    align={align}
    className={className}
    disclosure={true}
    exitPanelHandler={exitPanelHandler}
    icon={SageTokens.ICONS.ADD}
    isLabelVisible={false}
    isPinned={isPinned}
    label="More options"
    onEscapeHook={onEscapeHook}
    panelMaxWidth={panelMaxWidth}
    panelSize={panelSize}
    triggerModifier="options"
    triggerButtonSubtle={triggerButtonSubtle}
    triggerClassnames={triggerClassnames}
  >
    <Dropdown.ItemList items={options} />
  </Dropdown>
);

ToolbarEditorDropdown.PANEL_SIZES = DROPDOWN_PANEL_SIZES;
ToolbarEditorDropdown.POSITIONS = DROPDOWN_POSITIONS;

ToolbarEditorDropdown.defaultProps = {
  align: DROPDOWN_POSITIONS.DEFAULT,
  className: null,
  exitPanelHandler: (evt) => evt,
  isPinned: true,
  onEscapeHook: () => false,
  panelMaxWidth: null,
  panelSize: DROPDOWN_PANEL_SIZES.DEFAULT,
  options: null,
  triggerClassnames: '',
  triggerButtonSubtle: true,
};

ToolbarEditorDropdown.propTypes = {
  align: PropTypes.oneOf(Object.values(DROPDOWN_POSITIONS)),
  className: PropTypes.string,
  exitPanelHandler: PropTypes.func,
  isPinned: PropTypes.bool,
  onEscapeHook: PropTypes.func,
  panelMaxWidth: PropTypes.string,
  panelSize: PropTypes.oneOf(Object.values(DROPDOWN_PANEL_SIZES)),
  options: DropdownItemList.itemsPropTypes,
  triggerButtonSubtle: PropTypes.bool,
  triggerClassnames: PropTypes.string,
};