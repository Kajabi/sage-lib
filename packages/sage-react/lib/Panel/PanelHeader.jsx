import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { PanelSubtext } from './PanelSubtext';
import { PanelTitle } from './PanelTitle';

export const PanelHeader = ({
  children,
  className,
  subtext,
  title,
  titleTag,
  ...rest
}) => {
  let hasSubtextChild = false;
  let childCount = 0;
  React.Children.forEach(children, (child) => {
    childCount += 1;
    if (child.type.name === 'PanelSubtext') hasSubtextChild = true;
  });
  let isCustom = false;
  if ((childCount === 1 && (!hasSubtextChild || !subtext)) || childCount > 1) isCustom = true;

  const classNames = classnames(
    'sage-panel__header',
    className,
    {
      'sage-panel__header--custom': isCustom
    }
  );

  return (
    <div className={classNames} {...rest}>
      {title && (
        <PanelTitle tag={titleTag}>{title}</PanelTitle>
      )}
      {children}
      {subtext && (
        <PanelSubtext>{subtext}</PanelSubtext>
      )}
    </div>
  );
};

PanelHeader.defaultProps = {
  children: null,
  className: '',
  subtext: null,
  title: null,
  titleTag: 'h2',
};

PanelHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  subtext: PropTypes.node,
  title: PropTypes.string,
  titleTag: PropTypes.string,
};
