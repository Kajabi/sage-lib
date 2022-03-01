import React from 'react';
import {
  Button,
  Card,
  SageClassnames,
  SageTokens,
  Tabs,
} from '../../../../..';
import { PaidPricingOptions  } from '../../';
 
export const CoachingPricing = ({ onChangeStep }) => {
  return (
    <div className={SageClassnames.PANEL_GRID}>
      <Card.Stack>
        <h5 className={`${SageClassnames.TYPE.HEADING_5}`}>
          Price your program
        </h5>
        <p className={`${SageClassnames.TYPE.BODY_SMALL} ${SageClassnames.TYPE_COLORS.CHARCOAL_100}`}>
          Choose whether this coaching program is paid or free.
          If it's paid, set its price and payment preferences.
        </p>
      </Card.Stack>

      <Tabs
        initialActiveId="pricing-paid"
        tabStyle={Tabs.STYLES.CHOICE}
        tabs={[
          {
            // TODO: Need alignCenter added to options on tabItems
            alignCenter: true,
            id: 'pricing-paid',
            tabChoiceIcon: SageTokens.ICONS.ROUND_DOLLAR,
            tabChoicIconAlignment: Tabs.Item.ICON_ALIGNMENTS.START,
            tabChoiceType: Tabs.Item.CHOICE_TYPES.ICON,
            label: 'Paid',
            content: <PaidPricingOptions />
          },
          {
            alignCenter: true,
            id: 'pricing-free',
            tabChoiceIcon: SageTokens.ICONS.BAN,
            tabChoicIconAlignment: Tabs.Item.ICON_ALIGNMENTS.START,
            tabChoiceType: Tabs.Item.CHOICE_TYPES.ICON,
            label: 'Free',
            content: null,
          }
        ]}
      />
       
      <Button.Group gap={Button.Group.GAP_OPTIONS.MD}>
        <Button
          color={Button.COLORS.SECONDARY}
          raised={false}
          onClick={() => onChangeStep('coaching-3')}
        >
          Go back
        </Button>
        <Button
          color={Button.COLORS.PRIMARY}
          fullWidth={true}
          onClick={() => onChangeStep('coaching-fin')}
        >
          Finish
        </Button>
      </Button.Group>
    </div>
  );
};
