import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import uuid from 'react-uuid';
import { Checkbox, Dropdown, SelectDropdown } from '../';
import { listDisplayString } from './utils';
import { DEFAULT_NOUN, SELECTION_TYPES } from './configs';

const PanelControlsBulkActions = ({
  bulkActionsItems,
  checked,
  currentPage,
  itemsOnThisPage,
  numSelectedRows,
  onSelectBulkAction,
  onToggleSelection,
  rowNoun,
  selectionType,
  totalItems,
}) => {
  const bulkActionsLabelText = numSelectedRows > 0 
    ? `Selected ${numSelectedRows} ${rowNoun.plural || 'items'}`
    : listDisplayString(
        currentPage,
        itemsOnThisPage,
        totalItems,
        rowNoun
      );

  const classNames = classnames(
    'sage-panel-controls__bulk-actions',
    {
      'sage-panel-controls__bulk-actions--checked': checked,
    },
  );

  const checkboxClassNames = classnames(
    'sage-panel-controls__bulk-actions-checkbox',
    {
      'sage-checkbox--partial-selection': selectionType === SELECTION_TYPES.PARTIAL,
    }
  );

  return (
    <div className={classNames}>
      <Checkbox
        className={checkboxClassNames}
        id={uuid()}
        label={bulkActionsLabelText}
        name="bulk-actions-checkbox"
        onChange={onToggleSelection}
        checked={checked}
      />
      {(checked && bulkActionsItems) && (
        <SelectDropdown
          className="sage-panel-controls__bulk-actions-dropdown"
          id={uuid()}
          items={bulkActionsItems}
          label="Bulk Actions"
          searchable={false}
          onSelect={onSelectBulkAction}
        />
      )}
    </div>
  );
};

PanelControlsBulkActions.defaultProps = {
  bulkActionsItems: null,
  checked: false,
  currentPage: 1,
  itemsOnThisPage: 0,
  numSelectedRows: 0,
  onSelectBulkAction: data => data,
  onToggleSelection: data => data,
  rowNoun: { ...DEFAULT_NOUN },
  selectionType: SELECTION_TYPES.NONE,
  totalItems: 0,
};

PanelControlsBulkActions.propTypes = {
  bulkActionsItems: PropTypes.arrayOf(PropTypes.shape(Dropdown.ItemList.itemsPropTypes)),
  checked: PropTypes.bool,
  currentPage: PropTypes.number,
  itemsOnThisPage: PropTypes.number,
  numSelectedRows: PropTypes.number,
  onSelectBulkAction: PropTypes.func,
  onToggleSelection: PropTypes.func,
  rowNoun: PropTypes.shape({
    plural: PropTypes.string,
    singular: PropTypes.string,
  }),
  selectionType: PropTypes.oneOf(Object.values(SELECTION_TYPES)),
  totalItems: PropTypes.number,
};

export default PanelControlsBulkActions;
