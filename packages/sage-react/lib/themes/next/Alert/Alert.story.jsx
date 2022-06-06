import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { SageTokens } from '../configs';
import { Button } from '../Button';
import { Link } from '../Link';
import { Alert } from './Alert';

export default {
  title: 'Sage/Alert',
  component: Alert,
  argTypes: {
    ...selectArgs({
      color: Alert.COLORS,
      icon: SageTokens.ICONS,
    }),
  },
  args: {
    color: Alert.COLORS.DEFAULT,
    title: "You've used 80% of available pages",
    titleAddon: '(# of # pages)',
  },
};

const Template = (args) => <Alert {...args} />;

export const DismissableAlert = Template.bind({});
DismissableAlert.args = {
  description: 'Body duis rhoncus neque, sed nulla sed quis fames. Eu eu ut at odio ultrices orci varius habitant. Tempor vulputate in nisl massa eget id.',
  color: Alert.COLORS.DEFAULT,
  dismissable: true,
  onClickDismiss: () => console.log('clicked to dismiss'), // eslint-disable-line
  actions: (
    <>
      <Button
        className="sage-alert__primary-action"
        color="secondary"
      >
        Get unlimited pages
      </Button>
      <Link
        href="//example.com"
        removeUnderline={true}
        style={Link.COLORS.SECONDARY}
        suppressDefaultClass={true}
      >
        Check Usage
      </Link>
    </>
  ),
};

export const NonDismissableAlert = Template.bind({});
NonDismissableAlert.args = {
  color: Alert.COLORS.APPROACHING,
  description: 'Body duis rhoncus neque, sed nulla sed quis fames. Eu eu ut at odio ultrices orci varius habitant. Tempor vulputate in nisl massa eget id.',
  actions: (
    <>
      <Button
        className="sage-alert__primary-action"
        color="secondary"
      >
        Get unlimited pages
      </Button>
      <Link
        href="//example.com"
        removeUnderline={true}
        style={Link.COLORS.SECONDARY}
        suppressDefaultClass={true}
      >
        Check Usage
      </Link>
    </>
  ),
};

export const SmallAlert = Template.bind({});
SmallAlert.args = {
  color: Alert.COLORS.SUCCESS,
  dismissable: true,
  actions: (
    <>
      <Link
        href="//example.com"
        removeUnderline={true}
        style={Link.COLORS.SECONDARY}
        suppressDefaultClass={true}
      >
        Check Usage
      </Link>
    </>
  ),
  small: true,
};

export const Accessible = () => <Alert color={Alert.COLORS.DEFAULT}>Accessible button</Alert>;
