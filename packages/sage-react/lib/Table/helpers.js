import uuid from 'react-uuid';

//
// The transformers in this helper accept data in a variety of forms
// and ensure they resolve into a single consistent structure for use in tables.
// See `cellPropTypes` for this final structure.
//
// This structure is extracted from provided data ensuring that at least
// the `value` property is present in a way that it can be displayed
// as content of a table header or table cell.
//

// Transforms individual cells
export const parseCellData = (cell, _field) => {
  let attributes = null,
    className = null,
    dataType = null,
    field = _field || null,
    id = uuid(),
    style = null,
    value = cell;

  if (cell && typeof cell === 'object') {
    // Allow each property to pass or fall back to default
    attributes = cell.attributes || attributes;
    className = cell.className || className;
    dataType = cell.dataType || dataType;
    field = cell.field || field;
    id = cell.id || id;
    style = cell.style || style;
    // Empty strings are allowed in value, so a little more logic is needed
    if (cell.value !== undefined && cell.value !== null) {
      value = cell.value;
    }
  } else {
    value = cell;
  }

  return {
    attributes,
    className,
    dataType,
    field,
    id,
    style,
    value,
  };
};

// Ensures a consistent structure for cells in a row
// Returns an array of specially formatted objects.
// See `cellPropTypes`.
export const parseRowData = (row, schema) => {
  let parsedRow = [];

  if (row instanceof Array) {
    // An array for the row means we don't have field names provided
    // so we check the schema for field names as we parse the items
    parsedRow = row.map((cell, i) => {
      let field = null;
      // If we have a schema, it should provide
      // the field name to use for this cell
      // but this is not required.
      // The schema should contain the same number of properties
      // as the row has cells, and in the same order,
      // but the schema may indicate that a cell should be skipped
      // by having a `false` value assigned to it.
      if (schema) {
        field = Object.keys(schema)[i];
      }

      return parseCellData(cell, field);
    });
  } else if (row instanceof Object) {
    if (schema !== null && Object.keys(schema).length > 0) {
      parsedRow = Object.keys(schema).map((field) => parseCellData(row[field], field));
    } else {
      parsedRow = Object.keys(row).map((field) => parseCellData(row[field], field));
    }
  }

  return parsedRow;
};
