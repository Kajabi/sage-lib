import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { DATA_CARD_COLORS } from './configs';

export const DataCardGroup = ({
  children,
  className,
  color,
  title,
  titleTag,
  ...rest
}) => {
  const TitleTag = titleTag;
  const classNames = classnames(
    'sage-data-card-group',
    className,
    {
      [`sage-data-card-group--${color}`]: color,
    }
  );

  return (
    <div className={classNames} {...rest}>
      {title ? (
        <>
          <TitleTag className="sage-data-card-group__title">{title}</TitleTag>
          <div className="sage-data-card-group__items">
            {children}
          </div>
        </>
      ) : children}
    </div>
  );
};

DataCardGroup.defaultProps = {
  children: null,
  className: '',
  color: null,
  title: null,
  titleTag: 'h4',
};

DataCardGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(Object.values(DATA_CARD_COLORS)),
  title: PropTypes.string,
  titleTag: PropTypes.string,
};
