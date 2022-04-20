import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Loader } from '../Loader';
import { PanelBlock } from './PanelBlock';
import { PanelDivider } from './PanelDivider';
import { PanelFigure } from './PanelFigure';
import { PanelFooter } from './PanelFooter';
import { PanelHeader } from './PanelHeader';
import { PanelList } from './PanelList';
import { PanelListItem } from './PanelListItem';
import { PanelRow } from './PanelRow';
import { PanelStack } from './PanelStack';
import { PanelSubheader } from './PanelSubheader';
import { PanelSubtext } from './PanelSubtext';
import { PanelSubtitle } from './PanelSubtitle';
import { PanelTile } from './PanelTile';
import { PanelTiles } from './PanelTiles';
import { PanelTitle } from './PanelTitle';

export const Panel = ({
  children,
  className,
  clearPaddingBoth,
  clearPaddingBottom,
  clearPaddingTop,
  loading,
  ...rest
}) => {
  const classNames = classnames(
    'sage-panel',
    className,
    {
      'sage-panel--clear-padding-top': clearPaddingTop,
      'sage-panel--clear-padding-bottom': clearPaddingBottom,
      'sage-panel--clear-padding-both': clearPaddingBoth,
    }
  );

  return (
    <div className={classNames} {...rest}>
      {loading ? (
        <Loader loading={true} fillSpace={true} type={Loader.TYPES.SPINNER} />
      ) : children}
    </div>
  );
};

Panel.Block = PanelBlock;
Panel.Divider = PanelDivider;
Panel.Figure = PanelFigure;
Panel.Footer = PanelFooter;
Panel.Header = PanelHeader;
Panel.List = PanelList;
Panel.ListItem = PanelListItem;
Panel.Row = PanelRow;
Panel.Stack = PanelStack;
Panel.Subheader = PanelSubheader;
Panel.Subtext = PanelSubtext;
Panel.Subtitle = PanelSubtitle;
Panel.Tile = PanelTile;
Panel.Tiles = PanelTiles;
Panel.Title = PanelTitle;

Panel.defaultProps = {
  children: null,
  className: null,
  clearPaddingBoth: false,
  clearPaddingBottom: false,
  clearPaddingTop: false,
  loading: false,
};

Panel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  clearPaddingBoth: PropTypes.bool,
  clearPaddingBottom: PropTypes.bool,
  clearPaddingTop: PropTypes.bool,
  loading: PropTypes.bool,
};
