import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import uuid from 'react-uuid';
import { Button } from '../Button';
import { SageClassnames, SageTokens } from '../configs';

export const ExpandableCard = ({
  alignArrowRight,
  alignTrigger,
  bodyBordered,
  expanded,
  children,
  className,
  customKey,
  headerContent,
  name,
  onClick,
  sageType,
  triggerLabel,
  ...rest
}) => {
  const [isExpanded, setIsExpanded] = useState(expanded);

  useEffect(() => {
    setIsExpanded(expanded);
  }, [expanded]);

  const handleChange = (event) => {
    setIsExpanded(!isExpanded);
    if (onClick) {
      onClick(event, !isExpanded);
    }
  };

  const id = customKey || uuid();

  const containerClassnames = classnames(
    'sage-expandable-card',
    {
      'sage-expandable-card--align-arrow-right': alignArrowRight,
      'sage-expandable-card--expanded': isExpanded
    }
  );

  const bodyClassnames = classnames({
    'sage-expandable-card__body-bordered': bodyBordered,
    'sage-expandable-card__body': !bodyBordered,
    [`${SageClassnames.TYPE_BLOCK}`]: sageType,
  });

  const determineAlignment = () => {
    const className = 'sage-expandable-card__header';
    const ButtonWrapper = ({ ...rest }) => (
      <Button
        aria-controls={id}
        aria-expanded={isExpanded}
        className="sage-expandable-card__trigger"
        color="secondary"
        fullWidth={true}
        icon={SageTokens.ICONS.CARET_RIGHT}
        onClick={handleChange}
        subtle={true}
        {...rest}
      >
        {triggerLabel}
      </Button>
    );

    if (alignTrigger === 'middle') {
      return (
        <>
          <ButtonWrapper />
        </>
      );
    }
    return (
      <div className={`${className} sage-expandable-card__trigger-${alignTrigger}`}>
        <ButtonWrapper iconOnly={true} fullWidth={false} />
        <div>{headerContent}</div>
      </div>
    );
  };

  return (
    <div className={`${containerClassnames} ${className || ''}`} {...rest}>
      {determineAlignment()}

      <div id={id} className={bodyClassnames}>
        {children}
      </div>
    </div>
  );
};

ExpandableCard.defaultProps = {
  alignArrowRight: false,
  bodyBordered: false,
  expanded: false,
  children: null,
  className: null,
  customKey: null,
  headerContent: null,
  alignTrigger: 'middle',
  name: null,
  onClick: null,
  sageType: false,
  triggerLabel: null,
};

ExpandableCard.propTypes = {
  alignArrowRight: PropTypes.bool,
  bodyBordered: PropTypes.bool,
  customKey: PropTypes.string,
  headerContent: PropTypes.node,
  expanded: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
  alignTrigger: PropTypes.oneOf(['left', 'middle', 'right']),
  name: PropTypes.string,
  onClick: PropTypes.func,
  sageType: PropTypes.bool,
  triggerLabel: PropTypes.string,
};
