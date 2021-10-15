import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { NEXT_BEST_ACTION_COLORS } from './configs';

export const NextBestAction = ({
  cardColor,
  className,
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
      <h1>Hello, world!</h1>
    </div>
  );
};

NextBestAction.COLORS = NEXT_BEST_ACTION_COLORS;

NextBestAction.defaultProps = {
  className: '',
};

NextBestAction.propTypes = {
  cardColor: PropTypes.oneOf(Object.values(NEXT_BEST_ACTION_COLORS)).isRequired,
  className: PropTypes.string,
};
