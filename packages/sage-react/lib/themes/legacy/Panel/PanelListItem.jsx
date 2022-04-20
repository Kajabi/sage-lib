import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SageClassnames, SageTokens } from '../configs';
// import { PANEL_LIST_GAP_OPTIONS } from './configs';

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
      [`sage-grid-gap-${gap}`]: gap
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
  gap: SageTokens.GRID_GAP_OPTIONS.DEFAULT,
  gridTemplate: null,
};

PanelListItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  gap: PropTypes.oneOf(Object.values(SageTokens.GRID_GAP_OPTIONS)),
  gridTemplate: PropTypes.oneOf(Object.values(SageTokens.GRID_TEMPLATES)),
};
