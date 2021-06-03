import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const Hint = ({
  className,
  text,
  ...rest
}) => {
  const classNames = classnames(
    'sage-hint',
    className,
  );
  return (
    <div className={classNames} {...rest}>
      <h1 className="sage-hint__text">{text} This is a hint, dude!</h1>
    </div>
  );
};

Hint.defaultProps = {
  className: '',
};

Hint.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
};
