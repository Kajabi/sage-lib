/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import uuid from 'react-uuid';
import { SageTokens } from '../configs';
import { Label } from '../Label';
import { Dropdown } from './Dropdown';
import { DropdownTriggerSelect } from './DropdownTriggerSelect';
import { DROPDOWN_PANEL_SIZES, DROPDOWN_POSITIONS } from './configs';

export const SelectDropdown = ({
  align,
  allowDeselect,
  allowMultiselect,
  className,
  closePanelOnExit,
  contained,
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
  onEscapeHook,
  onSearch,
  onSelect,
  panelSize,
  resetToken,
  searchable,
  searchPlaceholder,
  selectionBecomesLabel,
  showSelectionsAsLabels,
  triggerWidth,
  triggerClassnames,
  ...rest // Used as an option to pass other props to Dropdown (base) component
}) => {
  const emptySelectedValue = (
    <>
      &nbsp;
    </>
  );

  const setClassNames = (_hasSelectedValue) => classnames(
    className,
    {
      'sage-dropdown--value-selected': _hasSelectedValue,
      'sage-dropdown--contained': contained,
    }
  );

  const displaySelectedValue = () => {
    if (!initialSelectedValue) {
      return emptySelectedValue;
    }

    if (initialSelectedValue.label) {
      return initialSelectedValue.label;
    }

    return initialSelectedValue;
  };

  const [configs, setConfigs] = useState({
    classNames: setClassNames(!!initialSelectedValue),
    hasSelectedValue: !!initialSelectedValue,
    icon: defaultIcon,
    selectedValue: displaySelectedValue(),
  });

  const deselectValue = () => {
    setConfigs({
      classNames: setClassNames(false),
      hasSelectedValue: false,
      icon: defaultIcon,
      selectedValue: emptySelectedValue,
    });

    if (onDeselect) {
      onDeselect();
    }
  };

  const changeValue = (data) => {
    let { selectedValue, icon, hasSelectedValue } = configs;

    if (onChangeHook) {
      data = onChangeHook(data);
    }

    if (selectionBecomesLabel && !allowMultiselect) {
      // retrieve the selected value and icon if possible
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

      // Selecting same item as currently selected deselects it
      if (allowDeselect && selectedValue === configs.selectedValue) {
        deselectValue();
        return;
      }

      // Ensure a safe value is put into the selectedvalue
      if (!selectedValue) {
        selectedValue = emptySelectedValue;
        hasSelectedValue = false;
      } else {
        hasSelectedValue = true;
      }

      setConfigs({
        classNames: setClassNames(selectedValue !== emptySelectedValue),
        hasSelectedValue,
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
    if (selectionBecomesLabel && allowMultiselect) {
      let lastSelectedLabel,
        numSelected = 0;

      localSelectedItems.forEach((item) => {
        if (item.isActive) {
          numSelected += 1;
          lastSelectedLabel = item.label;
        }
      });

      let selectedValue,
        hasSelectedValue;
      if (numSelected > 1) {
        selectedValue = `${numSelected} items`;
        hasSelectedValue = true;
      } else if (numSelected === 1) {
        selectedValue = lastSelectedLabel;
        hasSelectedValue = true;
      } else {
        selectedValue = initialSelectedValue || emptySelectedValue;
        hasSelectedValue = initialSelectedValue !== null;
      }

      setConfigs({
        classNames: setClassNames(hasSelectedValue),
        icon: configs.icon,
        selectedValue,
        hasSelectedValue,
      });
    } else if (selectionBecomesLabel && !allowMultiselect) {
      let { selectedValue, hasSelectedValue } = configs;
      if (initialSelectedValue && !hasSelectedValue) {
        hasSelectedValue = true;
        selectedValue = initialSelectedValue;
      }

      setConfigs({
        ...configs,
        classNames: setClassNames(hasSelectedValue),
        hasSelectedValue,
        selectedValue,
      });
    }
  }, [initialSelectedValue, items, selectionBecomesLabel, allowMultiselect]);

  const renderDropdown = () => (
    <Dropdown
      align={align}
      className={configs.classNames}
      closePanelOnExit={closePanelOnExit}
      contained={contained}
      customized={customized}
      customTrigger={(
        <DropdownTriggerSelect
          disabled={disabled}
          defaultIcon={defaultIcon}
          label={label}
          icon={configs.icon}
          selectedValue={configs.selectedValue}
          triggerClassnames={triggerClassnames}
        />
      )}
      disabled={disabled}
      exitPanelHandler={changeValue}
      label={emptySelectedValue}
      onEscapeHook={onEscapeHook}
      panelModifier="select"
      panelSize={panelSize}
      triggerModifier="select"
      triggerWidth={triggerWidth}
      {...rest}
    >
      <Dropdown.ItemList
        allowMultiselect={allowMultiselect}
        filterActions={filterActions}
        groupId={id}
        items={items}
        localSelectedItems={localSelectedItems}
        onSearch={onSearch}
        searchable={searchable || allowMultiselect}
        searchPlaceholder={searchPlaceholder}
      />
    </Dropdown>
  );

  return allowMultiselect && showSelectionsAsLabels ? (
    <div className="sage-dropdown-combo">
      {renderDropdown()}
      <Label.Group>
        {items.map(({ id, isActive, label, payload }) => isActive && (
          // TODO this needs to be change to a tag
          <Label
            key={id}
            interactiveType={Label.INTERACTIVE_TYPES.SECONDARY_BUTTON}
            secondaryButton={(
              <Label.SecondaryButton onClick={() => changeValue((payload || { id }))} />
            )}
            value={label}
          />
        ))}
      </Label.Group>
    </div>
  ) : renderDropdown();
};

SelectDropdown.PANEL_SIZES = DROPDOWN_PANEL_SIZES;
SelectDropdown.POSITIONS = DROPDOWN_POSITIONS;

SelectDropdown.defaultProps = {
  align: DROPDOWN_POSITIONS.DEFAULT,
  allowDeselect: false,
  allowMultiselect: false,
  className: null,
  closePanelOnExit: true,
  contained: true,
  customized: false,
  defaultIcon: null,
  disabled: false,
  filterActions: null,
  id: uuid(),
  initialSelectedValue: null,
  items: [],
  label: 'Select...',
  localSelectedItems: [],
  onChangeHook: null,
  onDeselect: null,
  onEscapeHook: () => false,
  onSelect: (evt) => evt,
  onSearch: (evt) => evt,
  panelSize: DROPDOWN_PANEL_SIZES.DEFAULT,
  resetToken: null,
  searchable: false,
  searchPlaceholder: 'Find',
  selectionBecomesLabel: true,
  showSelectionsAsLabels: false,
  triggerClassnames: '',
  triggerWidth: null,
};

SelectDropdown.propTypes = {
  align: PropTypes.oneOf(Object.values(DROPDOWN_POSITIONS)),
  allowDeselect: PropTypes.bool,
  allowMultiselect: PropTypes.bool,
  className: PropTypes.string,
  closePanelOnExit: PropTypes.bool,
  contained: PropTypes.bool,
  customized: PropTypes.bool,
  defaultIcon: PropTypes.oneOf(Object.values(SageTokens.ICONS)),
  disabled: PropTypes.bool,
  filterActions: PropTypes.node,
  label: PropTypes.string,
  id: PropTypes.string,
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
  onEscapeHook: PropTypes.func,
  onSearch: PropTypes.func,
  onSelect: PropTypes.func,
  panelSize: PropTypes.oneOf(Object.values(DROPDOWN_PANEL_SIZES)),
  resetToken: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]),
  searchable: PropTypes.bool,
  searchPlaceholder: PropTypes.string,
  selectionBecomesLabel: PropTypes.bool,
  showSelectionsAsLabels: PropTypes.bool,
  triggerClassnames: PropTypes.string,
  triggerWidth: PropTypes.string,
};
