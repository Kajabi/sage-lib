import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { CopyText } from '../CopyText';

export const CopyButton = ({ children, className, fillContainer, semibold }) => {
  const classNames = classnames(
    'sage-copy-btn',
    className,
    {
      'sage-copy-btn--fill-container': fillContainer,
    }
  );

  const copyBlockRef = useRef(null);
  const btnRef = useRef(null);

  const onClick = () => {
    copyBlockRef.current.select();
    document.execCommand('copy');
    btnRef.current.focus();
  };

  return (
    <>
      <button ref={btnRef} className={classNames} type="button" onClick={onClick}>
        <CopyText semibold={semibold}>
          {children}
        </CopyText>
      </button>
      <textarea ref={copyBlockRef} className="visually-hidden" defaultValue={children} />
    </>
  );
};

CopyButton.defaultProps = {
  children: null,
  className: null,
  fillContainer: false,
  semibold: true,
};

CopyButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  fillContainer: PropTypes.bool,
  semibold: PropTypes.bool,
};
