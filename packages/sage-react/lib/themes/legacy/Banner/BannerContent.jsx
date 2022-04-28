import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const BannerContent = ({
  active,
  children,
  className,
  dismissable,
  id,
  link,
  text,
  type,
  ...rest
}) => {
  const classNames = classnames(
    'sage-banner',
    className,
    {
      [`sage-banner--${type}`]: type,
      [`sage-banner--active`]: active,
    }
  );

  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  );
};

BannerContent.defaultProps = {
  active: null,
  bannerContext: null,
  children: null,
  className: null,
  dismissable: null,
  id: null,
  link: null,
  text: null,
  type: null
};

BannerContent.propTypes = {
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
