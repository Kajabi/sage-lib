import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SageClassnames, SageTokens } from '../';

const CardListItem = ({
  children,
  className,
  gridTemplate,
  ...rest
}) => {
  const classNames = classnames(
    'sage-card__list-item',
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

CardListItem.defaultProps = {
  children: null,
  className: '',
  gridTemplate: null,
};

CardListItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  gridTemplate: PropTypes.oneOf(Object.values(SageTokens.GRID_TEMPLATES)),
};

export default CardListItem;
