import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { MODAL_CONTENT_SPACINGS } from './configs';

export const ModalBody = ({
  children,
  className,
  spacing,
  ...rest
}) => {
  const classNames = classnames(
    'sage-modal__content',
    className,
    {
      [`sage-modal__content--spacing-${spacing}`]: spacing,
    }
  );

  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  );
};

ModalBody.SPACINGS = MODAL_CONTENT_SPACINGS;

ModalBody.defaultProps = {
  children: null,
  className: '',
  spacing: ModalBody.SPACINGS.DEFAULT,
};

ModalBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  spacing: PropTypes.oneOf(Object.values(ModalBody.SPACINGS)),
};
