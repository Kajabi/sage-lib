import { SELECTION_TYPES } from './configs';

export const listCurrentRange = (page, itemsShown, itemsTotal) => {
  const start = ((page - 1) * itemsShown) + 1;
  const maxEnd = start + (itemsShown - 1);
  const end = maxEnd > itemsTotal ? itemsTotal : maxEnd;

  return {
    start,
    end,
  };
};

export const listCurrentRangeString = (page, itemsShown, itemsTotal) => {
  const { start, end } = listCurrentRange(page, itemsShown, itemsTotal);
  return `${start}–${end}`;
};

export const listDisplayString = (page, itemsShown, itemsTotal, noun = { plural: 'items' }) => {
  let displayStr = `Displaying ${listCurrentRangeString(page, itemsShown, itemsTotal)} of ${itemsTotal}`;

  if (noun && noun.plural) {
    displayStr += ` ${noun.plural}`;
  }

  return displayStr;
};

export const handleChange = ({
  bulkActionsHandlerFn,
  data,
  pageChangeHandlerFn,
  pageSizeChangeHandlerFn,
  stateData,
  setStateDataFn,
  sortHandlerFn,
}) => {
  // First if a page change is requested, send for that
  if (data.page) {
    pageChangeHandlerFn(data.page);
    return;
  }

  // Of if requested change is a bulk actions command
  if (data.bulkActionCommand) {
    if (bulkActionsHandlerFn) {
      bulkActionsHandlerFn(data);
      return;
    }
  }

  if (data.sortActionCommand) {
    if (sortHandlerFn) {
      sortHandlerFn(data);
      return;
    }
  }

  if (data.pageSizeCommand) {
    if (pageSizeChangeHandlerFn) {
      pageSizeChangeHandlerFn(data.pageSizeCommand);
      return;
    }
  }

  // Or if reqeust is to change the selection
  if (data.selectionType) {
    // Parse selection type and adjust selected rows accordingly
    let selectedRows;
    switch (data.selectionType) {
      case SELECTION_TYPES.ALL:
        selectedRows = SELECTION_TYPES.ALL;
        break;
      case SELECTION_TYPES.NONE:
      default:
        selectedRows = [];
        break;
    }

    setStateDataFn({
      ...stateData,
      selectedRows,
      panelControlConfigs: {
        ...stateData.panelControlConfigs,
        numSelectedRows: selectedRows.length,
        selectionType: data.selectionType,
      },
    });
  }
};

export const handleSelection = ({
  data,
  stateData,
  setStateDataFn,
}) => {
  const { selectedRows } = data;
  const { panelControls: totalItems } = stateData;

  // Determine selection type based on number of items
  // sent from table's current selection list
  const numSelectedRows = selectedRows.length;
  let selectionType;
  if (numSelectedRows === totalItems) {
    selectionType = SELECTION_TYPES.ALL;
  } else if (numSelectedRows > 0) {
    selectionType = SELECTION_TYPES.PARTIAL;
  } else {
    selectionType = SELECTION_TYPES.NONE;
  }

  setStateDataFn({
    ...stateData,
    selectedRows,
    panelControlConfigs: {
      ...stateData.panelControlConfigs,
      numSelectedRows,
      selectionType,
    },
  });
};
