import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Button } from '../Button';
import { NEXT_BEST_ACTION_BUTTON_COLORS, NEXT_BEST_ACTION_COLORS } from './configs';

export const NextBestAction = ({
  button,
  cardColor,
  className,
  description,
  dismissable,
  graphic,
  title,
}) => {
  const baseClass = 'sage-next-best-action';

  const classNames = classnames(
    baseClass,
    className,
    {
      [`${baseClass}--${cardColor}`]: cardColor,
      [`${baseClass}--graphic-on-right`]: graphic.onRight,
    }
  );

  return (
    <div className={classNames}>
      {graphic && (
        <div className="sage-next-best-action__graphic">
          {graphic.element}
        </div>
      )}
      <div className="sage-next-best-action__text">
        {title && (
          <h3 className="sage-next-best-action__title">{title}</h3>
        )}
        {description && (
          <div className="sage-next-best-action__description">
            {description}
          </div>
        )}
        {button && (
          <Button
            color={button.style}
          >
            {button.text}
          </Button>
        )}
      </div>
      {dismissable && (
        <Button
          className="sage-next-best-action__close"
          icon="remove"
          iconOnly="true"
          subtle="true"
          small="true"
        >
          Close
        </Button>
      )}
    </div>
  );
};

NextBestAction.BUTTON_COLORS = NEXT_BEST_ACTION_BUTTON_COLORS;
NextBestAction.COLORS = NEXT_BEST_ACTION_COLORS;

NextBestAction.defaultProps = {
  button: {
    style: NextBestAction.BUTTON_COLORS.DANGER,
    text: '',
  },
  className: '',
  description: '',
  dismissable: true,
  graphic: {
    element: '',
    onRight: false,
  },
  title: '',
};

NextBestAction.propTypes = {
  button: PropTypes.shape({
    style: PropTypes.oneOf(Object.values(NEXT_BEST_ACTION_BUTTON_COLORS)),
    text: PropTypes.string,
  }),
  cardColor: PropTypes.oneOf(Object.values(NEXT_BEST_ACTION_COLORS)).isRequired,
  className: PropTypes.string,
  description: PropTypes.string,
  dismissable: PropTypes.bool,
  graphic: PropTypes.shape({
    element: PropTypes.string,
    onRight: PropTypes.bool,
  }),
  title: PropTypes.string,
};
