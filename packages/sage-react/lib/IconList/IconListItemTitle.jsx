import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const IconListItemTitle = ({
  children,
  className,
  tag,
  ...rest
}) => {
  const classNames = classnames(
    'sage-icon-list-item__title',
    className,
  );

  const TagName = tag;

  return (
    <TagName className={classNames} {...rest}>
      {children}
    </TagName>
  );
};

IconListItemTitle.defaultProps = {
  children: null,
  className: null,
  tag: 'h4',
};

IconListItemTitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.string,
};
