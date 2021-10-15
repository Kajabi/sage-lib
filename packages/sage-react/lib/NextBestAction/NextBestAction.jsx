import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { NEXT_BEST_ACTION_COLORS } from './configs';

export const NextBestAction = ({
  cardColor,
  className,
  desc,
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
        {desc && (
          <p className="sage-next-best-action__desc">{desc}</p>
        )}
      </div>
    </div>
  );
};

NextBestAction.COLORS = NEXT_BEST_ACTION_COLORS;

NextBestAction.defaultProps = {
  className: '',
  desc: '',
  title: '',
};

NextBestAction.propTypes = {
  cardColor: PropTypes.oneOf(Object.values(NEXT_BEST_ACTION_COLORS)).isRequired,
  className: PropTypes.string,
  desc: PropTypes.string,
  title: PropTypes.string,
};
