import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { GridCol } from './GridCol';
import { GridRow } from './GridRow';
import { CONTAINER_SIZES, GRID_BREAKPOINT_TOGGLES } from './configs';

export const Grid = ({
  children,
  className,
  container,
  withRow,
  ...rest
}) => {
  const classNames = classnames(
    className,
    {
      'sage-container': container,
      [`sage-container--${container}`]: container,
    }
  );

  let rowProps = {};
  if (!container) {
    rowProps = {
      ...rest
    };
  }

  const gridChildren = withRow ? (
    <GridRow {...rowProps}>
      {children}
    </GridRow>
  ) : (
    <>
      {children}
    </>
  );

  return container ? (
    <div className={classNames} {...rest}>
      {gridChildren}
    </div>
  ) : (
    <>
      {gridChildren}
    </>
  );
};

Grid.Row = GridRow;
Grid.Col = GridCol;
Grid.CONTAINER_SIZES = CONTAINER_SIZES;
Grid.GRID_BREAKPOINT_TOGGLES = GRID_BREAKPOINT_TOGGLES;

Grid.defaultProps = {
  children: null,
  className: null,
  container: CONTAINER_SIZES.FULL,
  withRow: false,
};

Grid.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  container: PropTypes.oneOf(Object.values(CONTAINER_SIZES)),
  withRow: PropTypes.bool,
};
