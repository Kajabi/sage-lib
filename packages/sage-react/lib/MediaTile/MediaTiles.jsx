import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import classnames from 'classnames';
import { Grid } from '../Grid';
import { MediaTile } from './MediaTile';

export const MediaTiles = ({
  children,
  className,
  items,
  ...rest
}) => {
  const classNames = classnames(
    'sage-media-tile-container',
    className,
  );

  return (
    <Grid className={classNames} {...rest}>
      {items.map((item) => (
        <MediaTile key={uuid()} {...item} />
      ))}
      {children}
    </Grid>
  );
};

MediaTiles.defaultProps = {
  children: null,
  className: '',
  items: [],
};

MediaTiles.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape(MediaTile.propTypes)),
};
