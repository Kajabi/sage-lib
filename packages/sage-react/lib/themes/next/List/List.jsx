import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { ReactSortable } from 'react-sortablejs';
import { ListItem } from './ListItem';
import { OptionsDropdown } from '../Dropdown';

export const List = ({
  children,
  className,
  items,
  itemRenderer,
  sortableConfigs,
}) => {
  const classNames = classnames(
    'sage-list',
    className,
  );

  const renderItems = () => {
    if (children) {
      return children;
    }

    return (
      <>
        {items.map(({ id, ...rest }) => (
          <ListItem key={id} sortable={!!sortableConfigs} {...rest}>
            {itemRenderer && itemRenderer({ id, ...rest })}
          </ListItem>
        ))}
      </>
    );
  };

  return sortableConfigs ? (
    <ReactSortable
      chosenClass="sage-list__item--sortable-active"
      className={classNames}
      dragClass="sage-list__item--sortable-drag"
      ghostClass="sage-list__item--sortable-ghost"
      list={items}
      {...sortableConfigs}
    >
      {renderItems()}
    </ReactSortable>
  ) : (
    <ul className={classNames}>
      {renderItems()}
    </ul>
  );
};

List.Item = ListItem;

List.defaultProps = {
  children: null,
  className: null,
  items: [],
  itemRenderer: null,
  sortableConfigs: null,
};

List.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      children: PropTypes.node,
      chosen: PropTypes.bool, // From react-sortablejs
      className: PropTypes.string,
      filtered: PropTypes.bool, // From react-sortablejs
      id: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
      moreActions: { ...OptionsDropdown.propTypes },
      sortable: PropTypes.bool,
      selected: PropTypes.bool, // From react-sortablejs
    })
  ),
  itemRenderer: PropTypes.func,
  sortableConfigs: PropTypes.shape({
    onEnd: PropTypes.func,
    setList: PropTypes.func, // Same as useState[1]
    tag: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.elementType,
    ]),
    // NOTE: See https://github.com/SortableJS/react-sortablejs for full list of additional options
  }),
};
