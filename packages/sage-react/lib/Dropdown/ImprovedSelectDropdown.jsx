/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import uuid from 'react-uuid';
import { SageTokens } from '../configs';
import { Dropdown } from './Dropdown';
import { DropdownTriggerSelect } from './DropdownTriggerSelect';

export const ImprovedSelectDropdown = ({
  allowMultiselect,
  className,
  defaultIcon,
  disabled,
  filterActions,
  icon,
  id,
  items,
  label,
  onChange,
  onSearch,
  onSelect,
  searchable,
  searchPlaceholder,
  setSelectedValueHook,
  ...rest
}) => {
  const [selectedValue, setSelectedValue] = useState(null);

  const classNames = classnames(
    className,
    {
      'sage-dropdown--value-selected': selectedValue,
    }
  );

  const emptySelectedValue = (
    <>
      &nbsp;
    </>
  );

  const getSelectedValue = () => {
    const selectedItems = items.filter((item) => item.isActive);
    onChange(selectedItems);
    setSelectedValue(setSelectedValueHook({ selectedItems, allowMultiselect }));
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

  return (
    <Dropdown
      className={classNames}
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
      panelModifier="select"
      triggerModifier="select"
      {...rest}
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

ImprovedSelectDropdown.setSelectedItem = ({
  conditionCallback = (item, selection) => item.payload.value === selection.value,
  items,
  multiSelect = false,
  selection,
}) => items.map((item) => {
  if (conditionCallback(item, selection)) {
    item.isActive = !multiSelect && !item.isActive;
  } else {
    item.isActive = multiSelect ? item.isActive : false;
  }

  return item;
});

ImprovedSelectDropdown.setSelectedValueHook = ({
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

ImprovedSelectDropdown.defaultProps = {
  allowMultiselect: false,
  className: null,
  defaultIcon: null,
  disabled: false,
  filterActions: null,
  icon: null,
  id: uuid(),
  items: [],
  label: 'Select...',
  onChange: (selections) => selections,
  onSearch: (evt) => evt,
  onSelect: (data) => data,
  searchable: false,
  searchPlaceholder: 'Find',
  setSelectedValueHook: ImprovedSelectDropdown.setSelectedValueHook,
};

ImprovedSelectDropdown.propTypes = {
  allowMultiselect: PropTypes.bool,
  className: PropTypes.string,
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
  onSearch: PropTypes.func,
  onSelect: PropTypes.func,
  searchable: PropTypes.bool,
  searchPlaceholder: PropTypes.string,
  setSelectedValueHook: PropTypes.func,
};
