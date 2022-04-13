import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const CardDivider = ({ fullBleed, className, ...rest }) => {
  const classNames = classnames(
    'sage-card__divider',
    className,
    {
      'sage-card__divider--full-bleed': fullBleed,
    },
  );

  return <hr className={classNames} {...rest} />;
};

CardDivider.defaultProps = {
  fullBleed: false,
  className: null,
};

CardDivider.propTypes = {
  fullBleed: PropTypes.bool,
  className: PropTypes.string,
};
