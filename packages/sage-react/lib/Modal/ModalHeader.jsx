import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { ModalHeaderAside } from './ModalHeaderAside';
import { SageClassnames } from '../configs';

export const ModalHeader = ({
  aside,
  children,
  className,
  title,
  ...rest
}) => {
  const classNames = classnames(
    'sage-modal__header',
    className,
  );

  return (
    <header className={classNames} {...rest}>
      {title && <h5 className={SageClassnames.TYPE.HEADING_4}>{title}</h5>}
      {children}
      {aside && <ModalHeaderAside>{aside}</ModalHeaderAside>}
    </header>
  );
};

ModalHeader.Aside = ModalHeaderAside;

ModalHeader.defaultProps = {
  aside: null,
  children: null,
  className: null,
  title: null,
};

ModalHeader.propTypes = {
  aside: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.string,
};
