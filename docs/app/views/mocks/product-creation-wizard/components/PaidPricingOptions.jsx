import React from 'react';
import {
  Card,
  Checkbox,
  Icon,
  Input,
  Select,
  SageClassnames,
  SageTokens,
} from '../../..';
import { PricingOptionsDropdown } from './PricingOptionsDropdown';

export const PaidPricingOptions = () => {
  const [selectedPaymentType, setSelectedPaymentType] = React.useState('once');
  const initialLabel = 'Select a product';

  // TODO: Need updated icon set to include these three
  // - `money`
  // - `subscription`
  // - `multi-pay`
  // https://kajabi.atlassian.net/browse/SAGE-327
  const items = [
    {
      id: 1,
      label: 'One-time',
      alias: 'once',
      subtext: 'Customer pays once for access to the product.',
      icon: SageTokens.ICONS.ROUND_DOLLAR, // TODO: Dev needs to correct icon once available
      color: Icon.CARD_COLORS.INFO,
    },
    {
      id: 2,
      label: 'Subscription',
      alias: 'subscription',
      subtext: 'Customer pays once for access to the product.',
      icon: SageTokens.ICONS.ROUND_DOLLAR, // TODO: Dev needs to correct icon once available
      color: Icon.CARD_COLORS.PUBLISHED,
    },
    {
      id: 3,
      label: 'Multi-pay',
      alias: 'multi',
      subtext: 'Customer pays once for access to the product.',
      icon: SageTokens.ICONS.ROUND_DOLLAR, // TODO: Dev needs to correct icon once available
      color: Icon.CARD_COLORS.LOCKED,
    },
  ];

  const renderDetailsFields = () => {
    let detailsFields = null;
    switch (selectedPaymentType) {
      case 'subscription':
        detailsFields = (
          <Card.Row gridTemplate={SageTokens.GRID_TEMPLATES.TE}>
            <Input
              id="course-price-subscription-frequency"
              type="number"
              label="Bill every"
            />
            <Select
              id="course-price-subscription-interval"
              label="Interval"
              value="Monthly"
              options={[
                'Weekly',
                'Monthly',
                'Annually',
              ]}
            />
          </Card.Row>
        );
        break;
      case 'multi':
        detailsFields = (
          <Input
            id="course-price-multi-count"
            type="number"
            label="Number of monthly payments"
          />
        );
        break;
      case 'once':
      default:
        detailsFields = null;
        break;
    }

    return detailsFields;
  };

  const onSelectItem = (data) => {
    const newSelectedPaymentType = items.find((item) => item.id === data.id);
    if (!newSelectedPaymentType) {
      setSelectedPaymentType('once');
    } else {
      setSelectedPaymentType(newSelectedPaymentType.alias);
    }
  };

  return (
    <div className={SageClassnames.PANEL_GRID}>
      <PricingOptionsDropdown
        initialLabel={initialLabel}
        items={items}
        onSelectItem={onSelectItem}
      />
      <Input
        id="course-price"
        prefix="$"
        type="number"
      />
      {renderDetailsFields()}
      <div className={SageClassnames.CARD_GRID}>
        <h6 className={SageClassnames.TYPE.HEADING_6}>
          Preferred payment methods
        </h6>
        <ul className="sage-list">
          <Checkbox
            id="course-payment-method-stripe"
            name="course-payment-method"
            itemInList={true}
            label={(<p>[Stripe logo]</p>)}
          />
          <Checkbox
            id="course-payment-method-paypal"
            name="course-payment-method"
            itemInList={true}
            label={(<p>[Paypal logo]</p>)}
          />
        </ul>
      </div>
    </div>
  );
};
