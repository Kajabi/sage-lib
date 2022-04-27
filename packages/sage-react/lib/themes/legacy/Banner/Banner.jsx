import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const Banner = ({
  children,
  className,
  color,
  label,
  ...rest
}) => {
  const classNames = classnames(
    'sage-banner',
    className,
    {

    }
  );

  return (
    // <span className={classNames} style={style} {...attrs} {...rest}>
    //   {children}
    // </span>
  );
};

Banner.defaultProps = {
  active: null,
  bannerContext,
  children: null,
  className: null,
  dismissable: null,
  id: null,
  link: null,
  text: null,
  type: null
};

Banner.propTypes = {
  active: PropTypes.bool,
  bannerContext: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  dismissable: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string,
  // link: ,
  text: PropTypes.string,
  type: PropTypes.string,
};
