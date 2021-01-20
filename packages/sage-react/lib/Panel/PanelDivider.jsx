import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const PanelDivider = ({
  bleed,
  ...rest
}) => {
  const classNames = classnames({
    'sage-panel__divider': true,
    'sage-panel__divider--full-bleed': bleed,
  });

  return <hr className={classNames} {...rest} />;
};

PanelDivider.defaultProps = {
  bleed: false,
};

PanelDivider.propTypes = {
  bleed: PropTypes.bool,
};
