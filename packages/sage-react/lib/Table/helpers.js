import uuid from 'react-uuid';

export const parseCellData = (cell, _field) => {
  let attributes = null,
    dataType = null,
    field = _field || null,
    id = uuid(),
    value = cell;

  if (typeof cell === 'object') {
    attributes = cell.attributes || attributes,
    dataType = cell.dataType || dataType,
    field = cell.field || field,
    id = cell.id || id,
    value = cell.value || value;
  } else {
    value = cell;
  }

  return {
    attributes,
    dataType,
    field,
    id,
    value,
  };
};

export const parseHeaderData = (header) => {
  let label = '',
    attributes = null,
    dataType = null;

  if (typeof header === 'string') {
    label = header;
  } else {
    label = header.label || '';
    attributes = header.attributes || null;
    dataType = header.dataType || null;
  }

  return {
    label,
    attributes,
    dataType,
  };
};

export const parseRowData = (row) => {
  let parsedRow = [];

  if (typeof row === 'array') {
    parsedRow = row.map(cell => {
      return parseCellData(cell);
    });
  } else if (typeof row === 'object') {
    Object.keys(row).forEach(key => {
      parsedRow.push(parseCellData(row[key], key));
    });
  }

  return parsedRow;
};
