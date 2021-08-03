import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const Choice = ({
  className,
  ...rest
}) => {
  const classNames = classnames(
    'sage-choice',
    className,
  );
  return (
    <div className={classNames} {...rest}>
      <h1>Choice!</h1>
    </div>
  );
};

Choice.defaultProps = {
  className: ''
};

Choice.propTypes = {
  className: PropTypes.string,
};
