import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SageClassnames, SageTokens } from '../configs';
import { CARD_ROW_ALIGNMENT_OPTIONS, CARD_ROW_GAP_OPTIONS } from './configs';

export const CardRow = ({
  children,
  className,
  gridTemplate,
  verticalAlign,
  gap,
  ...rest
}) => {
  const classNames = classnames(
    'sage-card__row',
    className,
    {
      [`${SageClassnames.lookupGridTemplate(gridTemplate)}`]: gridTemplate,
      [`sage-card__row--vertical-align-${verticalAlign}`]: verticalAlign,
      [`sage-card__row--gap-${gap}`]: gap,
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

CardRow.defaultProps = {
  children: null,
  className: '',
  gridTemplate: null,
  verticalAlign: CARD_ROW_ALIGNMENT_OPTIONS.DEFAULT,
  gap: CARD_ROW_GAP_OPTIONS.DEFAULT,
};

CardRow.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  gridTemplate: PropTypes.oneOf(Object.values(SageTokens.GRID_TEMPLATES)),
  verticalAlign: PropTypes.oneOf(Object.values(CARD_ROW_ALIGNMENT_OPTIONS)),
  gap: CARD_ROW_GAP_OPTIONS.DEFAULT
};
