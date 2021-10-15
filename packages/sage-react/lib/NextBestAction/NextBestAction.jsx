import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const NextBestAction = ({ className }) => {
  const baseClass = 'sage-next-best-action';

  const classNames = classnames(
    baseClass,
    className,
    {}
  );

  return (
    <div className={classNames}>
      <h1>Hello, world!</h1>
    </div>
  );
};

NextBestAction.defaultProps = {
  className: '',
};

NextBestAction.propTypes = {
  className: PropTypes.string,
};
