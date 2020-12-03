import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { parseHeaderData } from './helpers';
import { headerPropTypes } from './configs';

const TableHeader = ({
  attributes,
  children,
  className,
  dataType,
  label,
}) => {
  const classNames = classnames(
    'sage-table__header',
    className,
    {
      [`sage-table__header--${dataType}`]: dataType,
    }
  )
  return (
    <th className={classNames} {...attributes}>
      {label}
      {children}
    </th>
  );
};

TableHeader.parseHeaderData = parseHeaderData;

TableHeader.defaultProps = {
  attributes: null,
  children: '',
  className: null,
  dataType: null,
  label: null,
};

TableHeader.propTypes = Object.assign({
  children: PropTypes.node,
}, headerPropTypes);

export default TableHeader;
