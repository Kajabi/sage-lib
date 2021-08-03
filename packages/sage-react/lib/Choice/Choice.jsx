import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const Choice = ({
  className,
  isActive,
  ...rest
}) => {
  const baseClass = 'sage-choice';
  const classNames = classnames(
    baseClass,
    className,
    {
      [`${baseClass}--active`]: isActive,
    }
  );
  return (
    <div className={classNames} {...rest}>
      <h1>Choice!</h1>
    </div>
  );
};

Choice.defaultProps = {
  className: '',
  isActive: false,
};

Choice.propTypes = {
  className: PropTypes.string,
  isActive: PropTypes.bool,
};
