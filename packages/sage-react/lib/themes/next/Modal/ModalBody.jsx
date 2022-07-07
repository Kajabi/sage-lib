import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { MODAL_CONTENT_GAP_OPTIONS, MODAL_CONTENT_SPACINGS } from './configs';

export const ModalBody = ({
  children,
  className,
  gap,
  spacing,
  ...rest
}) => {
  const classNames = classnames(
    'sage-modal__content',
    className,
    {
      [`sage-grid-gap-${gap}`]: gap,
      [`sage-modal__content--spacing-${spacing}`]: spacing,
    }
  );

  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  );
};

ModalBody.GAP_OPTIONS = MODAL_CONTENT_GAP_OPTIONS;
ModalBody.SPACINGS = MODAL_CONTENT_SPACINGS;

ModalBody.defaultProps = {
  children: null,
  className: '',
  gap: MODAL_CONTENT_GAP_OPTIONS.DEFAULT,
  spacing: ModalBody.SPACINGS.DEFAULT,
};

ModalBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  gap: PropTypes.oneOf(Object.values(ModalBody.GAP_OPTIONS)),
  spacing: PropTypes.oneOf(Object.values(ModalBody.SPACINGS)),
};
