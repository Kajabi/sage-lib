import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import uuid from 'react-uuid';
import { cellPropTypes, dataPropTypes, headerPropTypes } from './configs';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

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
  const classNames = classnames(
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
      // 'sage-table--sortable' : isSortable,
      'sage-table--striped' : isStriped,
    }
  );

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

  const renderTableHeader = (header) => {
    const {
      attributes,
      dataType,
      label
    } = TableHeader.parseHeaderData(header);
    return (
      <TableHeader
        key={uuid()}
        attributes={attributes}
        dataType={dataType}
      >
        {label}
      </TableHeader>
    );
  };

  const renderTableHeadersFromSchema = () => {
    return Object.keys(schema).map(field => {
      return renderTableHeader(schema[field]);
    });
  };

  const renderTableRow = (row) => {
    const rowId = row.id || uuid();
    const cells = TableRow.parseRowData(row);
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

  const renderTable = () => (
    <table className={tableClassNames} {...tableAttributes}>
      {(schema || headers) && (
        <thead>
          <tr>
            {selectable && (
              <TableHeader dataType="checkbox">
                {' '}
              </TableHeader>
            )}
            {schema ? renderTableHeadersFromSchema() : headers.map(renderTableHeader)}
          </tr>
        </thead>
      )}
      <tbody>{rows.map(renderTableRow)}</tbody>
    </table>
  );

  return (
    <div className={classNames}>
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
  headers: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.shape(headerPropTypes),
    PropTypes.string,
  ])),
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
