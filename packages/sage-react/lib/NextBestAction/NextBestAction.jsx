import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Button } from '../Button';
import { NEXT_BEST_ACTION_BUTTON_COLORS, NEXT_BEST_ACTION_COLORS } from './configs';

export const NextBestAction = ({
  button,
  cardColor,
  className,
  desc,
  dismissable,
  image,
  title,
}) => {
  const baseClass = 'sage-next-best-action';

  const classNames = classnames(
    baseClass,
    className,
    {
      [`${baseClass}--${cardColor}`]: cardColor,
    }
  );

  return (
    <div className={classNames}>
      {image && (
        <img
          alt={image.alt}
          className="sage-next-best-action__image"
          src={image.src}
        />
      )}
      <div className="sage-next-best-action__text">
        {title && (
          <h3 className="sage-next-best-action__title">{title}</h3>
        )}
        {desc && (
          <p className="sage-next-best-action__desc">{desc}</p>
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
  desc: '',
  dismissable: true,
  image: {
    alt: '',
    src: '',
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
  desc: PropTypes.string,
  dismissable: PropTypes.bool,
  image: PropTypes.shape({
    alt: PropTypes.string,
    src: PropTypes.string,
  }),
  title: PropTypes.string,
};
