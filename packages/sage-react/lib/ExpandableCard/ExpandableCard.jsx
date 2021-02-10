import React, { useState } from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import { Button } from '../Button';
import { SageTokens } from '../configs';

export const ExpandableCard = ({ triggerLabel, bodyBordered, children, }) => {
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

  return (
    <div className="sage-expandable-card">
      <Button
        aria-controls={id}
        aria-expanded={selfActive}
        color="primary"
        icon={SageTokens.ICONS.CARET_RIGHT}
        subtle={true}
        className="sage-expandable-card__trigger"
        onClick={handleTriggerClick}
      >
        {triggerLabel}
      </Button>
      <div id={id} className={`${bodyBordered ? 'sage-expandable-card__body__bordered' : 'sage-expandable-card__body'}`}>
        {children}
      </div>
    </div>
  );
};

ExpandableCard.defaultProps = {
  triggerLabel: null,
  bodyBordered: false,
  children: null,
};

ExpandableCard.propTypes = {
  triggerLabel: PropTypes.string,
  bodyBordered: PropTypes.bool,
  children: PropTypes.node,
};
