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
  tag,
}) => {
  const classNames = classnames(
    'sage-list',
    className,
    {
      'sage-list--all-draggable': sortableConfigs && sortableConfigs.handle === false,
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
          <ListItem key={id} sortable={!!sortableConfigs} {...rest}>
            {itemRenderer && itemRenderer({ id, ...rest })}
          </ListItem>
        ))}
      </>
    );
  };

  const Tag = tag;

  const localSortableConfigs = {
    handle: '.sage-list__item-sortable-handle',
    /*
      NOTE: This is added because Safari 13+ has a draggable api bug.
      Yet we allow the user to override if desired.
      https://github.com/SortableJS/Sortable/issues/1571
    */
    forceFallback: true,
    /*
      NOTE: Order matters here as the values above `...sortableConfigs`
      are defaults that we allow to be overridden,
      while values that come after the spread are values we want fixed.
    */
    ...sortableConfigs,
    chosenClass: 'sage-list__item--sortable-active',
    className: classNames,
    dragClass: 'sage-list__item--sortable-drag',
    ghostClass: 'sage-list__item--sortable-ghost',
    list: items,
    /*
      NOTE: `tag` is allowed as a primary property for non-sortable lists,
      so we allow it to be passed directly here for sortable list
      rather than leaving it only available through `sortableConfigs`
    */
    tag,
    /*
      NOTE: `onEnd` and `onStart` need to come after this
      so that they override any function provided for these.
      For these, we need a little default behavior for these
      that will then call a provided function if it is present.
    */
    onEnd: (evt) => {
      evt.srcElement.classList.remove(draggingClassname);
      if (sortableConfigs.onEnd) {
        sortableConfigs.onEnd(evt);
      }
    },
    onStart: (evt) => {
      evt.srcElement.classList.add(draggingClassname);
      if (sortableConfigs.onStart) {
        sortableConfigs.onStart(evt);
      }
    },
  };

  return sortableConfigs ? (
    <ReactSortable {...localSortableConfigs}>
      {renderItems()}
    </ReactSortable>
  ) : (
    <Tag className={classNames}>
      {renderItems()}
    </Tag>
  );
};

List.Item = ListItem;

List.defaultProps = {
  children: null,
  className: null,
  hideFirstBorder: false,
  items: [],
  itemRenderer: null,
  sortableConfigs: null,
  tag: 'ul',
};

List.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  hideFirstBorder: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      children: PropTypes.node,
      chosen: PropTypes.bool, // From react-sortablejs
      className: PropTypes.string,
      filtered: PropTypes.bool, // From react-sortablejs
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      moreActions: PropTypes.shape({ ...OptionsDropdown.propTypes }),
      sortable: PropTypes.bool,
      selected: PropTypes.bool, // From react-sortablejs
    })
  ),
  itemRenderer: PropTypes.func,
  sortableConfigs: PropTypes.shape({
    handle: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf(false)]),
    onEnd: PropTypes.func,
    onStart: PropTypes.func,
    setList: PropTypes.func, // Same as useState[1]
    // NOTE: See https://github.com/SortableJS/react-sortablejs for full list of additional options
  }),
  tag: PropTypes.oneOf(['ul', 'ol']),
};
