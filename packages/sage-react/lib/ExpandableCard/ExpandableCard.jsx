import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import uuid from 'react-uuid';
import { Button } from '../Button';
import { SageClassnames, SageTokens } from '../configs';

export const ExpandableCard = ({ bodyBordered, children, className, sageType, triggerLabel, }) => {
  const [selfActive, setSelfActive] = useState(false);

  const handleBodyToggle = () => {
    if (selfActive) {
      setSelfActive(false);
    }
  };

  const handleTriggerClick = () => {
    setSelfActive(true);
    handleBodyToggle();
  };

  const id = uuid();

  const bodyClassnames = classnames({
    'sage-expandable-card__body-bordered': bodyBordered,
    'sage-expandable-card__body': !bodyBordered,
    [`${SageClassnames.TYPE_BLOCK}`]: sageType,
  });

  return (
    <div className={`sage-expandable-card ${className || ''}`}>
      <Button
        aria-controls={id}
        aria-expanded={selfActive}
        className="sage-expandable-card__trigger"
        color="primary"
        fullWidth={true}
        icon={SageTokens.ICONS.CARET_RIGHT}
        onClick={handleTriggerClick}
        subtle={true}
      >
        {triggerLabel}
      </Button>
      {selfActive && (
        <div id={id} className={bodyClassnames}>
          {children}
        </div>
      )}
    </div>
  );
};

ExpandableCard.defaultProps = {
  bodyBordered: false,
  children: null,
  className: null,
  sageType: false,
  triggerLabel: null,
};

ExpandableCard.propTypes = {
  bodyBordered: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
  sageType: PropTypes.bool,
  triggerLabel: PropTypes.string,
};
