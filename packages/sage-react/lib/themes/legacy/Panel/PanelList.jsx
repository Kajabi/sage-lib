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
  hideFirstBorder,
  itemClassName,
  itemGridGap,
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
      [`sage-panel__list--block-space-${blockSpacing}`]: blockSpacing,
      'sage-panel__list--hide-first-border': hideFirstBorder,
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
          gap={itemGridGap}
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
  hideFirstBorder: false,
  itemClassName: null,
  itemGridGap: null,
  itemGridTemplate: null,
  items: [],
  blockSpacing: PANEL_LIST_BLOCK_SPACING.DEFAULT,
  wrapItems: true,
};

PanelList.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  hideFirstBorder: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.node),
  itemClassName: PropTypes.string,
  itemGridGap: PropTypes.oneOf(Object.values(SageTokens.GRID_GAP_OPTIONS)),
  itemGridTemplate: PropTypes.oneOf(Object.values(SageTokens.GRID_TEMPLATES)),
  blockSpacing: PropTypes.oneOf(Object.values(PANEL_LIST_BLOCK_SPACING)),
  wrapItems: PropTypes.bool,
};
