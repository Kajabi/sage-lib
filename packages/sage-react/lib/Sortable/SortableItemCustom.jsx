import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SORTABLE_ITEM_TYPES } from './configs';

import { CardRow } from '../Card/CardRow';
import { SageTokens } from '..';

export const SortableItemCustom = ({
  children,
  gridTemplate,
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
      <CardRow gridTemplate={gridTemplate}>
        {children}
      </CardRow>
    </section>
  );
};

SortableItemCustom.TYPES = SORTABLE_ITEM_TYPES;

SortableItemCustom.defaultProps = {
  children: null,
  gridTemplate: null,
  type: SORTABLE_ITEM_TYPES.DEFAULT,
};

SortableItemCustom.propTypes = {
  children: PropTypes.node,
  gridTemplate: PropTypes.oneOf(Object.values(SageTokens.GRID_TEMPLATES)),
  type: PropTypes.oneOf(Object.values(SORTABLE_ITEM_TYPES)),
};
