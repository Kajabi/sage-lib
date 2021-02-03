import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SORTABLE_ITEM_TYPES } from './configs';

export const SortableItem = ({
  title,
  subtitle,
  actionItems,
  image,
  type,
  ...rest
}) => {
  const className = classnames(
    'sage-sortable__item',
    {
      'sage-sortable__item--card': type === SORTABLE_ITEM_TYPES.CARD,
    }
  );

  return (
    <section
      {...rest}
      className={className}
    >
      {image && (
        <div className="sage-sortable__item-image">
          <img
            src={image}
            alt={`Cover for ${title}`}
          />
        </div>
      )}
      <div className="sage-sortable__item-content">
        <h1 className="sage-sortable__item-title">
          {title}
        </h1>
        {subtitle && (
          <h2 className="sage-sortable__item-subtitle">
            {subtitle}
          </h2>
        )}
      </div>
      {actionItems && (
        <div className="sage-sortable__item-actions">
          {actionItems}
        </div>
      )}
    </section>
  );
};

SortableItem.TYPES = SORTABLE_ITEM_TYPES;

SortableItem.defaultProps = {
  actionItems: null,
  subtitle: null,
  image: null,
  type: SORTABLE_ITEM_TYPES.DEFAULT,
};

SortableItem.propTypes = {
  actionItems: PropTypes.arrayOf(PropTypes.node),
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  type: PropTypes.oneOf(Object.values(SORTABLE_ITEM_TYPES)),
};
