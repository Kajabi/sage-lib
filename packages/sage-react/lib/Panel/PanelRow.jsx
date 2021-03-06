import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SageClassnames, SageTokens } from '../configs';
import { PANEL_ROW_ALIGNMENT_OPTIONS } from './configs';

export const PanelRow = ({
  children,
  className,
  gridTemplate,
  verticalAlign,
  ...rest
}) => {
  const classNames = classnames(
    'sage-panel__row',
    className,
    {
      [`${SageClassnames.lookupGridTemplate(gridTemplate)}`]: gridTemplate,
      [`sage-panel__row--vertical-align-${verticalAlign}`]: verticalAlign,
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

PanelRow.defaultProps = {
  children: null,
  className: '',
  gridTemplate: null,
  verticalAlign: PANEL_ROW_ALIGNMENT_OPTIONS.DEFAULT,
};

PanelRow.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  gridTemplate: PropTypes.oneOf(Object.values(SageTokens.GRID_TEMPLATES)),
  verticalAlign: PropTypes.oneOf(Object.values(PANEL_ROW_ALIGNMENT_OPTIONS)),
};
