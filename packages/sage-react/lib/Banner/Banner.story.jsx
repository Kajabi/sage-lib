import React, { useState } from 'react';
import { selectArgs } from '../story-support/helpers';
import { Banner } from './Banner';
import { Button } from '../Button';

export default {
  title: 'Sage/Banner',
  component: Banner,
  argTypes: {
    ...selectArgs({
      type: Banner.TYPES
    }),
  },
  args: {
    active: true,
    dismissable: true,
    link: '#',
    text: 'Alert description text',
    type: Banner.TYPES.DEFAULT,
  },
};

const Template = (args) => <Banner {...args} />;
export const Default = Template.bind({});

export const DefaultInlineBanner = Template.bind({});
DefaultInlineBanner.args = {
  bannerContext: 'sage-demo'
};

export const SecondaryInlineBanner = Template.bind({});
SecondaryInlineBanner.args = {
  bannerContext: 'sage-demo',
  type: Banner.TYPES.SECONDARY
};

export const WarningInlineBanner = Template.bind({});
WarningInlineBanner.args = {
  bannerContext: 'sage-demo',
  type: Banner.TYPES.WARNING
};

export const DangerInlineBanner = Template.bind({});
DangerInlineBanner.args = {
  bannerContext: 'sage-demo',
  type: Banner.TYPES.DANGER
};

export const DefaultFixedBanner = (args) => {
  const [active, setActive] = useState(false);

  const onClick = () => {
    setActive(true);
  };

  return (
    <>
      <Button
        color={Button.COLORS.PRIMARY}
        onClick={onClick}
      >
        Display Banner
      </Button>

      <Banner {...args} active={active} />
    </>
  );
};
