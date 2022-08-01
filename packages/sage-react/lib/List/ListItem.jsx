import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Icon } from '../Icon';
import { Dropdown, OptionsDropdown } from '../Dropdown';
import { Button } from '../Button';

export const ListItem = ({
  children,
  className,
  id,
  moreActions,
  sortable,
}) => {
  const classNames = classnames(
    'sage-list__item',
    className,
    {
      'sage-list__item--sortable': sortable
    }
  );

  return (
    <li className={classNames} id={id}>
      {sortable && (
        <div className="sage-list__item-sortable-handle">
          <Button
            color={Button.COLORS.SECONDARY}
            icon={Icon.ICONS.HANDLE_2_VERTICAL}
            iconOnly={true}
            subtle={true}
          >
            Drag to sort
          </Button>
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
