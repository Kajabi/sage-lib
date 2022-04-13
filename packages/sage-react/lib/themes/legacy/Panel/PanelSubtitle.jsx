import React from 'react';
import PropTypes from 'prop-types';

export const PanelSubtitle = ({ children, tag, ...rest }) => {
  const TagName = tag || 'h3';

  return (
    <TagName className="sage-panel__subtitle" {...rest}>
      {children}
    </TagName>
  );
};

PanelSubtitle.defaultProps = {
  children: null,
  tag: null,
};

PanelSubtitle.propTypes = {
  children: PropTypes.node,
  tag: PropTypes.string,
};
