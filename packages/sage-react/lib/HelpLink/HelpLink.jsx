import React from 'react';
import PropTypes from 'prop-types';
import Link from '../Link';

const HelpLink = ({
  className,
  children,
  labelIsVisible,
  ...rest
}) => (labelIsVisible ? (
  <Link className={`sage-link--help ${className || ''}`} {...rest}>
    {children}
  </Link>
) : (
  <Link className={`sage-link--help-icon-only ${className || ''}`} {...rest}>
    <span className="visually-hidden">
      {children}
    </span>
  </Link>
));

HelpLink.defaultProps = {
  children: (
    <>
      Learn more
    </>
  ),
  className: '',
  labelIsVisible: false,
};

HelpLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  labelIsVisible: PropTypes.bool,
};

export default HelpLink;
