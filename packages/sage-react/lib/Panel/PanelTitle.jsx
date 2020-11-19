import React from 'react';
import PropTypes from 'prop-types';

const PanelTitle = ({ children, tag, ...rest }) => {
  const TagName = tag || 'h2';

  return (
    <TagName className="sage-panel__title" {...rest}>
      {children}
    </TagName>
  );
};

PanelTitle.defaultProps = {
  children: null,
  tag: null,
};

PanelTitle.propTypes = {
  children: PropTypes.node,
  tag: PropTypes.string,
};

export default PanelTitle;
