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
  titleClassName,
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
    <header className={classNames} {...rest}>
      <div className="sage-panel__header-inner">
        {title && (
          <PanelTitle className={titleClassName} tag={titleTag}>{title}</PanelTitle>
        )}
        {subtext && (
          <PanelSubtext>{subtext}</PanelSubtext>
        )}
      </div>
      {children}
    </header>
  );
};

PanelHeader.defaultProps = {
  children: null,
  className: null,
  subtext: null,
  title: null,
  titleTag: 'h2',
  titleClassName: null,
};

PanelHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  subtext: PropTypes.node,
  title: PropTypes.string,
  titleTag: PropTypes.string,
  titleClassName: PropTypes.string,
};
