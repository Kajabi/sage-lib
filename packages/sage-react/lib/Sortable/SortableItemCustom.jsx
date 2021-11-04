import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SORTABLE_ROW_GAP_OPTIONS, SORTABLE_ITEM_TYPES } from './configs';

import { CardRow } from '../Card/CardRow';
import { SageTokens } from '..';

export const SortableItemCustom = ({
  children,
  gridTemplate,
  gap,
  type,
  ...rest
}) => {
  const className = classnames(
    'sage-sortable__item',
    'sage-sortable__item--custom',
    {
      'sage-sortable__item--card': type === SORTABLE_ITEM_TYPES.CARD,
    }
  );

  return (
    <section
      {...rest}
      className={className}

    >
      <CardRow gridTemplate={gridTemplate} gap={gap}>
        {children}
      </CardRow>
    </section>
  );
};

SortableItemCustom.TYPES = SORTABLE_ITEM_TYPES;
SortableItemCustom.GAP_OPTIONS = SORTABLE_ROW_GAP_OPTIONS;

SortableItemCustom.defaultProps = {
  children: null,
  gap: SORTABLE_ROW_GAP_OPTIONS.DEFAULT,
  gridTemplate: null,
  type: SORTABLE_ITEM_TYPES.DEFAULT,
};

SortableItemCustom.propTypes = {
  children: PropTypes.node,
  gap: PropTypes.oneOf(Object.values(SortableItemCustom.GAP_OPTIONS)),
  gridTemplate: PropTypes.oneOf(Object.values(SageTokens.GRID_TEMPLATES)),
  type: PropTypes.oneOf(Object.values(SORTABLE_ITEM_TYPES)),
};
