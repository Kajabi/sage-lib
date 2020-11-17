import React from 'react';
import PropTypes from 'prop-types';
import { SageTokens } from '../configs';
import Dropdown from './Dropdown';
import DropdownItemList from './DropdownItemList';

const OptionsDropdown = ({
  className,
  exitPanelHandler,
  isPinned,
  options,
}) => (
  <Dropdown
    className={className}
    exitPanelHandler={exitPanelHandler}
    icon={SageTokens.ICONS.DOT_MENU}
    isLabelVisible={false}
    isPinned={isPinned}
    label="Options"
    triggerModifier="options"
    triggerButtonSubtle={true}
  >
    <Dropdown.ItemList items={options} />
  </Dropdown>
);

OptionsDropdown.defaultProps = {
  className: null,
  exitPanelHandler: e => e,
  isPinned: true,
  options: null,
};

OptionsDropdown.propTypes = {
  className: PropTypes.string,
  exitPanelHandler: PropTypes.func,
  isPinned: PropTypes.bool,
  options: DropdownItemList.itemsPropTypes,
};

export default OptionsDropdown;
