import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const PanelTitle = ({ children, className, tag, ...rest }) => {
  const TagName = tag || 'h2';

  const classNames = classnames(
    'sage-panel__title',
    className,
  );

  return (
    <TagName className={classNames} {...rest}>
      {children}
    </TagName>
  );
};

PanelTitle.defaultProps = {
  children: null,
  className: null,
  tag: null,
};

PanelTitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.string,
};
