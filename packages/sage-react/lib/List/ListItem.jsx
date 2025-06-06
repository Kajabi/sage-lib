import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Icon } from '../Icon';
import { Dropdown, OptionsDropdown } from '../Dropdown';

export const ListItem = ({
  children,
  className,
  id,
  moreActions,
  sortable,
  ...rest
}) => {
  const classNames = classnames(
    'sage-list__item',
    className,
    {
      'sage-list__item--sortable': sortable
    }
  );

  return (
    <li className={classNames} id={id} {...rest}>
      {sortable && (
        <div className="sage-list__item-sortable-handle">
          <Icon icon={Icon.ICONS.HANDLE_2_VERTICAL} label="Drag to sort" />
        </div>
      )}
      <div className="sage-list__item-content">
        {children}
      </div>
      {moreActions && (
        <div className="sage-list__item-more-actions">
          <OptionsDropdown align={Dropdown.POSITIONS.RIGHT} {...moreActions} />
        </div>
      )}
    </li>
  );
};

ListItem.defaultProps = {
  children: null,
  className: null,
  id: null,
  moreActions: null,
  sortable: false,
};

ListItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  moreActions: PropTypes.shape({ ...OptionsDropdown.propTypes }),
  sortable: PropTypes.bool,
};
