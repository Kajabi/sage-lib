import React from 'react';
import uuid from 'react-uuid';
import PropTypes from 'prop-types';
import { SageTokens } from '../configs';
import CardListItem from './CardListItem';

const CardList = ({
  children,
  className,
  itemClassName,
  itemGridTemplate,
  items,
  wrapItems,
  ...rest
}) => (
  <ul
    className={`sage-card__list ${className || ''}`}
    {...rest}
  >
    {items && items.map(item => (wrapItems ? (
      <CardListItem
        key={uuid()}
        className={itemClassName}
        gridTemplate={itemGridTemplate}
      >
        {item}
      </CardListItem>
    ) : (
      <React.Fragment key={uuid()}>
        {item}
      </React.Fragment>
    )))}
    {children}
  </ul>
);

CardList.defaultProps = {
  children: null,
  className: '',
  itemClassName: null,
  itemGridTemplate: null,
  items: [],
  wrapItems: true,
};

CardList.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.node),
  itemClassName: PropTypes.string,
  itemGridTemplate: PropTypes.oneOf(Object.values(SageTokens.GRID_TEMPLATES)),
  wrapItems: PropTypes.bool,
};

export default CardList;
