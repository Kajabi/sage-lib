import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

export const TableSortableHeading = ({
  active,
  children,
  direction,
  onClick,
}) => {
  const classNames = classnames(
    'sage-table__sort-link',
    {
      'sage-table__sort-link--selected': active,
      'sage-table__sort-link--ascending': direction === 'asc',
    }
  );

  return (
    <button className={classNames} type="button" onClick={onClick}>
      {children}
    </button>
  );
};

TableSortableHeading.defaultProps = {
  active: false,
  children: null,
  direction: null,
  onClick: (event) => event,
};

TableSortableHeading.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  direction: PropTypes.oneOf(['asc', 'desc', null]),
  onClick: PropTypes.func,
};
