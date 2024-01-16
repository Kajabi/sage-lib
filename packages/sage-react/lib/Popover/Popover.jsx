import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import uuid from 'react-uuid';
import { Button } from '../Button';
import { SageTokens } from '../configs';
import { POPOVER_POSITIONS } from './configs';

export const Popover = ({
  active,
  className,
  children,
  customContentClassName,
  icon,
  iconOnly,
  label,
  media,
  moreLinkURL,
  moreLinkText,
  position,
  title,
  ...rest
}) => {
  const [selfActive, setSelfActive] = useState(active);

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
        aria-expanded={selfActive}
      />
      <div className="sage-popover__panel">
        {media && (
          <div className="sage-popoever__media">{media}</div>
        )}
        <div className={contentClassNames}>
          {title && (
            <h5 className="sage-popover__title">{title}</h5>
          )}
          {children}
        </div>
        {moreLinkURL && (
          <div className="sage-popover__actions">
            <Button
              color={Button.COLORS.PRIMARY}
              href={moreLinkURL}
              target="_blank"
              rel="noopener"
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
  active: false,
  className: null,
  children: null,
  customContentClassName: null,
  icon: SageTokens.ICONS.QUESTION_CIRCLE,
  iconOnly: true,
  label: 'Learn more',
  media: null,
  moreLinkURL: null,
  moreLinkText: 'Learn more',
  position: Popover.POSITIONS.BOTTOM,
  title: null,
};

Popover.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
  customContentClassName: PropTypes.string,
  icon: PropTypes.oneOf(Object.values(SageTokens.ICONS)),
  iconOnly: PropTypes.bool,
  label: PropTypes.string,
  media: PropTypes.node,
  moreLinkURL: PropTypes.string,
  moreLinkText: PropTypes.string,
  position: PropTypes.oneOf(Object.values(Popover.POSITIONS)),
  title: PropTypes.string,
};
