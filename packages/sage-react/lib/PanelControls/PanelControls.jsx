import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import uuid from 'react-uuid';
import { Button, Checkbox, SageTokens } from '../';
import { listDisplayString } from './utils';

const SELECTION_TYPES = {
  NONE: 'none',
  PARTIAL: 'partial',
  ALL: 'all',
};

const PanelControls = ({
  children,
  className,
  controlSettings,
  onRequestChange,
}) => {
  const [selfConfigs, setSelfConfigs] = useState({
    bulkActionsChecked: false,
    currentPage: 1,
    itemsOnThisPage: 0,
    pageSize: 1,
    selectionType: SELECTION_TYPES.NONE,
    numSelectedRows: 0,
    totalPages: 1,
    totalItems: 0,
  });

  const classNames = classnames(
    'sage-panel-controls',
    className,
    {
      'sage-panel-controls--...': false,
    }
  );

  useEffect(() => {
    const bulkActionsChecked = controlSettings 
      && (
        controlSettings.selectionType === SELECTION_TYPES.ALL
        || controlSettings.selectionType === SELECTION_TYPES.PARTIAL
      );

    setSelfConfigs({
      ...selfConfigs,
      ...controlSettings,
      bulkActionsChecked,
    });
  }, [controlSettings]);

  const onChangeSelectAll = (data) => {
    const bulkActionsChecked = !selfConfigs.bulkActionsChecked;

    let selectionType;
    if (bulkActionsChecked) {
      selectionType = SELECTION_TYPES.ALL;
    } else {
      selectionType = SELECTION_TYPES.NONE;
    }

    onRequestChange({ selectAll: bulkActionsChecked });

    setSelfConfigs({
      ...selfConfigs,
      bulkActionsChecked,
      selectionType,
    });
  };

  const onClickPagination = (newPageNumber) => {
    onRequestChange({ page: newPageNumber });
  };

  const renderBulkActions = () => {
    const bulkActionsLabelText = selfConfigs.numSelectedRows > 0 
      ? `Selected ${selfConfigs.numSelectedRows} ${selfConfigs.rowNoun.plural || 'items'}`
      : listDisplayString(
          selfConfigs.currentPage,
          selfConfigs.itemsOnThisPage,
          selfConfigs.totalItems,
          selfConfigs.rowNoun
        );

    const checkboxClassNames = classnames(
      'sage-panel-controls__bulk-actions-checkbox',
      {
        'sage-checkbox--partial-selection': selfConfigs.selectionType === SELECTION_TYPES.PARTIAL,
      }
    );

    return (
      <div className="sage-panel-controls__bulk-actions"> {/* sage-panel-controls__bulk-actions--checked */}
        <Checkbox
          className={checkboxClassNames}
          id={uuid()}
          label={bulkActionsLabelText}
          name="bulk-actions-checkbox"
          onChange={onChangeSelectAll}
          checked={selfConfigs.bulkActionsChecked}
        /> {/* sage-checkbox--partial-selection */}
      </div>
    );
  };

  const renderPagination = () => {
    return (
      <div className="sage-panel-controls__pagination">
        <Button
          className="sage-panel-controls__pagination-prev"
          color={Button.COLORS.SECONDARY}
          disabled={selfConfigs.currentPage === 1}
          icon={SageTokens.ICONS.ARROW_LEFT}
          iconOnly={true}
          onClick={() => onClickPagination(selfConfigs.currentPage - 1)}
        >
          Previous Page
        </Button>
        <Button
          className="sage-panel-controls__pagination-next"
          color={Button.COLORS.SECONDARY}
          disabled={selfConfigs.currentPage === selfConfigs.totalPages}
          icon={SageTokens.ICONS.ARROW_RIGHT}
          iconOnly={true}
          onClick={() => onClickPagination(selfConfigs.currentPage + 1)}
        >
          Next Page
        </Button>
      </div>
    );
  };

  return (
    <div className={classNames}>
      {children && (
        <div className="sage-panel-controls__toolbar">
          {children}
        </div>
      )}
      <div className="sage-panel-controls__default-controls">
        {renderBulkActions()}
        <div className="sage-panel-controls__toolbar">
          {renderPagination()}
        </div>
      </div>
    </div>
  );
};

PanelControls.SELECTION_TYPES = SELECTION_TYPES;

PanelControls.defaultProps = {
  children: null,
  className: null,
  controlSettings: {},
};

PanelControls.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  controlSettings: PropTypes.shape({
    currentPage: PropTypes.number,
    itemsOnThisPage: PropTypes.number,
    numSelectedRows: PropTypes.number,
    pageSize: PropTypes.number,
    rowNoun: PropTypes.shape({
      singular: PropTypes.string,
      plural: PropTypes.string,
    }),
    selectionType: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    totalItems: PropTypes.number,
    totalPages: PropTypes.number,
  }),
  onRequestChange: PropTypes.func.isRequired,
};

export default PanelControls;
