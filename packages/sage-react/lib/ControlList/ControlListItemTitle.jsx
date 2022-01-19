import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const ControlListItemTitle = ({
  children,
  className,
  tag,
  ...rest
}) => {
  const classNames = classnames(
    'sage-control-list-item__title',
    className,
  );

  const TagName = tag;

  return (
    <TagName className={classNames} {...rest}>
      {children}
    </TagName>
  );
};

ControlListItemTitle.defaultProps = {
  children: null,
  className: null,
  tag: 'h4',
};

ControlListItemTitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.string,
};
