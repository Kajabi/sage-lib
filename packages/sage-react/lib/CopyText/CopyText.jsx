import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const CopyText = ({ children, className, semibold }) => {
  const classNames = classnames(
    'sage-copy-text',
    className,
    {
      'sage-copy-text--semibold': semibold,
    }
  );

  return (
    <span className={classNames}>
      {children}
    </span>
  );
};

CopyText.defaultProps = {
  children: null,
  className: null,
  semibold: false,
};

CopyText.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  semibold: PropTypes.bool,
};
