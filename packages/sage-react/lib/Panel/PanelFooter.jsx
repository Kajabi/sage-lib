import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const PanelFooter = ({
  alignSpread,
  children,
  className,
  ...rest
}) => {
  const classNames = classnames(
    'sage-panel__footer',
    className,
    {
      'sage-panel__footer--align-spread': alignSpread,
    }
  );

  return (
    <div
      className={classNames}
      {...rest}
    >
      {children}
    </div>
  );
};

PanelFooter.defaultProps = {
  alignSpread: false,
  children: null,
  className: '',
};

PanelFooter.propTypes = {
  alignSpread: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default PanelFooter;
