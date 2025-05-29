import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const Topbar = ({
  className,
  contentLeftDesktop,
  contentLeftMobile,
  contentRight,
  ...rest
}) => {
  const classNames = classnames('sage-topbar', className);

  return (
    <div className={classNames} {...rest}>
      <div className="sage-topbar__left">
        <div className="sage-topbar__left-mobile">
          {contentLeftMobile}
        </div>
        <div className="sage-topbar__left-desktop">
          {contentLeftDesktop}
        </div>
      </div>
      <div className="sage-topbar__right">
        {contentRight}
      </div>
    </div>
  );
};

Topbar.defaultProps = {
  className: null,
  contentLeftDesktop: null,
  contentLeftMobile: null,
  contentRight: null
};

Topbar.propTypes = {
  className: PropTypes.string,
  contentLeftDesktop: PropTypes.node,
  contentLeftMobile: PropTypes.node,
  contentRight: PropTypes.node,
};
