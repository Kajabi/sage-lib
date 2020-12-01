import React from 'react';
import PropTypes from 'prop-types';
import Link from '../Link';

const HelpLink = ({
  className,
  children,
  labelIsVisible,
  linkTag,
  ...rest
}) => (
  <Link
    className={`${labelIsVisible ? 'sage-link--help' : 'sage-link--help-icon-only'} ${className || ''}`}
    tag={linkTag}
    {...rest}
  >
    {!labelIsVisible ? (
      <span className="visually-hidden">
        {children}
      </span>
    ) : children}
  </Link>
);

HelpLink.defaultProps = {
  children: (
    <>
      Learn more
    </>
  ),
  className: '',
  labelIsVisible: false,
  linkTag: null,
};

HelpLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  labelIsVisible: PropTypes.bool,
  linkTag: Link.tagPropTypes,
};

export default HelpLink;
