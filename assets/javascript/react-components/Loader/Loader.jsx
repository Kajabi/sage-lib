import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SHAPES } from './configs';

const Loader = ({
  fillSpace,
  hideWhenDone,
  label,
  loading,
  shape,
  className,
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
    <div className={classNames} data-loading={loading} {...ariaAttrs} />
  );
};

Loader.SHAPES = SHAPES;

Loader.defaultProps = {
  className: '',
  fillSpace: false,
  label: 'Loading content',
  hideWhenDone: true,
  shape: SHAPES.BAR,
};

Loader.propTypes = {
  className: PropTypes.string,
  fillSpace: PropTypes.bool,
  label: PropTypes.string,
  hideWhenDone: PropTypes.bool,
  loading: PropTypes.bool.isRequired,
  shape: PropTypes.oneOf(Object.values(SHAPES)),
};

export default Loader;
