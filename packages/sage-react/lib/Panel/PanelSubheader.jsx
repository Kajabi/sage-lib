import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { PanelSubtext } from './PanelSubtext';
import { PanelSubtitle } from './PanelSubtitle';

export const PanelSubheader = ({
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
    'sage-panel__subheader',
    className,
    {
      'sage-panel__subheader--custom': isCustom
    }
  );

  return (
    <header className={classNames} {...rest}>
      {title && (
        <PanelSubtitle tag={titleTag}>{title}</PanelSubtitle>
      )}
      {children}
      {subtext && (
        <PanelSubtext>{subtext}</PanelSubtext>
      )}
    </header>
  );
};

PanelSubheader.defaultProps = {
  children: null,
  className: '',
  subtext: null,
  title: null,
  titleTag: 'h3',
};

PanelSubheader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  subtext: PropTypes.node,
  title: PropTypes.string,
  titleTag: PropTypes.string,
};
