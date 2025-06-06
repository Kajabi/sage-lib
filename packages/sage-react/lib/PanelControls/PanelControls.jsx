import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  handleChange,
  handleSelection,
} from './utils';
import { DEFAULT_NOUN, SELECTION_TYPES } from './configs';
import { SelectDropdown } from '../Dropdown';
import { PanelControlsBulkActions } from './PanelControlsBulkActions';
import { PanelControlsPagination } from './PanelControlsPagination';
import { PanelControlsToolbar } from './PanelControlsToolbar';
import { PanelControlsToolbarButtonGroup } from './PanelControlsToolbarButtonGroup';

export const PanelControls = ({
  children,
  className,
  controlSettings,
  onRequestChange,
  ...rest
}) => {
  const [selfConfigs, setSelfConfigs] = useState({
    // Set locally
    bulkActionsChecked: false,
    bulkActionsItems: [],
    sortOptions: null,

    // Synched with `controlSettings
    currentPage: 1,
    itemsOnThisPage: 0,
    numSelectedRows: 0,
    pageSize: 1,
    pageSizeOptions: null,
    pageSizeOptionSuffix: null,
    rowNoun: { ...DEFAULT_NOUN },
    selectionType: SELECTION_TYPES.NONE,
    showDefaultToolbar: false,
    totalItems: 0,
    totalPages: 1,
  });

  //
  // Effects
  //

  const syncSelfConfigsWithPropsConfigs = (bulkActionsChecked) => setSelfConfigs({
    ...selfConfigs,
    ...controlSettings,
    bulkActionsChecked,
  });

  // Update when control settings change
  useEffect(() => {
    const bulkActionsChecked = controlSettings && (
      controlSettings.selectionType === SELECTION_TYPES.ALL
      || controlSettings.selectionType === SELECTION_TYPES.PARTIAL
    );

    syncSelfConfigsWithPropsConfigs(bulkActionsChecked);
  }, [controlSettings]); // eslint-disable-line

  //
  // Event handlers
  //

  // Respond to change on bulk actions checkbox
  const onChangeSelectAll = () => {
    const bulkActionsChecked = !selfConfigs.bulkActionsChecked;

    let selectionType;
    if (bulkActionsChecked) {
      selectionType = SELECTION_TYPES.ALL;
    } else {
      selectionType = SELECTION_TYPES.NONE;
    }

    onRequestChange({ selectionType });

    setSelfConfigs({
      ...selfConfigs,
      bulkActionsChecked,
      selectionType,
    });
  };

  // Respond to pagination clicks
  const onClickPagination = (newPageNumber) => {
    onRequestChange({ page: newPageNumber });
  };

  // Respond to bulk action command selection
  const onSelectBulkAction = (payload) => {
    onRequestChange({ bulkActionCommand: payload });
  };

  const handleSortSelection = (payload) => {
    onRequestChange({ sortActionCommand: payload });
  };

  const handlePageSizeSelection = ({ size }) => {
    onRequestChange({ pageSizeCommand: size });
  };

  //
  // Render
  //

  const renderPageSizeDropdown = () => {
    const pageSizeItems = selfConfigs.pageSizeOptions.map((size) => {
      const suffix = selfConfigs.pageSizeOptionSuffix || '';
      const label = `${size}${suffix}`;
      return {
        id: `page-size-${size}`,
        label,
        payload: {
          id: `page-size-${size}`,
          label,
          size,
        }
      };
    });

    let initialPageSizeItem = pageSizeItems.filter(
      (item) => item.payload.size === selfConfigs.pageSize
    );

    if (initialPageSizeItem && initialPageSizeItem.length >= 1) {
      [initialPageSizeItem] = initialPageSizeItem;
    } else {
      initialPageSizeItem = pageSizeItems.length >= 1 ? pageSizeItems[0] : null;
    }

    return (
      <SelectDropdown
        align="right"
        className="sage-dropdown--page-size sage-panel-controls__page-size"
        customized={true}
        initialSelectedValue={initialPageSizeItem}
        items={pageSizeItems}
        label="Page size"
        onSelect={handlePageSizeSelection}
        selectionBecomesLabel={true}
      />
    );
  };

  // Primary render
  const classNames = classnames(
    'sage-panel-controls',
    className,
  );

  return (
    <div className={classNames} {...rest}>
      {children}
      {selfConfigs.showDefaultToolbar && (
        <div className="sage-panel-controls__default-controls">
          <PanelControlsBulkActions
            bulkActionsItems={selfConfigs.bulkActionsItems}
            checked={selfConfigs.bulkActionsChecked}
            currentPage={selfConfigs.currentPage}
            itemsPerPage={selfConfigs.pageSize}
            numSelectedRows={selfConfigs.numSelectedRows}
            onSelectBulkAction={onSelectBulkAction}
            onToggleSelection={onChangeSelectAll}
            rowNoun={selfConfigs.rowNoun}
            selectionType={selfConfigs.selectionType}
            totalItems={selfConfigs.totalItems}
          />
          <div className="sage-panel-controls__toolbar">
            <PanelControlsPagination
              currentPage={selfConfigs.currentPage}
              onClickPagination={onClickPagination}
              totalPages={selfConfigs.totalPages}
            />
            {selfConfigs.pageSizeOptions && renderPageSizeDropdown()}
            {selfConfigs.sortOptions && (
              <SelectDropdown
                align="right"
                className="sage-dropdown--sort sage-panel-controls__sorts"
                customized={true}
                items={selfConfigs.sortOptions}
                label="Sort"
                onSelect={handleSortSelection}
                selectionBecomesLabel={true}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

PanelControls.SELECTION_TYPES = SELECTION_TYPES;
PanelControls.handlerUtils = {
  handleChange,
  handleSelection,
};
PanelControls.Toolbar = PanelControlsToolbar;
PanelControls.ToolbarButtonGroup = PanelControlsToolbarButtonGroup;

PanelControls.defaultProps = {
  children: null,
  className: null,
  controlSettings: null,
};

PanelControls.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  controlSettings: PropTypes.shape({
    currentPage: PropTypes.number,
    itemsOnThisPage: PropTypes.number,
    numSelectedRows: PropTypes.number,
    pageSize: PropTypes.number,
    pageSizeOptions: PropTypes.arrayOf(PropTypes.number),
    pageSizeOptionSuffix: PropTypes.string,
    rowNoun: PropTypes.shape({
      singular: PropTypes.string,
      plural: PropTypes.string,
    }),
    selectionType: PropTypes.oneOf(Object.values(SELECTION_TYPES)),
    showDefaultToolbar: PropTypes.bool,
    sortOptions: PropTypes.arrayOf(PropTypes.shape({})),
    totalItems: PropTypes.number,
    totalPages: PropTypes.number,
  }),
  onRequestChange: PropTypes.func.isRequired,
};
