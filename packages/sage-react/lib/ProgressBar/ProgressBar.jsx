import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SageTokens } from '../configs';

export const ProgressBar = ({
  children,
  className,
  color,
  label,
  percent,
  ...rest
}) => {
  const classNames = classnames(
    'sage-progress-bar',
    className,
  );

  return (
    <div className={classNames} {...rest}>
      <progress
        className="sage-progress-bar__element"
        aria-valuemax="100"
        max="100"
        aria-valuemin="0"
        value={String(percent)}
        aria-valuenow={percent}
        aria-valuetext={children}
      >
        {label && (
          `${label}: ${percent}%&nbsp;progress`
        )}
      </progress>
      <div className="sage-progress-bar__value" style={{ width: `${percent}%`, '--progress-bar-value-color': color }} />
    </div>
  );
};

ProgressBar.COLORS = SageTokens.COLOR_PALETTE;

ProgressBar.defaultProps = {
  color: ProgressBar.COLORS.PRIMARY_300,
  label: null,
  percent: null,
  className: null,
  children: null,
};

ProgressBar.propTypes = {
  color: PropTypes.oneOf(Object.values(ProgressBar.COLORS)),
  label: PropTypes.string,
  percent: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};
