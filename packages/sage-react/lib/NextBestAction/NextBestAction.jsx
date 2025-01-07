import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Button } from '../Button';
import { NEXT_BEST_ACTION_COLORS } from './configs';
import { KjbElementIds } from '../configs';

export const NextBestAction = ({
  actions,
  cardColor,
  className,
  description,
  dismissable,
  graphic,
  onClickDismiss,
  kjbElementId,
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
    <div className={classNames} data-kjb-element={kjbElementId}>
      {graphic.element && (
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
        {actions}
      </div>
      {dismissable && (
        <Button
          className="sage-next-best-action__close"
          icon="remove"
          iconOnly={true}
          onClick={onClickDismiss}
          subtle={true}
          small={true}
          kjbElementId={KjbElementIds.closeButton}
        >
          Close
        </Button>
      )}
    </div>
  );
};

NextBestAction.COLORS = NEXT_BEST_ACTION_COLORS;

NextBestAction.defaultProps = {
  actions: null,
  className: '',
  description: null,
  dismissable: true,
  graphic: {
    element: null,
    onRight: false,
  },
  onClickDismiss: null,
  kjbElementId: null,
  title: '',
};

NextBestAction.propTypes = {
  actions: PropTypes.node,
  cardColor: PropTypes.oneOf(Object.values(NEXT_BEST_ACTION_COLORS)).isRequired,
  className: PropTypes.string,
  description: PropTypes.node,
  dismissable: PropTypes.bool,
  graphic: PropTypes.shape({
    element: PropTypes.node,
    onRight: PropTypes.bool,
  }),
  onClickDismiss: PropTypes.func,
  kjbElementId: PropTypes.string,
  title: PropTypes.string,
};
