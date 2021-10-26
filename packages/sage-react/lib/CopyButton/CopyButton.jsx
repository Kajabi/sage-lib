import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Button } from '../Button';
import { CopyText } from '../CopyText';
import { SageTokens } from '../configs';

export const CopyButton = ({
  borderless,
  children,
  className,
  fillContainer,
  semibold
}) => {
  const classNames = classnames(
    'sage-copy-btn',
    className,
    {
      'sage-copy-btn--fill-container': fillContainer,
      'sage-copy-btn--borderless': borderless,
    }
  );

  const btnRef = useRef(null);

  const onClick = () => {
    navigator.clipboard.writeText(btnRef.current.innerText);
  };

  const renderCopyButton = () => {
    if (borderless) {
      return (
        <>
          <Button
            ref={btnRef}
            className={classNames}
            color={Button.COLORS.SECONDARY}
            icon={SageTokens.ICONS.COPY}
            iconPosition={Button.ICON_POSITIONS.RIGHT}
            subtle={true}
            type="button"
            onClick={onClick}
          >
            {children}
          </Button>
        </>
      );
    }
    return (
      <>
        <button
          ref={btnRef}
          className={classNames}
          type="button"
          onClick={onClick}
        >
          <CopyText semibold={semibold}>
            {children}
          </CopyText>
        </button>
      </>
    );
  };
  return (
    renderCopyButton()
  );
};

CopyButton.defaultProps = {
  borderless: false,
  children: null,
  className: null,
  fillContainer: false,
  semibold: true,
};

CopyButton.propTypes = {
  borderless: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  fillContainer: PropTypes.bool,
  semibold: PropTypes.bool,
};
