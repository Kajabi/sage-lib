import React from 'react';
import PropTypes from 'prop-types';
import { SageTokens } from '../configs';
import { Dropdown } from './Dropdown';
import { DropdownItemList } from './DropdownItemList';

export const OptionsDropdown = ({
  align,
  className,
  exitPanelHandler,
  isPinned,
  panelMaxWidth,
  options,
}) => (
  <Dropdown
    align={align}
    className={className}
    exitPanelHandler={exitPanelHandler}
    icon={SageTokens.ICONS.DOT_MENU}
    isLabelVisible={false}
    isPinned={isPinned}
    label="Options"
    panelMaxWidth={panelMaxWidth}
    triggerModifier="options"
    triggerButtonSubtle={true}
  >
    <Dropdown.ItemList items={options} />
  </Dropdown>
);

OptionsDropdown.defaultProps = {
  align: null,
  className: null,
  exitPanelHandler: (evt) => evt,
  isPinned: true,
  panelMaxWidth: null,
  options: null,
};

OptionsDropdown.propTypes = {
  align: PropTypes.oneOf([
    'right',
  ]),
  className: PropTypes.string,
  exitPanelHandler: PropTypes.func,
  isPinned: PropTypes.bool,
  panelMaxWidth: PropTypes.string,
  options: DropdownItemList.itemsPropTypes,
};
