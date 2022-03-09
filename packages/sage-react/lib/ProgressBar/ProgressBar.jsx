import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SageTokens } from '../configs';

export const ProgressBar = ({
  color,
  label,
  percent,
  children,
  className,
  ...rest
}) => {
  const classNames = classnames(
    'sage-progress-bar',
    className,
    {
      'sage-btn-group--align-end': label,
    }
  );

  return (
    <div className={classNames} {...rest}>
      <progress
        className="sage-progress-bar__element"
        aria-valuemax="100"
        max="100"
        aria-valuemin="0"
        value={percent}
        aria-valuenow={percent}
        aria-valuetext={children}
      >
        {children}
      </progress>
      <div class="sage-progress-bar__value" style={{'--progress-bar-value-color': `${color}`}}></div>
    </div>
  );
};

ProgressBar.COLORS = SageTokens.COLOR_SLIDERS;

ProgressBar.defaultProps = {
  color: ProgressBar.COLORS.PRIMARY,
  label: null,
  percent: null,
  className: null,
  children: null,
};

ProgressBar.propTypes = {
  color: PropTypes.oneOf(Object.values(ProgressBar.COLORS)),
  label: PropTypes.string,
  percent: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.node,
};
