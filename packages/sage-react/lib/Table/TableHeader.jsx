/* eslint-disable react/default-props-match-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { parseCellData } from './helpers';
import { dataPropTypes } from './configs';

export const TableHeader = ({
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

TableHeader.propTypes = {
  /** Allows you to provide additional HTML attributes. */
  attributes: PropTypes.shape({}),

  children: PropTypes.node,

  /** The CSS class name for the Table Header. */
  className: PropTypes.string,

  /** The data type for the Table Header. */
  dataType: PropTypes.string,

  /** Additional styles to be applied. */
  style: PropTypes.shape({}),

  /** The content of the Header. */
  value: dataPropTypes,

};
