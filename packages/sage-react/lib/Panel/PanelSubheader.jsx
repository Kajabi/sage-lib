import React from 'react';
import PropTypes from 'prop-types';
import { PanelSubtext } from './PanelSubtext';
import { PanelSubtitle } from './PanelSubtitle';

export const PanelSubheader = ({
  children,
  className,
  subtext,
  title,
  titleTag,
  ...rest
}) => (
  <div className={`sage-panel__subheader ${className || ''}`} {...rest}>
    {title && (
      <PanelSubtitle tag={titleTag}>{title}</PanelSubtitle>
    )}
    {children}
    {subtext && (
      <PanelSubtext>{subtext}</PanelSubtext>
    )}
  </div>
);

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
