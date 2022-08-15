import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { IconListItem } from './IconListItem';
import { IconListItemLabel } from './IconListItemLabel';
import { IconListItemSubtext } from './IconListItemSubtext';
import { IconListItemTitle } from './IconListItemTitle';

export const IconList = ({
  children,
  className,
  ...rest
}) => {
  const classNames = classnames(
    'sage-icon-list',
    className,
  );

  return (
    <ul className={classNames} {...rest}>
      {children}
    </ul>
  );
};

IconList.Item = IconListItem;
IconList.ItemLabel = IconListItemLabel;
IconList.ItemSubtext = IconListItemSubtext;
IconList.ItemTitle = IconListItemTitle;

IconList.defaultProps = {
  children: null,
  className: null,
};

IconList.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
