import React from 'react';
import PropTypes from 'prop-types';
import { Property } from '../Property';
import { Link } from '../Link';
import { Icon } from '../Icon';
import { Label } from '../Label';
import { AMOUNT_COLORS, LABEL_COLORS, STATE_COLORS } from './configs';

export const TransactionCard = ({
  amount,
  amountColor,
  labelColor,
  labelText,
  name,
  nameHref,
  nameTag,
  relatedProperty,
  relatedPropertyHref,
  transactionState,
  transactionStateColor,
  transactionTime,
}) => {
  const NameTag = nameTag;
  return (
    <article className="sage-transaction-card">
      <div className="sage-transaction-card__header">
        <Label value={labelText} color={labelColor} />
        <div className={`sage-transaction-card__state${transactionStateColor ? ` sage-transaction-card__state--${transactionStateColor}` : ''}`}>
          {transactionState}
        </div>
      </div>
      <div className="sage-transaction-card__body">
        <NameTag className="sage-transaction-card__name">
          {nameHref ? (
            <Link href={nameHref} className="sage-transaction-card__name-link">{name}</Link>
          ) : name}
        </NameTag>
        {amount && (
          <div className={`sage-transaction-card__amount${amountColor ? ` sage-transaction-card__amount--${amountColor}` : ''}`}>
            {amount}
          </div>
        )}
      </div>
      <div className="sage-transaction-card__footer">
        {relatedPropertyHref ? (
          <Link href={relatedPropertyHref}>
            <Property icon={Icon.ICONS.TAG}>{relatedProperty}</Property>
          </Link>
        ) : <Property icon={Icon.ICONS.TAG}>{relatedProperty}</Property>}
        <Property>{transactionTime}</Property>
      </div>
    </article>
  );
};

TransactionCard.LABEL_COLORS = LABEL_COLORS;
TransactionCard.AMOUNT_COLORS = AMOUNT_COLORS;
TransactionCard.STATE_COLORS = STATE_COLORS;

TransactionCard.defaultProps = {
  amount: '0.00',
  amountColor: null,
  labelColor: LABEL_COLORS.PUBLISHED,
  labelText: '--',
  name: '--',
  nameHref: null,
  nameTag: 'h4',
  relatedProperty: '--',
  relatedPropertyHref: null,
  transactionState: null,
  transactionStateColor: null,
  transactionTime: '--',
};

TransactionCard.propTypes = {
  amount: PropTypes.string,
  amountColor: PropTypes.oneOf(Object.values(TransactionCard.AMOUNT_COLORS)),
  labelColor: PropTypes.oneOf(Object.values(TransactionCard.LABEL_COLORS)),
  labelText: PropTypes.string,
  name: PropTypes.string,
  nameHref: PropTypes.string,
  nameTag: PropTypes.string,
  relatedProperty: PropTypes.string,
  relatedPropertyHref: PropTypes.string,
  transactionState: PropTypes.string,
  transactionStateColor: PropTypes.oneOf(Object.values(TransactionCard.STATE_COLORS)),
  transactionTime: PropTypes.string,
};
