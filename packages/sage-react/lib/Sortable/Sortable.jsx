import React from 'react';
import PropTypes from 'prop-types';
import { ReactSortable } from 'react-sortablejs';
import SortableItem from './SortableItem';

const Sortable = ({
  list,
  setList,
  onEnd,
  renderItem,
  ...rest
}) => {
  if (list.length === 0) return (null);

  return (
    <div className="sage-sortable">
      <ReactSortable
        list={list}
        setList={setList}
        onEnd={onEnd}
        ghostClass="sage-sortable__item--ghost"
        chosenClass="sage-sortable__item--active"
        {...rest}
      >
        {list.map(item => renderItem(item))}
      </ReactSortable>
    </div>
  );
};

Sortable.Item = SortableItem;

Sortable.defaultProps = {
};

Sortable.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string
  })).isRequired,
  setList: PropTypes.func.isRequired,
  onEnd: PropTypes.func.isRequired,
  renderItem: PropTypes.func.isRequired,
};

export default Sortable;
