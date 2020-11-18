import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { LOADER_SHAPES } from './configs';

const Loader = ({
  fillSpace,
  hideWhenDone,
  label,
  loading,
  shape,
  className,
  ...rest
}) => {
  const classNames = classnames(
    'sage-loader',
    className,
    {
      'sage-loader--fill': fillSpace,
      [`sage-loader--${shape}`]: shape,
      'visually-hidden': !loading && hideWhenDone,
    }
  );

  const ariaAttrs = {
    'aria-label': loading ? label : null,
    'aria-hidden': !loading,
  };

  return (
    <div className={classNames} data-loading={loading} {...ariaAttrs} {...rest} />
  );
};

Loader.SHAPES = LOADER_SHAPES;

Loader.defaultProps = {
  className: '',
  fillSpace: false,
  label: 'Loading content',
  hideWhenDone: true,
  shape: LOADER_SHAPES.BAR,
};

Loader.propTypes = {
  className: PropTypes.string,
  fillSpace: PropTypes.bool,
  hideWhenDone: PropTypes.bool,
  label: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  shape: PropTypes.oneOf(Object.values(LOADER_SHAPES)),
};

export default Loader;
