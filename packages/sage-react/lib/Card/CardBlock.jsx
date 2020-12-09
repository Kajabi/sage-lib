import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SageClassnames } from '../';

const CardBlock = ({
  children,
  className,
  sageType,
  ...rest
}) => {
  const classNames = classnames(
    'sage-card__block',
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

CardBlock.defaultProps = {
  children: null,
  className: '',
  sageType: false,
};

CardBlock.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  sageType: PropTypes.bool,
};

export default CardBlock;
