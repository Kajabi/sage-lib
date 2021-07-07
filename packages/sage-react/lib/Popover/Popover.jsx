import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import uuid from 'react-uuid';
import { Button } from '../Button';
import { SageTokens } from '../configs';
import { POPOVER_POSITIONS } from './configs';

export const Popover = ({
  className,
  children,
  customContentClassName,
  icon,
  iconOnly,
  label,
  moreLinkURL,
  moreLinkText,
  position,
  title,
  ...rest
}) => {
  const [selfActive, setSelfActive] = useState(false);

  const handleExpandClick = () => {
    setSelfActive(true);
  };

  const handleCloseClick = () => {
    setSelfActive(false);
  };

  const handleKeydown = (ev) => {
    if (selfActive && ev.keyCode === 27) {
      setSelfActive(false);
    }
  };

  const classNames = classnames(
    'sage-popover',
    className,
    {
      'sage-popover--is-expanded': selfActive,
      [`sage-popover--${position}`]: position,
    }
  );

  const contentClassNames = classnames(
    'sage-popover__content',
    customContentClassName,
    {
      'sage-popover__content--custom': customContentClassName,
    }
  );

  const id = uuid();

  return (
    <div
      id={id}
      className={classNames}
      role="button"
      onKeyDown={handleKeydown}
      tabIndex={-1}
      {...rest}
    >
      <Button
        aria-controls={id}
        aria-expanded={selfActive}
        aria-haspopup={true}
        className="sage-popover__button"
        color={Button.COLORS.SECONDARY}
        icon={icon}
        iconOnly={iconOnly}
        onClick={handleExpandClick}
        subtle={true}
      >
        {label}
      </Button>
      <div
        className="sage-popover__overlay"
        aria-label="Exit popover"
        onClick={handleCloseClick}
        role="button"
        onKeyDown={handleKeydown}
        tabIndex={-1}
      />
      <div className="sage-popover__panel">
        {title && (
          <h5 className="sage-popover__title">{title}</h5>
        )}
        <div className={contentClassNames}>
          {children}
        </div>
        {moreLinkURL && (
          <div className="sage-popover__actions">
            <Button
              color={Button.COLORS.PRIMARY}
              href={moreLinkURL}
              target="_blank"
              rel="noreferrer noopener"
              icon={SageTokens.ICONS.LAUNCH}
              iconPosition={Button.ICON_POSITIONS.RIGHT}
              subtle={true}
            >
              {moreLinkText}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

Popover.POSITIONS = POPOVER_POSITIONS;

Popover.defaultProps = {
  className: null,
  children: null,
  customContentClassName: null,
  icon: SageTokens.ICONS.QUESTION_CIRCLE,
  iconOnly: true,
  label: 'Learn more',
  moreLinkURL: null,
  moreLinkText: 'Learn more',
  position: Popover.POSITIONS.BOTTOM,
  title: null,
};

Popover.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  customContentClassName: PropTypes.string,
  icon: PropTypes.oneOf(Object.values(SageTokens.ICONS)),
  iconOnly: PropTypes.bool,
  label: PropTypes.string,
  moreLinkURL: PropTypes.string,
  moreLinkText: PropTypes.string,
  position: PropTypes.oneOf(Object.values(Popover.POSITIONS)),
  title: PropTypes.string,
};
