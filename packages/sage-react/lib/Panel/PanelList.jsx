import React from 'react';
import uuid from 'react-uuid';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SageTokens } from '../configs';
import { PanelListItem } from './PanelListItem';
import { PANEL_LIST_BLOCK_SPACING } from './configs';

export const PanelList = ({
  children,
  className,
  itemClassName,
  itemGridTemplate,
  items,
  blockSpacing,
  wrapItems,
  ...rest
}) => {
  const classNames = classnames(
    'sage-panel__list',
    className,
    {
      [`sage-panel__list--spacing-${blockSpacing}`]: blockSpacing,
    }
  );

  return (
    <ul
      className={classNames}
      {...rest}
    >
      {items && items.map((item) => (wrapItems ? (
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
};

PanelList.SPACING = PANEL_LIST_BLOCK_SPACING;

PanelList.defaultProps = {
  children: null,
  className: '',
  itemClassName: null,
  itemGridTemplate: null,
  items: [],
  blockSpacing: PANEL_LIST_BLOCK_SPACING.DEFAULT,
  wrapItems: true,
};

PanelList.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.node),
  itemClassName: PropTypes.string,
  itemGridTemplate: PropTypes.oneOf(Object.values(SageTokens.GRID_TEMPLATES)),
  blockSpacing: PropTypes.oneOf(Object.values(PANEL_LIST_BLOCK_SPACING)),
  wrapItems: PropTypes.bool,
};
