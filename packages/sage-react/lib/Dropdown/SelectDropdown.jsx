/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Dropdown from './Dropdown';
import { SageTokens } from '../configs';
import DropdownTriggerSelect from './DropdownTriggerSelect';

const SelectDropdown = ({
  allowMultiselect,
  className,
  closePanelOnExit,
  customized,
  defaultIcon,
  disabled,
  filterActions,
  id,
  initialSelectedValue,
  items,
  label,
  localSelectedItems,
  onChangeHook,
  onDeselect,
  onSearch,
  onSelect,
  resetToken,
  searchable,
}) => {
  const emptySelectedValue = (
    <>
      &nbsp;
    </>
  );

  const setClassNames = _hasSelectedValue => classnames(
    className,
    {
      'sage-dropdown--value-selected': _hasSelectedValue,
    }
  );

  const [configs, setConfigs] = useState({
    classNames: setClassNames(!!initialSelectedValue),
    icon: defaultIcon,
    selectedValue: initialSelectedValue || emptySelectedValue,
  });

  const deselectValue = () => {
    setConfigs({
      ...configs,
      icon: null,
      classNames: setClassNames(false),
      selectedValue: emptySelectedValue,
    });

    if (onDeselect) {
      onDeselect();
    }
  };

  const changeValue = (data) => {
    let { selectedValue, icon } = configs;

    if (onChangeHook) {
      data = onChangeHook(data);
    }

    if (!allowMultiselect) {
      switch (typeof data) {
        case 'object':
          selectedValue = data.label || null;
          icon = data.icon || null;
          break;
        case 'string':
          selectedValue = data;
          break;
        case 'number':
          selectedValue = String(data);
          break;
        default:
          break;
      }

      if (selectedValue === configs.selectedValue) {
        deselectValue();
        return;
      }

      setConfigs({
        classNames: setClassNames(selectedValue !== emptySelectedValue),
        icon,
        selectedValue,
      });
    }

    if (onSelect) {
      onSelect(data);
    }
  };

  // When reset token changes, deselect current selection
  useEffect(() => {
    if (resetToken) {
      deselectValue();
    }
  }, [resetToken]);

  useEffect(() => {
    if (allowMultiselect) {
      let lastSelectedLabel,
        numSelected = 0;

      localSelectedItems.forEach((item) => {
        if (item.isActive) {
          numSelected += 1;
          lastSelectedLabel = item.label;
        }
      });

      let selectedValue;
      if (numSelected > 1) {
        selectedValue = `${numSelected} items`;
      } else if (numSelected === 1) {
        selectedValue = lastSelectedLabel;
      } else {
        selectedValue = initialSelectedValue || emptySelectedValue;
      }

      setConfigs({
        classNames: setClassNames((numSelected > 0)),
        icon: configs.icon,
        selectedValue,
      });
    }
  }, [initialSelectedValue, items, allowMultiselect]);

  return (
    <Dropdown
      className={configs.classNames}
      closePanelOnExit={closePanelOnExit}
      customized={customized}
      customTrigger={(
        <DropdownTriggerSelect
          disabled={disabled}
          label={label}
          selectedValue={configs.selectedValue}
        />
      )}
      disabled={disabled}
      exitPanelHandler={changeValue}
      label={emptySelectedValue}
      panelModifier="select"
      triggerModifier="select"
    >
      <Dropdown.ItemList
        allowMultiselect={allowMultiselect}
        filterActions={filterActions}
        groupId={id}
        items={items}
        localSelectedItems={localSelectedItems}
        onSearch={onSearch}
        searchable={searchable || allowMultiselect}
      />
    </Dropdown>
  );
};

SelectDropdown.defaultProps = {
  allowMultiselect: false,
  className: null,
  closePanelOnExit: true,
  customized: false,
  defaultIcon: null,
  disabled: false,
  filterActions: null,
  initialSelectedValue: null,
  items: [],
  label: 'Select...',
  localSelectedItems: [],
  onChangeHook: null,
  onDeselect: null,
  onSelect: e => e,
  onSearch: e => e,
  resetToken: null,
  searchable: false,
};

SelectDropdown.propTypes = {
  allowMultiselect: PropTypes.bool,
  className: PropTypes.string,
  closePanelOnExit: PropTypes.bool,
  customized: PropTypes.bool,
  defaultIcon: PropTypes.oneOf(Object.values(SageTokens.ICONS)),
  disabled: PropTypes.bool,
  filterActions: PropTypes.node,
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  initialSelectedValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string,
    })
  ]),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string,
    })
  ),
  localSelectedItems: PropTypes.arrayOf(PropTypes.shape({})),
  onChangeHook: PropTypes.func,
  onDeselect: PropTypes.func,
  onSearch: PropTypes.func,
  onSelect: PropTypes.func,
  resetToken: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]),
  searchable: PropTypes.bool,
};

export default SelectDropdown;
