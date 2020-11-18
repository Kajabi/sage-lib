import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SageClassnames } from '../';

const PanelBlock = ({
  children,
  className,
  sageType,
  ...rest
}) => {
  const classNames = classnames(
    'sage-panel__block',
    className,
    {
      [`${SageClassnames.TYPE_BLOCK}`]: sageType
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

PanelBlock.defaultProps = {
  children: null,
  className: '',
  sageType: false,
};

PanelBlock.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  sageType: PropTypes.bool,
};

export default PanelBlock;
