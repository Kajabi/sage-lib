import React from 'react';
import PropTypes from 'prop-types';
import { Property } from '../Property';
import { Link } from '../Link';
import { Icon } from '../Icon';
import { Label } from '../Label';
import { AMOUNT_COLORS, LABEL_COLORS, STATE_COLORS } from './configs';

export const TransactionCard = ({
  labelColor,
  labelText,
  stateColor,
  stateText,
  name,
  nameHref,
  amount,
  amountColor,
  offer,
  offerHref,
  transactionTime,
}) => (
  <div className="sage-transaction-card">
    <div className="sage-transaction-card__header">
      <Label value={labelText} color={labelColor} />
      <div className={`sage-transaction-card__state${stateColor ? ` sage-transaction-card__state--${stateColor}` : ''}`}>
        {stateText}
      </div>
    </div>
    <div className="sage-transaction-card__body">
      <h4 className="sage-transaction-card__name">
        {nameHref ? (
          <Link href={nameHref} className="sage-transaction-card__name-link">{name}</Link>
        ) : name}
      </h4>
      {amount && (
        <div className={`sage-transaction-card__amount${amountColor ? ` sage-transaction-card__amount--${amountColor}` : ''}`}>
          {amount}
        </div>
      )}
    </div>
    <div className="sage-transaction-card__footer">
      {offerHref ? (
        <Link href={nameHref}><Property icon={Icon.ICONS.TAG}>{offer}</Property></Link>
      ) : <Property icon={Icon.ICONS.TAG}>{offer}</Property>}
      <Property>{transactionTime}</Property>
    </div>
  </div>
);

TransactionCard.LABEL_COLORS = LABEL_COLORS;
TransactionCard.AMOUNT_COLORS = AMOUNT_COLORS;
TransactionCard.STATE_COLORS = STATE_COLORS;

TransactionCard.defaultProps = {
  labelText: '--',
  labelColor: LABEL_COLORS.PUBLISHED,
  stateText: null,
  stateColor: null,
  name: '--',
  nameHref: null,
  amount: '0.00',
  amountColor: null,
  offer: '--',
  offerHref: null,
  transactionTime: '--',
};

TransactionCard.propTypes = {
  labelText: PropTypes.string,
  labelColor: PropTypes.oneOf(Object.values(TransactionCard.LABEL_COLORS)),
  stateText: PropTypes.string,
  stateColor: PropTypes.oneOf(Object.values(TransactionCard.STATE_COLORS)),
  name: PropTypes.string,
  nameHref: PropTypes.string,
  amount: PropTypes.string,
  amountColor: PropTypes.oneOf(Object.values(TransactionCard.AMOUNT_COLORS)),
  offer: PropTypes.string,
  offerHref: PropTypes.string,
  transactionTime: PropTypes.string,
};
