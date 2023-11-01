import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const ModalHeaderActions = ({
  children,
  className,
  ...rest
}) => {
  const classNames = classnames(
    'sage-modal__header-actions',
    className,
  );

  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  );
};

ModalHeaderActions.defaultProps = {
  children: null,
  className: '',
};

ModalHeaderActions.propTypes = {
  /**
   * Content to render within the ModalHeaderActions
   */
  children: PropTypes.node,
  /**
   * Class name(s) to be added to the root element
   */
  className: PropTypes.string,
};
