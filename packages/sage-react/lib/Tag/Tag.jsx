import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Button } from '../Button';
import { SageTokens } from '../configs';

export const Tag = ({
  className,
  dismissAttributes,
  image,
  showDismiss,
  value,
  ...rest
}) => {
  const classNames = classnames(
    'sage-tag',
    className,
    {
      'sage-tag--has-image': image,
    }
  );

  return (
    <span
      className={classNames}
      {...rest}
    >
      {image && (
        <img className="sage-tag__image" src={image} alt="" role="presentation" />
      )}
      <span className="sage-tag__value">
        {value}
      </span>
      {showDismiss && (
        <Button
          className="sage-tag__button"
          color={Button.COLORS.PRIMARY}
          icon={SageTokens.ICONS.REMOVE}
          iconOnly={true}
          subtle={true}
          small={true}
          {...dismissAttributes}
        >
          {value}
        </Button>
      )}
    </span>
  );
};

Tag.defaultProps = {
  className: null,
  dismissAttributes: null,
  image: null,
  showDismiss: false,
};

Tag.propTypes = {
  className: PropTypes.string,
  dismissAttributes: PropTypes.shape({}),
  image: PropTypes.string,
  showDismiss: PropTypes.bool,
  value: PropTypes.string.isRequired,
};
