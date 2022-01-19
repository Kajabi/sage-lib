import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { ControlListItem } from './ControlListItem';
import { ControlListItemLabel } from './ControlListItemLabel';
import { ControlListItemSubtext } from './ControlListItemSubtext';
import { ControlListItemTitle } from './ControlListItemTitle';

export const ControlList = ({
  children,
  className,
  ...rest
}) => {
  const classNames = classnames(
    'sage-control-list',
    className,
  );

  return (
    <ul className={classNames} {...rest}>
      {children}
    </ul>
  );
};

ControlList.Item = ControlListItem;
ControlList.ItemLabel = ControlListItemLabel;
ControlList.ItemSubtext = ControlListItemSubtext;
ControlList.ItemTitle = ControlListItemTitle;

ControlList.defaultProps = {
  children: null,
  className: null,
};

ControlList.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
