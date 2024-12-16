import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { DataCardBody } from './DataCardBody';
import { DataCardGroup } from './DataCardGroup';
import { DataCardHeader } from './DataCardHeader';
import { DataCardScrollContainer } from './DataCardScrollContainer';
import { DATA_CARD_COLORS } from './configs';

export const DataCard = ({
  children,
  className,
  color,
  testId,
  ...rest
}) => {
  const classNames = classnames(
    'sage-data-card',
    className,
    {
      [`sage-data-card--${color}`]: color,
    }
  );

  return (
    <div className={classNames} {...rest} data-kjb-element={testId}>
      {children}
    </div>
  );
};

DataCard.Body = DataCardBody;
DataCard.Header = DataCardHeader;
DataCard.Group = DataCardGroup;
DataCard.ScrollContainer = DataCardScrollContainer;
DataCard.COLORS = DATA_CARD_COLORS;

DataCard.defaultProps = {
  children: null,
  className: '',
  color: DATA_CARD_COLORS.DEFAULT,
  testId: null,
};

DataCard.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(Object.values(DATA_CARD_COLORS)),
  testId: PropTypes.string,
};
