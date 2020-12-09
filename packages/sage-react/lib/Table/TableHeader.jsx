import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { parseCellData } from './helpers';
import { cellPropTypes } from './configs';

const TableHeader = ({
  attributes,
  children,
  className,
  dataType,
  style,
  value,
}) => {
  const classNames = classnames(
    'sage-table__header',
    className,
    {
      [`sage-table__header--${dataType}`]: dataType,
    }
  );
  return (
    <th className={classNames} style={style} {...attributes}>
      {value}
      {children}
    </th>
  );
};

TableHeader.parseHeaderData = parseCellData;

TableHeader.defaultProps = {
  attributes: null,
  children: null,
  className: null,
  dataType: null,
  style: null,
  value: null,
};

TableHeader.propTypes = Object.assign({
  children: PropTypes.node,
}, cellPropTypes);

export default TableHeader;
