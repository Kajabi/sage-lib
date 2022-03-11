import React, { useState } from 'react';
import { selectArgs } from '../story-support/helpers';
import { Button } from '../Button';
import { SageTokens } from '../configs';
import { Tabs } from './Tabs';

export default {
  title: 'Sage/Tabs',
  component: Tabs,
  decorators: [(Story) => <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Story /></div>],
  argTypes: {
    ...selectArgs({
      tabLayout: Tabs.LAYOUTS,
      tabStyle: Tabs.STYLES
    }),
  },
  args: {
    tabStyle: Tabs.STYLES.TAB,
    tabLayout: Tabs.LAYOUTS.DEFAULT
  }
};

export const Default = (args) => {
  const [initialActiveId, setDefaultActiveId] = useState(null);
  const buttonConfigs = {
    icon: SageTokens.ICONS.CARET_RIGHT,
    color: 'primary',
    iconPosition: 'right'
  };

  const tabChoiceSettings = {
    tabChoiceType: Tabs.Item.CHOICE_TYPES.RADIO,
    tabChoiceIcon: null,
  };

  return (
    <Tabs
      {...args}
      initialActiveId={initialActiveId}
      useSeparator={true}
      tabs={[
        {
          id: 'tab-1',
          label: 'Tab 1',
          subtext: 'Subtext content...',
          content: (
            <>
              <p>Tab 1 content. Lorem ipsum dolor sit amut consectitor.</p>
              <Button onClick={() => setDefaultActiveId('tab-2')} {...buttonConfigs}>
                Next
              </Button>
            </>
          ),
          panelSpacing: true,
          ...tabChoiceSettings,
        },
        {
          id: 'tab-2',
          label: 'Tab 2',
          subtext: 'Subtext content...',
          content: (
            <>
              <p>Tab 2 content. Lorem ipsum dolor sit amut consectitor.</p>
              <Button onClick={() => setDefaultActiveId('tab-3')} {...buttonConfigs}>
                Next
              </Button>
            </>
          ),
          panelSpacing: true,
          ...tabChoiceSettings,
        },
        {
          id: 'tab-3',
          disabled: true,
          label: 'Tab 3',
          subtext: 'Subtext content...',
          content: (
            <>
              <p>Tab 3 content. Lorem ipsum dolor sit amut consectitor.</p>
              <Button onClick={() => setDefaultActiveId('tab-1')} {...buttonConfigs}>
                Start over
              </Button>
            </>
          ),
          panelSpacing: true,
          ...tabChoiceSettings,
        },
      ]}
    />
  );
};

const Template = (args) => <Tabs {...args} />;

export const RichContent = Template.bind({});
RichContent.args = {
  tabs: [
    {
      id: 'tab-1',
      tabChoiceCustomClass: 'testing-this',
      content: 'Content 1',
      tabDetails: (
        <>
          <h4>Tab 1 content.</h4>
          <p>Lorem ipsum dolor sit amut consectitor.</p>
        </>
      ),
    },
    {
      id: 'tab-2',
      content: 'Content 2',
      tabDetails: (
        <>
          <h4>Tab 2 content.</h4>
          <p>Lorem ipsum dolor sit amut consectitor.</p>
        </>
      ),
    },
    {
      id: 'tab-3',
      content: 'Content 3',
      tabDetails: (
        <>
          <h4>Tab 3 content.</h4>
          <p>Lorem ipsum dolor sit amut consectitor.</p>
        </>
      ),
    },
  ],
  tabStyle: Tabs.STYLES.CHOICE
};

export const IconAlignment = () => {
  const tabChoiceSettings = {
    tabChoiceCustomClass: 'testing-this',
    tabChoiceType: Tabs.Item.CHOICE_TYPES.RADIO,
    tabChoiceIcon: null,
    tabChoiceIconAlignment: Tabs.Item.ICON_ALIGNMENTS.START,
  };

  return (
    <Tabs
      useSeparator={true}
      tabs={[
        {
          id: 'tab-1',
          label: 'Tab 1',
          subtext: 'Subtext content...',
          content: 'Content 1',
          panelSpacing: true,
          ...tabChoiceSettings,
        },
        {
          id: 'tab-2',
          label: 'Tab 2',
          subtext: 'Subtext content...',
          content: 'Content 2',
          panelSpacing: true,
          ...tabChoiceSettings,
        },
        {
          id: 'tab-3',
          label: 'Tab 3',
          subtext: 'Subtext content...',
          content: 'Content 3',
          panelSpacing: true,
          ...tabChoiceSettings,
        },
      ]}
      tabStyle={Tabs.STYLES.CHOICE}
    />
  );
};

export const Background = Template.bind({});
Background.args = {
  tabs: [
    {
      id: 'tab-1',
      label: 'Tab 1',
      subtext: 'Subtext content...',
      content: 'Content 1',
      href: '#'
    },
    {
      id: 'tab-2',
      label: 'Tab 2',
      subtext: 'Subtext content...',
      content: 'Content 2',
    },
    {
      id: 'tab-3',
      label: 'Tab 3',
      subtext: 'Subtext content...',
      content: 'Content 3',
    },
  ],
  useSeparator: true,
  withBackground: true,
};
