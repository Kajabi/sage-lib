import React from 'react';
import PropTypes from 'prop-types';
import { PanelTitle } from './PanelTitle';

export const PanelHeader = ({
  children,
  className,
  title,
  titleTag,
  ...rest
}) => (
  <div className={`sage-panel__header ${className || ''}`} {...rest}>
    {title && (
      <PanelTitle tag={titleTag}>{title}</PanelTitle>
    )}
    {children}
  </div>
);

PanelHeader.defaultProps = {
  children: null,
  className: '',
  title: null,
  titleTag: 'h2',
};

PanelHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.string,
  titleTag: PropTypes.string,
};
