import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SageClassnames } from '../configs';
import { SageTokens } from '../configs';
import { CARD_ROW_ALIGNMENT_OPTIONS } from './configs';

const CardRow = ({
  children,
  className,
  gridTemplate,
  verticalAlign,
  ...rest
}) => {
  const classNames = classnames(
    'sage-card__row',
    className,
    {
      [`${SageClassnames.lookupGridTemplate(gridTemplate)}`]: gridTemplate,
      [`sage-card__row--vertical-align-${verticalAlign}`]: verticalAlign,
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
};

CardRow.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  gridTemplate: PropTypes.oneOf(Object.values(SageTokens.GRID_TEMPLATES)),
  verticalAlign: PropTypes.oneOf(Object.values(CARD_ROW_ALIGNMENT_OPTIONS)),
};

export default CardRow;
