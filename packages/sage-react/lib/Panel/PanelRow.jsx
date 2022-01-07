import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SageClassnames, SageTokens } from '../configs';
import { PANEL_ROW_ALIGNMENT_OPTIONS, PANEL_ROW_GAP_OPTIONS } from './configs';

export const PanelRow = ({
  children,
  className,
  gridTemplate,
  verticalAlign,
  gap,
  ...rest
}) => {
  const classNames = classnames(
    'sage-panel__row',
    className,
    {
      [`${SageClassnames.lookupGridTemplate(gridTemplate)}`]: gridTemplate,
      [`sage-panel__row--vertical-align-${verticalAlign}`]: verticalAlign,
      [`sage-panel__row--gap-${gap}`]: gap,
    }
  );

  return (
    <div
      className={classNames}
      {...rest}
    >
      {children}
    </div>
  );
};

PanelRow.VERTICAL_ALIGNMENTS = PANEL_ROW_ALIGNMENT_OPTIONS;
PanelRow.GAP_OPTIONS = PANEL_ROW_GAP_OPTIONS;

PanelRow.defaultProps = {
  children: null,
  className: '',
  gridTemplate: null,
  verticalAlign: PANEL_ROW_ALIGNMENT_OPTIONS.DEFAULT,
  gap: PANEL_ROW_GAP_OPTIONS.DEFAULT
};

PanelRow.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  gridTemplate: PropTypes.oneOf(Object.values(SageTokens.GRID_TEMPLATES)),
  verticalAlign: PropTypes.oneOf(Object.values(PANEL_ROW_ALIGNMENT_OPTIONS)),
  gap: PropTypes.oneOf(Object.values(PANEL_ROW_GAP_OPTIONS)),
};
