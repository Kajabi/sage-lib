import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import uuid from 'react-uuid';
import { TableHelpers } from '../helpers';
import { CAPTION_SIDE, cellPropTypes, dataPropTypes } from './configs';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';
import { SELECTION_TYPES } from '../PanelControls/configs';
import { Checkbox } from '../Toggle';

//
// Tables are built out from a provided set of rows.
// These rows can be provided in a variety of formats,
// typically, as an array of arrays or an array of objects.
// Regardless, they are parsed by this component
// into a collection structure (array of objects) for flexible rendering.
// See `cellPropTypes` for this structure.
//
// In order for a set of rows to be tailored to display in particular ways,
// a `schema` can be provided that specifies the header, data type, html attributes,
// and custom style attributes for each cell of data in each row.
// If cells are included in the data but omitted from the schema,
// those cells will also be omitted from display.
//
// `headers` can also be provided apart from a `schema` if
// either you want to override schema settings specifically for one or more headings
// or if no schema is provided and you want to specify just settings for headers.
// `headers` can be a simple array of strings to show in the `th` cells in the order provided,
// or they can use the cell data structure with a label, dataType, attributes, etc.
// If a schema is provided, a matching entry in `headers` will override for any settings provided.
// If no schema is provided, the number of items in `headers` must match the items in each row
// for a properly formatted table.
//
export const Table = ({
  caption,
  captionSide,
  className,
  hasBorders,
  hasDataBeyondCurrentRows,
  hasLeadingInput,
  hasMenuOptions,
  headers,
  isResponsive,
  onSelectRowHook,
  resetAbove,
  resetBelow,
  rows,
  schema,
  selectable,
  selectAllConfigs,
  selectedRows,
  showSelectAll,
  tableAttributes,
}) => {
  const [selfSelectedRows, setSelfSelectedRows] = useState([]);
  const [selfHeaders, setSelfHeaders] = useState([]);
  const [selfSelectionType, setSelfSelectionType] = useState(SELECTION_TYPES.NONE);

  const containerClassNames = classnames(
    'sage-table-wrapper',
    className,
    {
      'sage-table-wrapper--reset-above': resetAbove,
      'sage-table-wrapper--reset-below': resetBelow,
    }
  );

  const tableClassNames = classnames(
    'sage-table',
    {
      'sage-table--selectable': selectable,
      'sage-table--has-leading-input': hasLeadingInput,
      'sage-table--has-menu-options': hasMenuOptions,
    }
  );

  //
  // Component utilities
  //

  const extractHeaderOverrides = (field, index) => {
    let overrides = null;
    // If headers is an array look for matching index
    // Or if headers is an object, look for field
    if (headers instanceof Array) {
      overrides = headers[index];
    } else if (headers instanceof Object) {
      overrides = headers[field];
    }

    // If match is just a string, map it to the label prop
    if (typeof overrides === 'string') {
      overrides = {
        label: overrides,
      };
    }

    return overrides;
  };

  const buildHeaders = () => {
    if (!headers && !schema) {
      return;
    }

    let newSelfHeaders = [];
    // If schema is provided use it as a base for headers
    if (schema) {
      newSelfHeaders = Object.keys(schema).map((field, i) => {
        // Fetch configs for this schema item
        let {
          attributes,
          className,
          dataType,
          label,
          style,
        } = schema[field];

        // Check for configs in header and override where applicable
        if (headers) {
          const overrides = extractHeaderOverrides(field, i);

          if (overrides) {
            const {
              attributes: overrideAttributes,
              className: overrideClassname,
              dataType: overrideDataType,
              label: overrideLabel,
              style: overrideStyle,
            } = overrides;

            attributes = overrideAttributes || attributes;
            className = overrideClassname || className;
            dataType = overrideDataType || dataType;
            label = overrideLabel || label;
            style = overrideStyle || style;
          }
        }

        return {
          attributes,
          className,
          dataType,
          field,
          style,
          value: label,
        };
      });
    } else if (headers) {
      newSelfHeaders = headers.map(TableHeader.parseHeaderData);
    }

    setSelfHeaders(newSelfHeaders);
  };

  const getSelectionType = (selection) => {
    if (selection === SELECTION_TYPES.ALL) {
      return SELECTION_TYPES.ALL;
    }

    if (selection.length === 0) {
      return SELECTION_TYPES.NONE;
    }

    if (hasDataBeyondCurrentRows) {
      return SELECTION_TYPES.PARTIAL;
    }

    return selection.length === rows.length ? SELECTION_TYPES.ALL : SELECTION_TYPES.PARTIAL;
  };

  //
  // Component state and event handlers
  //

  // Ensure headers are built out dynamically
  useEffect(() => {
    buildHeaders();
  }, [schema, headers]);

  // Ensure selected rows change when adjusted from the outside
  useEffect(() => {
    setSelfSelectedRows(selectedRows);
    setSelfSelectionType(getSelectionType(selectedRows));
  }, [selectedRows]);

  const removeFromList = (data, list) => list.filter((each) => each !== data);

  const addToList = (data, list) => [...list, data];

  const onToggleSelection = () => {
    let selectedRows,
      selectionType;
    if (selfSelectionType === SELECTION_TYPES.NONE) {
      selectedRows = SELECTION_TYPES.ALL;
      selectionType = SELECTION_TYPES.ALL;
    } else {
      selectedRows = [];
      selectionType = SELECTION_TYPES.NONE;
    }

    setSelfSelectionType(selectionType);
    setSelfSelectedRows(selectedRows);

    if (onSelectRowHook) {
      onSelectRowHook({
        selectedRows,
      });
    }
  };

  const onSelectRow = (data) => {
    let updatedArray;
    if (selfSelectedRows === SELECTION_TYPES.ALL) {
      // If ALL selected currently, build an array of current row ids
      updatedArray = rows.map(({ id }) => id);
    } else {
      // Otherwise, we should already have just ids in the selfSelectedRows list
      updatedArray = selfSelectedRows;
    }

    // Now toggle the indicated item
    const rowsSelected = updatedArray.includes(data);
    updatedArray = rowsSelected
      ? removeFromList(data, updatedArray)
      : addToList(data, updatedArray);

    setSelfSelectedRows(updatedArray);
    setSelfSelectionType(getSelectionType(updatedArray));

    if (onSelectRowHook) {
      onSelectRowHook({
        changedRow: {
          row: data,
          selected: rowsSelected,
        },
        selectedRows: updatedArray,
      });
    }
  };

  // Renders the cells in the header row
  const renderTableHeader = ({
    attributes,
    className,
    dataType,
    field,
    style,
    value,
  }) => {
    // Skip headers not present in schema
    if (schema && !schema[field]) {
      return null;
    }

    return (
      <TableHeader
        key={uuid()}
        attributes={attributes}
        className={className}
        dataType={dataType}
        style={style}
        value={value}
      />
    );
  };

  // Renders a row of cells
  const renderTableRow = (row) => {
    // Ensure there's a unique id for the row if one is not provided
    const rowId = row.id || uuid();

    // Transform the raw row data into a consistent structure
    const cells = TableRow.parseRowData(row, schema);

    return (
      <TableRow
        hasBorders={hasBorders}
        key={rowId}
        id={rowId}
        cells={cells}
        schema={schema}
        selected={selfSelectedRows === SELECTION_TYPES.ALL || selfSelectedRows.includes(rowId)}
        selectable={selectable}
        onSelect={onSelectRow}
      />
    );
  };

  // Renders the table itself
  const renderTable = () => (
    <table className={tableClassNames} {...tableAttributes}>
      {caption && (
        <caption className={`sage-table__caption--${captionSide || CAPTION_SIDE.BOTTOM}`}>
          {caption}
        </caption>
      )}
      {selfHeaders && (
        <thead>
          <tr>
            {selectable && (
              <TableHeader dataType="checkbox">
                {showSelectAll ? (
                  <Checkbox
                    standalone={true}
                    partialSelection={selfSelectionType === SELECTION_TYPES.PARTIAL}
                    checked={selfSelectionType !== SELECTION_TYPES.NONE}
                    onChange={onToggleSelection}
                    {...selectAllConfigs}
                  />
                ) : (' ')}
              </TableHeader>
            )}
            {selfHeaders.map(renderTableHeader)}
          </tr>
        </thead>
      )}
      <tbody>{rows.map(renderTableRow)}</tbody>
    </table>
  );

  return (
    <div className={containerClassNames}>
      {isResponsive ? (
        <div className="sage-table-wrapper__overflow">
          {renderTable()}
        </div>
      ) : renderTable()}
    </div>
  );
};

Table.Header = TableHeader;
Table.Row = TableRow;
Table.CAPTION_SIDE = CAPTION_SIDE;
Table.DATA_TYPES = TableHelpers.DATA_TYPES;

Table.defaultProps = {
  caption: null,
  captionSide: null,
  className: null,
  hasBorders: false,
  hasDataBeyondCurrentRows: false,
  hasLeadingInput: false,
  hasMenuOptions: false,
  headers: [],
  isResponsive: true,
  onSelectRowHook: null,
  resetAbove: false,
  resetBelow: false,
  rows: [],
  schema: null,
  selectable: true,
  selectAllConfigs: null,
  selectedRows: [],
  showSelectAll: false,
  tableAttributes: null,
};

Table.propTypes = {
  caption: PropTypes.string,
  captionSide: PropTypes.oneOf(Object.values(Table.CAPTION_SIDE)),
  className: PropTypes.string,
  hasBorders: PropTypes.bool,
  hasDataBeyondCurrentRows: PropTypes.bool,
  hasLeadingInput: PropTypes.bool,
  hasMenuOptions: PropTypes.bool,
  // Headers provide a simpler alternative to schema
  headers: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.shape(cellPropTypes),
      PropTypes.string,
    ])),
    PropTypes.shape({}),
  ]),
  isResponsive: PropTypes.bool,
  onSelectRowHook: PropTypes.func,
  resetAbove: PropTypes.bool,
  resetBelow: PropTypes.bool,
  rows: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.shape(cellPropTypes),
    PropTypes.arrayOf(dataPropTypes),
    PropTypes.shape({}),
  ])),
  // Schema provides a structure for applying settings to headers and cells
  schema: PropTypes.shape({}),
  selectable: PropTypes.bool,
  selectAllConfigs: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func,
  }),
  selectedRows: PropTypes.oneOfType([
    PropTypes.oneOf([SELECTION_TYPES.ALL]),
    PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.shape({}),
      PropTypes.string,
    ])),
  ]),
  showSelectAll: PropTypes.bool,
  tableAttributes: PropTypes.shape({}),
};
