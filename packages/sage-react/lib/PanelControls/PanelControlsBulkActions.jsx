import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import uuid from 'react-uuid';
import { Checkbox } from '../Toggle';
import { Dropdown, SelectDropdown } from '../Dropdown';
import { listDisplayString } from './utils';
import { DEFAULT_NOUN, SELECTION_TYPES } from './configs';

export const PanelControlsBulkActions = ({
  bulkActionsItems,
  checked,
  currentPage,
  itemsPerPage,
  numSelectedRows,
  onSelectBulkAction,
  onToggleSelection,
  rowNoun,
  selectionType,
  totalItems,
  ...rest
}) => {
  const selectionCount = selectionType === SELECTION_TYPES.ALL
    ? totalItems
    : numSelectedRows;
  const bulkActionsLabelText = selectionCount > 0
    ? `Selected ${selectionCount} ${rowNoun.plural || 'items'}`
    : listDisplayString(
      currentPage,
      itemsPerPage,
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
    <div className={classNames} {...rest}>
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
  itemsPerPage: 1,
  numSelectedRows: 0,
  onSelectBulkAction: (data) => data,
  onToggleSelection: (data) => data,
  rowNoun: { ...DEFAULT_NOUN },
  selectionType: SELECTION_TYPES.NONE,
  totalItems: 0,
};

PanelControlsBulkActions.propTypes = {
  bulkActionsItems: PropTypes.arrayOf(PropTypes.shape(Dropdown.ItemList.itemsPropTypes)),
  checked: PropTypes.bool,
  currentPage: PropTypes.number,
  itemsPerPage: PropTypes.number,
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
