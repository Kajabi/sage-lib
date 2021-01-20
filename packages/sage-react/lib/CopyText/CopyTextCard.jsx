import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const CopyTextCard = ({ children, className, semibold }) => {
  const classNames = classnames(
    'sage-copy-text-card',
    className,
    {
      'sage-copy-text-card--semibold': semibold,
    }
  );

  return (
    <div className={classNames}>
      {children}
    </div>
  );
};

CopyTextCard.defaultProps = {
  children: null,
  className: null,
  semibold: false,
};

CopyTextCard.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  semibold: PropTypes.bool,
};
