import React from 'react';
import PropTypes from 'prop-types';

const DataCardScrollContainer = ({
  children,
  className,
  ...rest
}) => (
  <div className={`sage-data-card-scroll-container ${className || ''}`} {...rest}>
    <div className="sage-data-card-scroll">
      {children}
    </div>
  </div>
);

DataCardScrollContainer.defaultProps = {
  children: null,
  className: '',
};

DataCardScrollContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default DataCardScrollContainer;
