import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const PropertyGroup = ({
  children,
  className,
  ...rest
}) => {
  const classNames = classnames(
    'sage-property-group',
    className,
  );

  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  );
};

PropertyGroup.defaultProps = {
  className: null,
  children: null,
};

PropertyGroup.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default PropertyGroup;
