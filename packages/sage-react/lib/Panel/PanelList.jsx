import React from 'react';
import uuid from 'react-uuid';
import PropTypes from 'prop-types';
import { SageTokens } from '../configs';
import PanelListItem from './PanelListItem';

const PanelList = ({
  children,
  className,
  itemClassName,
  itemGridTemplate,
  items,
  wrapItems,
  ...rest
}) => (
  <ul
    className={`sage-panel__list ${className || ''}`}
    {...rest}
  >
    {items && items.map(item => (wrapItems ? (
      <PanelListItem
        key={uuid()}
        className={itemClassName}
        gridTemplate={itemGridTemplate}
      >
        {item}
      </PanelListItem>
    ) : (
      <React.Fragment key={uuid()}>
        {item}
      </React.Fragment>
    )))}
    {children}
  </ul>
);

PanelList.defaultProps = {
  children: null,
  className: '',
  itemClassName: null,
  itemGridTemplate: null,
  items: [],
  wrapItems: true,
};

PanelList.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.node),
  itemClassName: PropTypes.string,
  itemGridTemplate: PropTypes.oneOf(Object.values(SageTokens.GRID_TEMPLATES)),
  wrapItems: PropTypes.bool,
};

export default PanelList;
