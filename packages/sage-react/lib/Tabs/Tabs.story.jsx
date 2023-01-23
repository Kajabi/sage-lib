import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { SageTokens } from '../configs';
import { Tabs } from './Tabs';

export default {
  title: 'Sage/Tabs',
  component: Tabs,
  subcomponents: {
    'Tabs.Item': Tabs.Item,
    'Tabs.Pane': Tabs.Pane
  },
  // displays description on Docs tab
  parameters: {
    docs: {
      description: {
        component: 'Tabs organize related content across screens, data sets, and can be used for navigation to related destinations.'
      },
    },
  },
  decorators: [(Story) => <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}> { Story() }</div>],
  argTypes: {
    ...selectArgs({
      tabLayout: Tabs.LAYOUTS,
      tabStyle: Tabs.STYLES,
      justify: Tabs.JUSTIFY_OPTIONS,
      gap: SageTokens.GRID_GAP_OPTIONS,
    }),
  },
  args: {
    tabStyle: Tabs.STYLES.TAB,
    tabLayout: Tabs.LAYOUTS.DEFAULT
  }
};

const tabChoiceSettings = {
  tabChoiceType: Tabs.Item.CHOICE_TYPES.RADIO,
  tabChoiceIcon: null,
};

export const Default = () => (
  <Tabs
    tabs={[
      {
        id: 'tab-1',
        label: 'Tab 1',
        subtext: 'Subtext content...',
        content: (
          <>
            <h4>Tab 1 Pane Content</h4>
            <p>A tabbed interface allows users to switch between multiple sections.</p>
          </>
        ),
        card: true,
        cardSpacing: true,
        ...tabChoiceSettings,
      },
      {
        id: 'tab-2',
        label: 'Tab 2',
        subtext: 'Subtext content...',
        content: (
          <>
            <h4>Tab 2 Pane Content</h4>
            <p>A tabbed interface allows users to switch between multiple sections.</p>
          </>
        ),
        card: true,
        cardSpacing: true,
        ...tabChoiceSettings,
      },
      {
        id: 'tab-3',
        label: 'Tab 3',
        subtext: 'Subtext content...',
        content: (
          <>
            <h4>Tab 1 Pane Content</h4>
            <p>A tabbed interface allows users to switch between multiple sections.</p>
          </>
        ),
        card: true,
        cardSpacing: true,
        ...tabChoiceSettings,
      },
    ]}
    initialActiveId='tab-1'
  />
);

export const RichContent = () => (
  <Tabs
    tabs={[
      {
        id: 'tab-1',
        content: 'Tab 1 Pane Content',
        tabChoiceCustomClass: 'my-custom-tab-choice-class',
        tabDetails: (
          <>
            <h4>Tab 1 content.</h4>
            <p>This is content text within a tab.</p>
          </>
        ),
      },
      {
        id: 'tab-2',
        content: 'Tab 2 Pane Content',
        tabChoiceCustomClass: 'my-custom-tab-choice-class',
        tabDetails: (
          <>
            <h4>Tab 2 content.</h4>
            <p>This is content text within a tab.</p>
          </>
        ),
      },
      {
        id: 'tab-3',
        content: 'Tab 3 Pane Content',
        tabChoiceCustomClass: 'my-custom-tab-choice-class',
        tabDetails: (
          <>
            <h4>Tab 3 content.</h4>
            <p>This is content text within a tab.</p>
          </>
        ),
      },
    ]}
    initialActiveId='tab-1'
    tabStyle={Tabs.STYLES.CHOICE}
    useSeparator={true}
  />
);

export const IconAlignment = () => {
  const tabChoiceSettings = {
    tabChoiceCustomClass: 'testing-this',
    tabChoiceType: Tabs.Item.CHOICE_TYPES.RADIO,
    tabChoiceIcon: null,
    tabChoiceIconAlignment: Tabs.Item.ICON_ALIGNMENTS.START,
  };

  return (
    <Tabs
      tabs={[
        {
          id: 'tab-1',
          label: 'Tab 1',
          subtext: 'Subtext content...',
          content: 'Tab 1 Pane Content',
          panelSpacing: true,
          ...tabChoiceSettings,
        },
        {
          id: 'tab-2',
          label: 'Tab 2',
          subtext: 'Subtext content...',
          content: 'Tab 2 Pane Content',
          panelSpacing: true,
          ...tabChoiceSettings,
        },
        {
          id: 'tab-3',
          label: 'Tab 3',
          subtext: 'Subtext content...',
          content: 'Tab 3 Pane Content',
          panelSpacing: true,
          ...tabChoiceSettings,
        },
      ]}
      initialActiveId='tab-1'
      tabStyle={Tabs.STYLES.CHOICE}
      useSeparator={true}
    />
  );
};

export const Background = () => (
  <Tabs
    tabs={[
      {
        id: 'tab-1',
        label: 'Tab 1',
        subtext: 'Subtext content...',
        content: 'Tab 1 Pane Content',
      },
      {
        id: 'tab-2',
        label: 'Tab 2',
        subtext: 'Subtext content...',
        content: 'Tab 2 Pane Content',
      },
      {
        id: 'tab-3',
        label: 'Tab 3',
        subtext: 'Subtext content...',
        content: 'Tab 3 Pane Content',
      },
    ]}
    initialActiveId='tab-1'
    useSeparator={true}
    withBackground={true}
  />
);

export const Filter = () => (
  <Tabs
    tabs={[
      {
        id: 'filter-1',
        label: 'Current',
        href: '#',
      },
      {
        id: 'filter-2',
        label: 'Past',
        href: '#',
      },
      {
        id: 'filter-3',
        label: 'All',
        href: '#',
      },
    ]}
    initialActiveId='filter-1'
    tabStyle={Tabs.STYLES.FILTER}
  />
);
