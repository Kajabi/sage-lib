/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import uuid from 'react-uuid';
import { SageTokens } from '../configs';
import { Dropdown } from './Dropdown';
import { DropdownTriggerSelect } from './DropdownTriggerSelect';
import { LegacySelectDropdown } from './LegacySelectDropdown';
import { DROPDOWN_PANEL_SIZES, DROPDOWN_POSITIONS } from './configs';

export const SelectDropdown = ({
  onChange,
  setSelectedValueHook,
  useLegacy,

  onSelect, // shared
  
  align, // pass-through
  className,  // pass-through
  closePanelOnExit, // pass-through
  contained, // pass-through
  customized, // pass-through
  onEscapeHook, // pass-through
  panelSize, // pass-through
  
  disabled, // pass-through; trigger pass-through
  
  allowMultiselect, // item-list pass-through
  filterActions, // item-list pass-through
  id, // item-list pass-through
  items, // item-list pass-through
  onSearch, // item-list pass-through
  searchable, // item-list pass-through
  searchPlaceholder, // item-list pass-through

  defaultIcon, // trigger pass-through
  icon, // trigger pass-through
  label, // trigger pass-through

  ...rest
}) => {
  if (useLegacy) {
    return (
      <LegacySelectDropdown
        contained={contained}
        allowMultiselect={allowMultiselect}
        align={align}
        className={className}
        closePanelOnExit={closePanelOnExit}
        customized={customized}
        defaultIcon={defaultIcon}
        disabled={disabled}
        filterActions={filterActions}
        id={id}
        items={items}
        label={label}
        onEscapeHook={onEscapeHook}
        onSearch={onSearch}
        onSelect={onSelect}
        panelSize={panelSize}
        searchable={searchable}
        searchPlaceholder={searchPlaceholder}
        {...rest}
      />
    );
  }

  const [selectedValue, setSelectedValue] = useState(null);

  const emptySelectedValue = (
    <>
      &nbsp;
    </>
  );

  const classNames = classnames(
    className,
    {
      'sage-dropdown--value-selected': false, // TODO
    }
  );

  const getSelectedValue = () => {
    const selectedItems = items.filter((item) => item.isActive);
    onChange(selectedItems);
    setSelectedValue(setSelectedValueHook({ selectedItems, allowMultiselect }))
  };

  const exitPanelHandler = (data) => {
    if (onSelect) {
      onSelect(data);
    }
  };

  useEffect(() => {
    console.log('items change handler', items, selectedValue);
    getSelectedValue();
  }, [items]);

  useEffect(() => {
    console.log('observed change to selected value', selectedValue);
  }, [selectedValue])

  return (
    <Dropdown
      align={align}
      className={classNames}
      closePanelOnExit={closePanelOnExit}
      contained={contained}
      customized={customized}
      customTrigger={(
        <DropdownTriggerSelect
          disabled={disabled}
          defaultIcon={defaultIcon}
          label={label}
          icon={icon}
          selectedValue={selectedValue}
        />
      )}
      disabled={disabled}
      exitPanelHandler={exitPanelHandler}
      label={emptySelectedValue}
      onEscapeHook={onEscapeHook}
      panelModifier="select"
      panelSize={panelSize}
      triggerModifier="select"
    >
      <Dropdown.ItemList
        allowMultiselect={allowMultiselect}
        filterActions={filterActions}
        groupId={id}
        items={items}
        onSearch={onSearch}
        searchable={searchable}
        searchPlaceholder={searchPlaceholder}
      />
    </Dropdown>
  );
};

SelectDropdown.PANEL_SIZES = DROPDOWN_PANEL_SIZES;
SelectDropdown.POSITIONS = DROPDOWN_POSITIONS;

SelectDropdown.setSelectedItem = ({
  conditionCallback = (item, selection) => item.payload.value === selection.value,
  items,
  multiSelect = false,
  selection,
}) => {
  return items.map(item => {
    if (conditionCallback(item, selection)) {
      item.isActive = multiSelect && item.isActive ? false : true;
    } else {
      item.isActive = multiSelect ? item.isActive : false;
    }

    return item;
  })
};

SelectDropdown.setSelectedValueHook = ({
  selectedItems,
  allowMultiselect,
}) => {
  if (selectedItems.length < 1) {
    return null;
  }

  if (allowMultiselect) {
    return `${selectedItems.length} selected`;
  }

  return selectedItems[0].label;
};

SelectDropdown.defaultProps = {
  align: DROPDOWN_POSITIONS.DEFAULT,
  allowMultiselect: false,
  className: null,
  closePanelOnExit: true,
  contained: true,
  customized: false,
  defaultIcon: null,
  disabled: false,
  filterActions: null,
  icon: null,
  id: uuid(),
  items: [],
  label: 'Select...',
  onChange: (selections) => selections,
  onEscapeHook: () => false,
  onSearch: (evt) => evt,
  onSelect: (data) => data,
  panelSize: DROPDOWN_PANEL_SIZES.DEFAULT,
  searchable: false,
  searchPlaceholder: 'Find',
  setSelectedValueHook: SelectDropdown.setSelectedValueHook,
  useLegacy: true,
};

SelectDropdown.propTypes = {
  align: PropTypes.oneOf(Object.values(DROPDOWN_POSITIONS)),
  allowMultiselect: PropTypes.bool,
  className: PropTypes.string,
  closePanelOnExit: PropTypes.bool,
  contained: PropTypes.bool,
  customized: PropTypes.bool,
  defaultIcon: PropTypes.oneOf(Object.values(SageTokens.ICONS)),
  disabled: PropTypes.bool,
  filterActions: PropTypes.node,
  label: PropTypes.string,
  icon: PropTypes.string,
  id: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string,
    })
  ),
  onChange: PropTypes.func,
  onEscapeHook: PropTypes.func,
  onSearch: PropTypes.func,
  onSelect: PropTypes.func,
  panelSize: PropTypes.oneOf(Object.values(DROPDOWN_PANEL_SIZES)),
  searchable: PropTypes.bool,
  searchPlaceholder: PropTypes.string,
  setSelectedValueHook: PropTypes.func,
};
