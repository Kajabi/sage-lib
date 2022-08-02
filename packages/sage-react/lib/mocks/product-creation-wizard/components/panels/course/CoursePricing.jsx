import React from 'react';
import PropTypes from 'prop-types';
import { PaidPricingOptions } from '../..';
import {
  Button,
  Card,
  SageClassnames,
  SageTokens,
  Tabs,
} from '../../../../..';

export const CoursePricing = ({ onChangeStep }) => (
  <div className={SageClassnames.PANEL_GRID}>
    <Card.Stack>
      <h5 className={`${SageClassnames.TYPE.HEADING_5}`}>
        Price your course
      </h5>
      <p className={`${SageClassnames.TYPE.BODY_SMALL} ${SageClassnames.TYPE_COLORS.CHARCOAL_100}`}>
        Choose whether this course is paid or free.
        If it&rsquo;s paid, set its price and payment preferences.
      </p>
    </Card.Stack>

    <Tabs
      initialActiveId="pricing-paid"
      tabStyle={Tabs.STYLES.CHOICE}
      tabs={[
        {
          // TODO: Need alignCenter added to options on tabItems
          // https://kajabi.atlassian.net/browse/SAGE-331
          id: 'pricing-paid',
          tabChoiceIcon: SageTokens.ICONS.ROUND_DOLLAR,
          tabChoiceIconAlignment: Tabs.Item.ICON_ALIGNMENTS.START,
          tabChoiceType: Tabs.Item.CHOICE_TYPES.ICON,
          label: 'Paid',
          content: <PaidPricingOptions />
        },
        {
          id: 'pricing-free',
          tabChoiceIcon: SageTokens.ICONS.BAN,
          tabChoiceIconAlignment: Tabs.Item.ICON_ALIGNMENTS.START,
          tabChoiceType: Tabs.Item.CHOICE_TYPES.ICON,
          label: 'Free',
          content: null,
        }
      ]}
    />

    <Button.Group gap={Button.Group.GAP_OPTIONS.MD}>
      <Button
        color={Button.COLORS.SECONDARY}
        onClick={() => onChangeStep('course-2')}
      >
        Go back
      </Button>
      <Button
        color={Button.COLORS.PRIMARY}
        fullWidth={true}
        onClick={() => onChangeStep('course-fin')}
      >
        Finish
      </Button>
    </Button.Group>
  </div>
);

CoursePricing.defaultProps = {
  onChangeStep: (step) => step,
};

CoursePricing.propTypes = {
  onChangeStep: PropTypes.func,
};
