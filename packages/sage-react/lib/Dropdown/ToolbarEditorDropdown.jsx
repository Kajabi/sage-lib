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
  icon,
  isPinned,
  onEscapeHook,
  panelMaxWidth,
  panelSize,
  options,
  triggerClassnames,
  triggerButtonSubtle,
  ...rest
}) => (
  <Dropdown
    align={align}
    className={className}
    disclosure={true}
    exitPanelHandler={exitPanelHandler}
    icon={icon}
    isLabelVisible={false}
    isPinned={isPinned}
    label="More options"
    onEscapeHook={onEscapeHook}
    panelMaxWidth={panelMaxWidth}
    panelSize={panelSize}
    triggerModifier="options"
    triggerButtonSubtle={triggerButtonSubtle}
    triggerClassnames={triggerClassnames}
    {...rest}
  >
    <ul className="sage-dropdown__menu">
      {options.map((item) => (
        <li className="sage-dropdown__item">
          {item.label}
        </li>
      ))}
    </ul>
  </Dropdown>
);

ToolbarEditorDropdown.PANEL_SIZES = DROPDOWN_PANEL_SIZES;
ToolbarEditorDropdown.POSITIONS = DROPDOWN_POSITIONS;

ToolbarEditorDropdown.defaultProps = {
  align: DROPDOWN_POSITIONS.DEFAULT,
  className: null,
  exitPanelHandler: (evt) => evt,
  icon: SageTokens.ICONS.ADD,
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
  icon: PropTypes.oneOf(Object.values(SageTokens.ICONS)),
  isPinned: PropTypes.bool,
  onEscapeHook: PropTypes.func,
  panelMaxWidth: PropTypes.string,
  panelSize: PropTypes.oneOf(Object.values(DROPDOWN_PANEL_SIZES)),
  options: DropdownItemList.itemsPropTypes,
  triggerButtonSubtle: PropTypes.bool,
  triggerClassnames: PropTypes.string,
};
