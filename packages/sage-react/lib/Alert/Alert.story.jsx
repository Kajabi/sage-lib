import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { SageTokens } from '../configs';
import { Button } from '../Button';
import { Link } from '../Link';
import { Alert } from './Alert';

export default {
  title: 'Sage/Alert',
  component: Alert,
  // displays description on Docs tab
  parameters: {
    docs: {
      description: {
        component: 'Alerts are used to indicate user-driven notifications.',
      },
    },
  },
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

export const Default = Template.bind({});
Default.args = {
  description: 'This is a default alert with only the required attributes',
  title: null,
  titleAddon: null,
};

export const DefaultWithActions = Template.bind({});
DefaultWithActions.args = {
  description: 'This is a default alert with only the required attributes',
  title: null,
  titleAddon: null,
  actions: (
    <>
      <Button
        className={Alert.PRIMARY_ACTION_CLASSNAME}
        color={Button.COLORS.PRIMARY}
        kjbElementId="getUnlimitedPagesButton"
      >
        Get unlimited pages
      </Button>
      <Link
        href="//example.com"
        suppressDefaultClass
        kjbElementId="checkUsageLink"
      >
        Check Usage
      </Link>
    </>
  )
};

export const DismissableAlert = Template.bind({});
DismissableAlert.args = {
  description: 'Body duis rhoncus neque, sed nulla sed quis fames. Eu eu ut at odio ultrices orci varius habitant. Tempor vulputate in nisl massa eget id.',
  color: Alert.COLORS.DEFAULT,
  dismissable: true,
  kjbElementId: 'exampleAlert',
  onClickDismiss: () => console.log('clicked to dismiss'), // eslint-disable-line
};

export const DismissableAlertWithActions = Template.bind({});
DismissableAlertWithActions.args = {
  description: 'Body duis rhoncus neque, sed nulla sed quis fames. Eu eu ut at odio ultrices orci varius habitant. Tempor vulputate in nisl massa eget id.',
  color: Alert.COLORS.DEFAULT,
  dismissable: true,
  onClickDismiss: () => console.log('clicked to dismiss'), // eslint-disable-line
  actions: (
    <>
      <Button
        className={Alert.PRIMARY_ACTION_CLASSNAME}
        color={Button.COLORS.PRIMARY}
        kjbElementId="checkUsageButton"
      >
        Get unlimited pages
      </Button>
      <Link
        href="//example.com"
        kjbElementId="checkUsage"
        suppressDefaultClass
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
  kjbElementId: 'nonDismissableAlert',
  actions: (
    <>
      <Button
        className={Alert.PRIMARY_ACTION_CLASSNAME}
        color={Button.COLORS.PRIMARY}
        kjbElementId="getUnlimitedPages"
      >
        Get unlimited pages
      </Button>
      <Link
        href="//example.com"
        suppressDefaultClass
        kjbElementId="checkUsage"
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
  title: null,
  description: 'Body duis rhoncus neque, sed nulla sed quis fames et tu odio.',
  kjbElementId: 'smallAlert',
  actions: (
    <>
      <Link
        href="//example.com"
        suppressDefaultClass
        kjbElementId="checkUsage"
      >
        Check Usage
      </Link>
    </>
  ),
  small: true,
};
