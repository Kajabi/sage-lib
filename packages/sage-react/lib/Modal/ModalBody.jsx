import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const ModalBody = ({
  children,
  className,
  ...rest
}) => {
  const classNames = classnames(
    'sage-modal__content',
    className,
  );

  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  );
};

ModalBody.defaultProps = {
  children: null,
  className: '',
};

ModalBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default ModalBody;
