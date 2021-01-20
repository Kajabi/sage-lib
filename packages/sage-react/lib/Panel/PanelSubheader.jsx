import React from 'react';
import PropTypes from 'prop-types';
import { PanelSubtitle } from './PanelSubtitle';

export const PanelSubheader = ({
  children,
  className,
  title,
  titleTag,
  ...rest
}) => (
  <div className={`sage-panel__subheader ${className || ''}`} {...rest}>
    {title && (
      <PanelSubtitle tag={titleTag}>{title}</PanelSubtitle>
    )}
    {children}
  </div>
);

PanelSubheader.defaultProps = {
  children: null,
  className: '',
  title: null,
  titleTag: 'h3',
};

PanelSubheader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.string,
  titleTag: PropTypes.string,
};
