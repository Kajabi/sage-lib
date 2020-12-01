import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import uuid from 'react-uuid';
import { Button, SageTokens, } from '..';

const Popover = ({ className, children, moreLinkURL, title }) => {
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
    }
  );

  const id = uuid();

  return (
    <div id={id} className={classNames} role="button" onKeyDown={handleKeydown} tabIndex={-1}>
      <Button
        aria-controls={id}
        aria-expanded={selfActive}
        aria-haspopup={true}
        className="sage-popover__button"
        color={Button.COLORS.SECONDARY}
        icon={SageTokens.ICONS.QUESTION_CIRCLE}
        iconOnly={true}
        onClick={handleExpandClick}
        subtle={true}
      >
        Learn more
      </Button>
      <div className="sage-popover__overlay" onClick={handleCloseClick} role="button" onKeyDown={handleKeydown} tabIndex={-1} />
      <div className="sage-popover__panel">
        {title && (
          <h5 className="sage-popover__title">{title}</h5>
        )}
        <div className="sage-popover__content">
          {children}
        </div>
        {moreLinkURL && (
          <div className="sage-popover__actions">
            <Button
              color={Button.COLORS.PRIMARY}
              href={moreLinkURL}
              target="_blank"
              icon={SageTokens.ICONS.LAUNCH}
              iconPosition={Button.ICON_POSITIONS.RIGHT}
              subtle={true}
            >
              Learn more
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

Popover.defaultProps = {
  className: null,
  children: null,
  moreLinkURL: null,
  title: null,
};

Popover.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  moreLinkURL: PropTypes.string,
  title: PropTypes.string,
};

export default Popover;
