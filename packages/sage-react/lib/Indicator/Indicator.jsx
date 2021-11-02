import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const Indicator = ({
  className
}) => {
  const classNames = classnames(
    'sage-indicator',
    className,
    {}
  );

  return (
    <div className={classNames}>
      <h1>Hello, world!</h1>
    </div>
  );
};

Indicator.defaultProps = {
  className: null,
};

Indicator.propTypes = {
  className: PropTypes.string,
};
