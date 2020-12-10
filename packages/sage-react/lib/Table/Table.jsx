import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import uuid from 'react-uuid';
import { TableHelpers } from '../helpers';
import { cellPropTypes, dataPropTypes } from './configs';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

//
// Tables are built out from a provided set of rows.
// These rows can be provided in a variety of formats,
// typically, as an array of arrays or an array of objects.
// Regardless, they are parsed by this component
// into a collection structure (array of objects) for flexible rendering.
// See `cellPropTypes` for this structure.
//
// In order for a set of rows to be tailored to display in particular ways,
// a `schema` can be provided that specifices the header, data type, html attributes,
// and custom style attributes for each cell of data in each row.
// If cells are included in the data but omitted from the schema,
// those cells will also be ommited from display.
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
const Table = ({
  className,
  headers,
  isResponsive,
  isStriped,
  resetAbove,
  resetBelow,
  rows,
  schema,
  selectable,
  tableAttributes,
}) => {
  const [selfSelectedRows, setSelfSelectedRows] = useState([]);
  const [selfHeaders, setSelfHeaders] = useState([]);

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
      'sage-table--selectable' : selectable,
      'sage-table--striped' : isStriped,
    }
  );

  //
  // Component utitilities
  //

  const buildHeaders = () => {
    if (!headers && !schema) {
      return null;
    }

    let newSelfHeaders = [];
    // If schema is provided use it as a base for headers
    if (schema) {
      newSelfHeaders = Object.keys(schema).map((field, i) => {
        // Fetch configs for this schema item
        let {
          attributes,
          classname,
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
              classname: overrideClassname,
              dataType: overrideDataType,
              label: overrideLabel,
              style: overrideStyle,
            } = overrides;

            attributes = overrideAttributes || attributes;
            classname = overrideClassname || classname;
            dataType = overrideDataType || dataType;
            label = overrideLabel || label;
            style = overrideStyle || style;
          }
        }

        return {
          attributes,
          classname,
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

  const extractHeaderOverrides = (field, index) => {
    let overrides = null;
    // Or if headers is an array look for matching index
    if (headers instanceof Array) {
      overrides = headers[index];
    }
    // Or if headers is an object, look for field
    else if (headers instanceof Object) {
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


  //
  // Component state and event handlers
  //

  // Ensure headers are built out dynamically
  useEffect(() => {
    buildHeaders();
  }, [schema, headers]);

  const onSelectRow = (data) => {
    const newSelectedRows = selfSelectedRows;
    const matchIndex = newSelectedRows.indexOf(data);
    if (matchIndex >= 0) {
      newSelectedRows.splice(matchIndex, 1); 
    } else {
      newSelectedRows.push(data);
    }

    setSelfSelectedRows(newSelectedRows);
  }

  //
  // Component detail renderers
  //

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
        key={rowId}
        id={rowId}
        cells={cells}
        schema={schema}
        selected={selfSelectedRows.includes(rowId)}
        selectable={selectable}
        onSelect={onSelectRow}
      />
    );
  };

  // Renders the table itself
  const renderTable = () => (
    <table className={tableClassNames} {...tableAttributes}>
      {selfHeaders && (
        <thead>
          <tr>
            {selectable && (
              <TableHeader dataType="checkbox">{' '}</TableHeader>
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
Table.DATA_TYPES = TableHelpers.DATA_TYPES;

Table.defaultProps = {
  className: null,
  headers: [],
  isResponsive: true,
  isStriped: false,
  resetAbove: false,
  resetBelow: false,
  rows: [],
  schema: null,
  selectable: true,
  tableAttributes: null,
};

Table.propTypes = {
  className: PropTypes.string,
  // Headers provide a simpler alternative to schema
  headers: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.shape(cellPropTypes),
      PropTypes.string,
    ])),
    PropTypes.shape({}),
  ]),
  isResponsive: PropTypes.bool,
  isStriped: PropTypes.bool,
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
  tableAttributes: PropTypes.shape({}),
};

export default Table;
