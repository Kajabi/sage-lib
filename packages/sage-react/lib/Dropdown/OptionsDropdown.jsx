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
  options: null,
};

OptionsDropdown.propTypes = {
  align: PropTypes.oneOf([
    'right',
  ]),
  className: PropTypes.string,
  exitPanelHandler: PropTypes.func,
  isPinned: PropTypes.bool,
  options: DropdownItemList.itemsPropTypes,
};
