import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SageTokens } from '../configs';

export const ProgressBar = ({
  backgroundColor,
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

  let styles = {};
  if (backgroundColor) {
    styles['--sage-progress-bar-background-color'] = backgroundColor;
  }

  if (rest.style) {
    styles = Object.assign(styles, rest.stlye);
  }

  const displayText = label ? `${label}: ${percent}% progress` : '';

  return (
    <div className={classNames} style={styles} {...rest}>
      <progress
        className="sage-progress-bar__element"
        aria-valuemax="100"
        max="100"
        aria-valuemin="0"
        value={String(percent)}
        aria-valuenow={percent}
        aria-valuetext={displayText}
      >
        {displayText}
      </progress>
      <div className="sage-progress-bar__value" style={{ width: `${percent}%`, '--progress-bar-value-color': color }} />
    </div>
  );
};

ProgressBar.COLORS = SageTokens.COLOR_PALETTE;

ProgressBar.defaultProps = {
  backgroundColor: null,
  className: null,
  color: ProgressBar.COLORS.PRIMARY_300,
  label: null,
  percent: null,
};

ProgressBar.propTypes = {
  backgroundColor: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.oneOf(Object.values(ProgressBar.COLORS)),
  label: PropTypes.string,
  percent: PropTypes.string,
};
