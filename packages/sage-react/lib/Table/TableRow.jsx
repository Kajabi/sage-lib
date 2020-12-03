import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import uuid from 'react-uuid';
import { parseRowData, parseCellData } from './helpers';
import { cellPropTypes } from './configs';
import { TableHelpers } from '../helpers'
import { Checkbox } from '../Toggle';

const TableRow = ({
  className,
  cells,
  id,
  onSelect,
  schema,
  selectable,
  selected,
  typeRenderers,
}) => {
  const [selfSelected, setSelfSelected] = useState(selected);
  const classNames = classnames(
    'sage-table-row',
    className,
    {
      'sage-table-row--selectable': selectable,
    }
  );

  const onChangeSelector = (value, checked, ev) => {
    onSelect(value);
    setSelfSelected(!checked);
  };

  const selfTypeRenderers = Object.assign(typeRenderers, TableHelpers.typeRenderers);
  const renderCellData = (data, dataType) => {
    return TableHelpers.renderDataTypes(data, dataType, selfTypeRenderers);
  };

  return (
    <tr className={classNames} data-table-row-id={id}>
      {selectable && (
        <td>
          <Checkbox
            checked={selfSelected}
            id={`sage-table-row-selector-${id}`}
            label="Select row"
            name={`sage-table-selections`}
            onChange={onChangeSelector}
            standalone={true}
            value={id.toString()}
          />
        </td>
      )}
      {cells.map(({ field, attributes, className, dataType, style, value }) => {
        // Check for schema data for this field
        if (schema && !schema[field]) {
          return null;
        } else if (schema) {
          // Schema found; now check for attributes and/or dataType
          let {
            attributes: schemaAttributes,
            className: schemaClassName,
            dataType: schemaDataType,
            style: schemaStyle,
          } = schema[field];

          attributes = attributes ? attributes : schemaAttributes;
          className = className ? className : schemaClassName;
          dataType = dataType ? dataType : schemaDataType;
          style = style ? style : schemaStyle;
        }

        return (
          <td key={uuid()} className={className} style={style} {...attributes}>
            {renderCellData(value, dataType)}
          </td>
        );
      })}
    </tr>
  );
};

TableRow.parseCellData = parseCellData;
TableRow.parseRowData = parseRowData;

TableRow.defaultProps = {
  className: null,
  cells: [],
  onSelect: ev => ev,
  selectable: false,
  selected: false,
  typeRenderers: {},
};

TableRow.propTypes = {
  className: PropTypes.string,
  cells: PropTypes.arrayOf(PropTypes.shape(cellPropTypes)),
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  onSelect: PropTypes.func,
  selectable: PropTypes.bool,
  selected: PropTypes.bool,
  schema: PropTypes.shape({}),
  typeRenderers: PropTypes.shape({}),
};

export default TableRow;
