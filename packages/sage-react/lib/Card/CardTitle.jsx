import React from 'react';
import PropTypes from 'prop-types';

export const CardTitle = ({ children, tag, ...rest }) => {
  const TagName = tag || 'h3';

  return (
    <TagName className="sage-card__title" {...rest}>{children}</TagName>
  );
};

CardTitle.defaultProps = {
  children: null,
  tag: null,
};

CardTitle.propTypes = {
  children: PropTypes.node,
  tag: PropTypes.string,
};
