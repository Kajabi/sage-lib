import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { ReactSortable } from 'react-sortablejs';
import { ListItem } from './ListItem';
import { LIST_DRAG_HANDLE_TYPES } from './configs';

export const List = ({
  children,
  className,
  dragHandleType,
  items,
  itemRenderer,
  onEnd,
  onStart,
  setList,
  sortable,
  tag,
}) => {
  const classNames = classnames(
    'sage-list',
    className,
    {
      'sage-list--sortable': sortable,
      'sage-list--draggable-by-row': dragHandleType === LIST_DRAG_HANDLE_TYPES.ROW,
    }
  );

  const draggingClassname = 'sage-list--sortable-dragging';

  const renderItems = () => {
    if (children) {
      return children;
    }

    return (
      <>
        {items.map(({ id, ...rest }) => (
          <ListItem key={id} sortable={sortable} {...rest}>
            {itemRenderer && itemRenderer({ id, ...rest })}
          </ListItem>
        ))}
      </>
    );
  };

  const Tag = tag;

  return sortable ? (
    <ReactSortable
      chosenClass="sage-list__item--sortable-active"
      className={classNames}
      dragClass="sage-list__item--sortable-drag"
      /*
        NOTE: This is added because Safari 13+ has a draggable api bug.
        Yet we allow the user to override if desired.
        https://github.com/SortableJS/Sortable/issues/1571
      */
      forceFallback={true}
      ghostClass="sage-list__item--sortable-ghost"
      handle={dragHandleType === List.DRAG_HANDLE_TYPES.ROW ? false : '.sage-list__item-sortable-handle'}
      list={items}
      onEnd={(evt) => {
        evt.srcElement.classList.remove(draggingClassname);
        if (onEnd) {
          onEnd(evt);
        }
      }}
      onStart={(evt) => {
        evt.srcElement.classList.add(draggingClassname);
        if (onStart) {
          onStart(evt);
        }
      }}
      setList={setList}
      tag={tag}
    >
      {renderItems()}
    </ReactSortable>
  ) : (
    <Tag className={classNames}>
      {renderItems()}
    </Tag>
  );
};

List.Item = ListItem;
List.DRAG_HANDLE_TYPES = LIST_DRAG_HANDLE_TYPES;

List.defaultProps = {
  children: null,
  className: null,
  items: [],
  itemRenderer: null,
  dragHandleType: List.DRAG_HANDLE_TYPES.DEFAULT,
  onEnd: null,
  onStart: null,
  setList: null,
  sortable: false,
  tag: 'ul',
};

List.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  dragHandleType: PropTypes.oneOf(Object.values(List.DRAG_HANDLE_TYPES)),
  items: PropTypes.arrayOf(PropTypes.shape({ ...ListItem.propTypes })),
  itemRenderer: PropTypes.func,
  onEnd: PropTypes.func,
  onStart: PropTypes.func,
  setList: PropTypes.func, // Same as useState[1]
  sortable: PropTypes.bool,
  tag: PropTypes.oneOf(['ul', 'ol']),
};
