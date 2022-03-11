import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const Tag = ({
  action,
  className, 
  value 
}) => {
  const classNames = classnames('sage-tag', className);

  return (
    <span
      tabIndex="0"
      className={classNames}
    >
      <span className="sage-tag__value">
        {value}
      </span>
      {action && (
        <span className="sage-tag__action">
          {action}
        </span>
      )}
    </span>
  );
};

Tag.defaultProps = {
  action: null,
  className: null,
  value: 'Label'
};

Tag.propTypes = {
  action: PropTypes.node,
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
};
