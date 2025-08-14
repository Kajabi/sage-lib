import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Tooltip } from '../Tooltip';
import { SageTokens } from '../configs';
import { PROGRESSBAR_TOOLTIP_POSITIONS } from './configs';

export const ProgressBar = (props) => {
  const {
    animate,
    backgroundColor,
    className,
    color,
    disableTooltip,
    displayPercent,
    label,
    percent,
    tooltipPosition,
    ...rest
  } = props;
  const classNames = classnames(
    'sage-progress-bar',
    className,
    {
      'sage-progress-bar--has-percentage': displayPercent,
    }
  );
  const displayText = label ? `${label}: ${percent}% progress` : '';

  const renderBar = () => {
    const bgStyles = {};
    if (backgroundColor) {
      bgStyles['--sage-progress-bar-background-color'] = backgroundColor;
    }

    return (
      <div className="sage-progress-bar__background" style={bgStyles}>
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
        <div
          className={`sage-progress-bar__value ${animate && 'sage-progress-bar__animate'} ${props.hasOwnProperty('color') ? 'sage-progress-bar__value--custom' : ''}`}
          style={{
            width: `${percent}%`,
            '--progress-bar-value-color': color,
          }}
        />
      </div>
    );
  };

  return (
    <div className={classNames} {...rest}>
      {disableTooltip
        ? renderBar()
        : (
          <Tooltip content={displayText}>
            {renderBar()}
          </Tooltip>
        )}
      {displayPercent && (
        <span className="sage-progress-bar__percent">
          {percent}%
        </span>
      )}
    </div>
  );
};

ProgressBar.COLORS = SageTokens.COLOR_PALETTE;
ProgressBar.TOOLTIP_POSITIONS = PROGRESSBAR_TOOLTIP_POSITIONS;

ProgressBar.defaultProps = {
  animate: true,
  backgroundColor: null,
  className: null,
  color: ProgressBar.COLORS.MERCURY_500,
  disableTooltip: false,
  displayPercent: false,
  label: null,
  percent: null,
  tooltipPosition: null,
};

ProgressBar.propTypes = {
  animate: PropTypes.bool,
  backgroundColor: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.oneOf(Object.values(ProgressBar.COLORS)),
  disableTooltip: PropTypes.bool,
  displayPercent: PropTypes.bool,
  label: PropTypes.string,
  percent: PropTypes.string,
  tooltipPosition: PropTypes.oneOf(Object.values(ProgressBar.TOOLTIP_POSITIONS)),
};
