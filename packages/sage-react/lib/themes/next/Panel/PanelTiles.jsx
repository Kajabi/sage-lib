import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import classnames from 'classnames';
import { PanelTile } from './PanelTile';
import { PANEL_TILE_OPTIONS_ARRAY } from './configs';

export const PanelTiles = ({
  children,
  className,
  tileClassName,
  tiles,
  tilesInRow,
  wrapTiles,
  ...rest
}) => {
  const classNames = classnames(
    'sage-panel__tiles',
    className,
    {
      [`sage-panel__tiles--${tilesInRow}-up`]: tilesInRow,
    }
  );

  return (
    <div
      className={classNames}
      {...rest}
    >
      {tiles && tiles.map((tile) => (wrapTiles ? (
        <PanelTile
          key={uuid()}
          className={tileClassName}
        >
          {tile}
        </PanelTile>
      ) : (
        <React.Fragment key={uuid()}>
          {tile}
        </React.Fragment>
      )))}
      {children}
    </div>
  );
};

PanelTiles.defaultProps = {
  children: null,
  className: null,
  tileClassName: null,
  tiles: [],
  tilesInRow: 2,
  wrapTiles: true,
};

PanelTiles.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tileClassName: PropTypes.string,
  tiles: PropTypes.arrayOf(PropTypes.node),
  tilesInRow: PropTypes.oneOf(PANEL_TILE_OPTIONS_ARRAY),
  wrapTiles: PropTypes.bool,
};
