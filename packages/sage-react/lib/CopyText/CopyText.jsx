import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SageClassnames } from '../configs';

export const CopyText = ({ children, className, semibold }) => {
  const classNames = classnames(
    'sage-copy-text',
    className,
    {
      'sage-copy-text--semibold': semibold,
    }
  );

  return (
    <>
      <span className={classNames}>
        {children}
      </span>
      <pds-icon name="copy" class={SageClassnames.SPACERS.SM_LEFT} />
    </>
  );
};

CopyText.defaultProps = {
  children: null,
  className: null,
  semibold: false,
};

CopyText.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  semibold: PropTypes.bool,
};
