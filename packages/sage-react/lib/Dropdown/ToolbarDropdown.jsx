import React from 'react';
import PropTypes from 'prop-types';
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
  triggerClassnames,
  ...rest // Used as an option to pass other props to Dropdown (base) component
}) => (
  <Dropdown
    align={align}
    className={className}
    disclosure={true}
    exitPanelHandler={exitPanelHandler}
    isLabelVisible={true}
    isPinned={isPinned}
    label="Text"
    onEscapeHook={onEscapeHook}
    panelMaxWidth={panelMaxWidth}
    panelSize={panelSize}
    triggerModifier="options"
    triggerButtonSubtle={triggerButtonSubtle}
    triggerClassnames={triggerClassnames}
    {...rest}
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
  triggerButtonSubtle: false,
  triggerClassnames: '',
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
  triggerClassnames: PropTypes.string,
};
