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
  /**
   * Content to render within the ModalBody
   */
  children: PropTypes.node,
  /**
   * Class name(s) to be added to the root element
   */
  className: PropTypes.string,
  /**
   * Gap between grid columns
   */
  gap: PropTypes.oneOf(Object.values(ModalBody.GAP_OPTIONS)),
  /**
   * Spacing between grid columns
   */
  spacing: PropTypes.oneOf(Object.values(ModalBody.SPACINGS)),
};
