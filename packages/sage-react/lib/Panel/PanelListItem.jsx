import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SageClassnames, SageTokens } from '../configs';

export const PanelListItem = ({
  children,
  className,
  gridTemplate,
  ...rest
}) => {
  const classNames = classnames(
    'sage-panel__list-item',
    className,
    {
      [`${SageClassnames.lookupGridTemplate(gridTemplate)}`]: gridTemplate,
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
};

PanelListItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  gridTemplate: PropTypes.oneOf(Object.values(SageTokens.GRID_TEMPLATES)),
};
