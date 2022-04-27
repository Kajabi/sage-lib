import React from 'react';
import {
  Panel,
  SageClassnames,
} from '../../..';
import { Button } from '../../../Button';
import { CarouselCard } from './CarouselCard';
import { SVGMobilePayment } from './SVGMobilePayment';

export const UpcomingFeatures = () => (
  <Panel>
    <Panel.Block>
      <h3 className={SageClassnames.TYPE.HEADING_5}>
        More on the way!
      </h3>
      <p className={`${SageClassnames.TYPE.BODY_SMALL} ${SageClassnames.TYPE_COLORS.CHARCOAL_200}`}>
        Important features you&rsquo;ve been asking for are on their way to Kajabi Payments.
      </p>
    </Panel.Block>
    {/* TODO: Need a plan for carousel as shown in design spec */}
    {/* TODO: Patch Button outputting `sage-link` class on hyperlink */}
    <CarouselCard
      action={(
        <Button
          color={Button.COLORS.PRIMARY}
          href="#TODO-dev-learn-more-url"
        >
          Learn more
        </Button>
      )}
      graphic={<SVGMobilePayment />}
    >
      <p className={SageClassnames.TYPE.HEADING_6}>
        Get paid when you need in one place.
      </p>
    </CarouselCard>
  </Panel>
);
