import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SageClassnames, SageTokens } from '../configs';
import { PANEL_LIST_GAP_OPTIONS } from './configs';

export const PanelListItem = ({
  children,
  className,
  gridTemplate,
  gap,
  ...rest
}) => {
  const classNames = classnames(
    'sage-panel__list-item',
    className,
    {
      [`${SageClassnames.lookupGridTemplate(gridTemplate)}`]: gridTemplate,
      [`sage-panel__list-item--gap-${gap}`]: gap
    }
  );

  return (
    <li
      className={classNames}
      {...rest}
    >
      {children}
    </li>
  );
};

PanelListItem.defaultProps = {
  children: null,
  className: '',
  gridTemplate: null,
  gap: PANEL_LIST_GAP_OPTIONS.DEFAULT
};

PanelListItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  gridTemplate: PropTypes.oneOf(Object.values(SageTokens.GRID_TEMPLATES)),
  gap: PropTypes.oneOf(Object.values(PANEL_LIST_GAP_OPTIONS)),
};
