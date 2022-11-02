import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Icon } from '../Icon';
import { SageTokens } from '../configs';

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
      'sage-table__sort-link--ascending': direction === 'ascending',
    }
  );

  return (
    <button className={classNames} type="button" onClick={onClick}>
      {children}
      <Icon icon={active ? SageTokens.ICONS.DOWN_SMALL : SageTokens.ICONS.NULL} className="sage-table__sort-icon" />
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
  direction: PropTypes.oneOf(['ascending', 'descending', null]),
  onClick: PropTypes.func,
};
