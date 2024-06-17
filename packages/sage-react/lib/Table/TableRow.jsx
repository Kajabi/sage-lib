import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import uuid from 'react-uuid';
import { parseRowData, parseCellData } from './helpers';
import { cellPropTypes } from './configs';
import { TableHelpers } from '../helpers';
import { Checkbox } from '../Toggle';

/* eslint-disable react-hooks/exhaustive-deps */

export const TableRow = ({
  className,
  cells,
  id,
  hasBorders,
  onSelect,
  schema,
  selectable,
  selected,
  typeRenderers,
}) => {
  const [selfSelected, setSelfSelected] = useState(false);
  const [selfCells, setSelfCells] = useState([]);

  const classNames = classnames(
    'sage-table__row',
    className,
    {
      'sage-table__row--selectable': selectable,
    }
  );

  const selectableClassNames = classnames(
    'sage-table-cell',
    'sage-table-cell--checkbox',
    className,
    {
      'sage-table-cell--borders': hasBorders
    }
  );

  useEffect(() => {
    setSelfSelected(selected);
  }, [selected]);

  useEffect(() => {
    const selfTypeRenderers = Object.assign(typeRenderers, TableHelpers.typeRenderers);
    const newCells = cells.map(({ field, attributes, className, dataType, style, value }) => {
      if (schema && !schema[field]) {
        return null;
      } if (schema) {
        const {
          attributes: schemaAttributes,
          className: schemaClassName,
          dataType: schemaDataType,
          style: schemaStyle,
        } = schema[field];
        attributes = attributes || schemaAttributes;
        className = className || schemaClassName;
        dataType = dataType || schemaDataType;
        style = style || schemaStyle;
      }
      const cellClassnames = classnames(
        'sage-table-cell',
        className,
        {
          'sage-table-cell--borders': hasBorders,
          [`sage-table-cell--${dataType}`]: dataType,
        }
      );
      return {
        attributes,
        classNames: cellClassnames,
        contents: TableHelpers.renderDataTypes(value, dataType, selfTypeRenderers),
        key: uuid(),
        style,
      };
    });
    setSelfCells(newCells);
  }, [cells, schema, typeRenderers]);

  const onChangeSelector = (value, checked) => {
    setSelfSelected(!checked);
    onSelect(id);
  };

  return (
    <tr className={classNames} data-table-row-id={id}>
      {selectable && (
        <td className={selectableClassNames}>
          <Checkbox
            checked={selfSelected}
            id={`sage-table__row-selector-${id}`}
            label="Select row"
            name="sage-table-selections"
            onChange={onChangeSelector}
            standalone={true}
            value={id.toString()}
          />
        </td>
      )}
      {selfCells.map((configs) => {
        if (!configs) {
          return;
        }
        const { key, classNames, style, attributes, contents } = configs;
        // eslint-disable-next-line consistent-return
        return (
          <td key={key} className={classNames} style={style} {...attributes}>
            {contents}
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
  hasBorders: false,
  onSelect: (ev) => ev,
  selectable: false,
  selected: false,
  typeRenderers: {},
  schema: {}
};
TableRow.propTypes = {
  /** The CSS class name for the table row. */
  className: PropTypes.string,

  /** A collection of column data. */
  cells: PropTypes.arrayOf(PropTypes.shape(cellPropTypes)),

  /** When true, the row will have borders. */
  hasBorders: PropTypes.bool,

  /** The id of the row. */
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,

  /** A function that will execute when row is selected. */
  onSelect: PropTypes.func,

  /** When true, the row will be selectable. */
  selectable: PropTypes.bool,

  /** When true, indicates that the row is selected. */
  selected: PropTypes.bool,

  /**
   * Provides a structure for applying the column order, and may specify the data types
   * to the headers and cells.
   */
  schema: PropTypes.shape({}),

  /** The data types that could be renedered in a Table Cell. */
  typeRenderers: PropTypes.shape({}),
};
