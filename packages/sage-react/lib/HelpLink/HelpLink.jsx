import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '../Link';
import { hasAriaName, iconOnlyNamePropType } from '../helpers/accessibleName';

export const HelpLink = ({
  className,
  children,
  labelIsVisible,
  linkTag,
  ...rest
}) => (
  <Link
    className={`${labelIsVisible ? 'sage-link sage-link--help' : 'sage-link sage-link--help-icon-only'} ${className || ''}`}
    suppressDefaultClass={true}
    tag={linkTag}
    {...rest}
  >
    <pds-icon name="question-circle" size="20px" aria-hidden={children || hasAriaName(rest) ? 'true' : undefined} />
    {!labelIsVisible ? (
      <span className="visually-hidden">
        {children}
      </span>
    ) : children}
  </Link>
);

HelpLink.defaultProps = {
  'aria-label': null,
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
  'aria-label': iconOnlyNamePropType((props) => !props.children),
  children: PropTypes.node,
  className: PropTypes.string,
  labelIsVisible: PropTypes.bool,
  linkTag: Link.tagPropTypes,
};
