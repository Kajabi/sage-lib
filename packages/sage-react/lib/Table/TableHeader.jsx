/* eslint-disable react/default-props-match-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { parseCellData } from './helpers';
import { cellPropTypes } from './configs';

export const TableHeader = ({
  attributes,
  children,
  className,
  dataType,
  sortable,
  style,
  value,
}) => {
  const classNames = classnames(
    'sage-table__header',
    sortable ? 'sage-table__header--sortable' : null,
    className,
    {
      [`sage-table__header--${dataType}`]: dataType,
    }
  );

  attributes = {};

  // eslint-disable-next-line no-prototype-builtins
  if (value && value.hasOwnProperty('props')) {
    const { active: sortActive, direction: sortDirection } = value.props;

    if (sortable && sortActive && sortDirection) {
      attributes['aria-sort'] = sortDirection;
    } else if (sortable) {
      attributes['aria-sort'] = null;
    }
  }

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
  sortable: false,
  style: null,
  value: null,
};

TableHeader.propTypes = {
  ...cellPropTypes,
  children: PropTypes.node,
  sortable: PropTypes.bool,
};
