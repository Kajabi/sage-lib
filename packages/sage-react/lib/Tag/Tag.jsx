import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Button } from '../Button';
import { SageTokens } from '../configs';

export const Tag = ({
  className,
  dismissAttributes,
  showDismiss,
  value
}) => {
  const classNames = classnames('sage-tag', className);

  return (
    <span
      className={classNames}
    >
      <span className="sage-tag__value">
        {value}
      </span>
      {showDismiss && (
        <span className="sage-tag__action">
          <Button 
            style={Button.COLORS.SECONDARY}
            subtle={true}
            icon={SageTokens.ICONS.REMOVE}
            iconOnly={true}
            {...dismissAttributes}
          >
            {value}
          </Button>
        </span>
      )}
    </span>
  );
};

Tag.defaultProps = {
  className: null,
  dismissAttributes: null,
  showDismiss: false,
};

Tag.propTypes = {
  className: PropTypes.string,
  dismissAttributes: PropTypes.shape({}),
  showDismiss: PropTypes.bool,
  value: PropTypes.string.isRequired,
};
