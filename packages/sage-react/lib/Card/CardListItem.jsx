import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SageClassnames, SageTokens } from '../configs';

export const CardListItem = ({
  children,
  className,
  gridTemplate,
  gap,
  ...rest
}) => {
  const classNames = classnames(
    'sage-card__list-item',
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

CardListItem.defaultProps = {
  children: null,
  className: '',
  gridTemplate: null,
  gap: SageTokens.GRID_GAP_OPTIONS.DEFAULT
};

CardListItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  gridTemplate: PropTypes.oneOf(Object.values(SageTokens.GRID_TEMPLATES)),
  gap: PropTypes.oneOf(Object.values(SageTokens.GRID_GAP_OPTIONS)),
};
