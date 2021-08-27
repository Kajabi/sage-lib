import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Grid } from '../Grid';

export const MediaTiles = ({
  className,
  ...rest
}) => {
  const classNames = classnames(
    'sage-media-tile-container',
    className,
  );

  return (
    <Grid className={classNames} {...rest}>
      {children}
    </Grid>
  );
};

MediaTiles.defaultProps = {
  className: '',
};

MediaTiles.propTypes = {
  className: PropTypes.string,
};
