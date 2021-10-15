import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { NEXT_BEST_ACTION_COLORS } from './configs';

export const NextBestAction = ({
  cardColor,
  className,
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
      <div className="sage-next-best-action__text-content">
        {title && (
          <h3 className="sage-next-best-action__title">{title}</h3>
        )}
      </div>
    </div>
  );
};

NextBestAction.COLORS = NEXT_BEST_ACTION_COLORS;

NextBestAction.defaultProps = {
  className: '',
  title: '',
};

NextBestAction.propTypes = {
  cardColor: PropTypes.oneOf(Object.values(NEXT_BEST_ACTION_COLORS)).isRequired,
  className: PropTypes.string,
  title: PropTypes.string,
};
