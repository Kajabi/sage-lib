import React from 'react';
import PropTypes from 'prop-types';

const HelpLink = ({ className, children, href, labelIsVisible, onClick, referrer, target }) => {
  const props = {
    href: href || '#',
    onClick,
    referrer,
    role: onClick ? 'button' : null,
    target,
  };

  return labelIsVisible ? (
    <a className={`sage-link--help ${className}`} {...props}>
      {children}
    </a>
  ) : (
    <a className={`sage-link--help-icon-only ${className}`} {...props}>
      <span className="visually-hidden">
        {children}
      </span>
    </a>
  );
};

HelpLink.defaultProps = {
  children: (
    <>
      Learn more
    </>
  ),
  className: '',
  labelIsVisible: false,
  onClick: null,
  href: null,
  referrer: null,
  target: null,
};

HelpLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  labelIsVisible: PropTypes.bool,
  onClick: PropTypes.func,
  href: PropTypes.string,
  referrer: PropTypes.string,
  target: PropTypes.string,
};

export default HelpLink;
