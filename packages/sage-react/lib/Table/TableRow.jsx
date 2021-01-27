import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import uuid from 'react-uuid';
import { parseRowData, parseCellData } from './helpers';
import { cellPropTypes } from './configs';
import { TableHelpers } from '../helpers';
import { Checkbox } from '../Toggle';

export const TableRow = ({
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
  const [selfCells, setSelfCells] = useState([]);

  const classNames = classnames(
    'sage-table__row',
    className,
    {
      'sage-table__row--selectable': selectable,
    }
  );

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
  }, []);

  const onChangeSelector = (value, checked) => {
    setSelfSelected(!checked);
    onSelect(id);
  };

  return (
    <tr className={classNames} data-table-row-id={id}>
      {selectable && (
        <td className="sage-table-cell sage-table-cell--checkbox">
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
  onSelect: (ev) => ev,
  selectable: false,
  selected: false,
  typeRenderers: {},
  schema: {}
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
