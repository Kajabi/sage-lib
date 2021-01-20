import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, radios, select } from '@storybook/addon-knobs';
import { centerXY } from '../story-support/decorators';
import { Button } from '../Button';
import { SageTokens } from '../configs';
import { Tabs } from './Tabs';
import TabsNotes from './TabsNotes.md';

const TabsWithState = () => {
  const [initialActiveId, setDefaultActiveId] = useState(null);
  const buttonConfigs = {
    icon: SageTokens.ICONS.CARET_RIGHT,
    color: 'primary',
    iconPosition: 'right'
  };

  const choiceIcon = select('Choice tab icon', SageTokens.ICONS, null);
  const choiceType = select('Choice tab type', Tabs.Item.CHOICE_TYPES, Tabs.Item.CHOICE_TYPES.RADIO);

  return (
    <Tabs
      initialActiveId={initialActiveId}
      useSeparator={true}
      tabs={[
        {
          id: 'tab-1',
          label: 'Tab 1',
          subtext: 'Subtext content...',
          tabChoiceType: choiceType,
          tabChoiceIcon: choiceIcon,
          content: (
            <>
              <p>Tab 1 content. Lorem ipsum dolor sit amut consectitor.</p>
              <Button onClick={() => setDefaultActiveId('tab-2')} {...buttonConfigs}>
                Next
              </Button>
            </>
          ),
          panelSpacing: true,
        },
        {
          id: 'tab-2',
          label: 'Tab 2',
          subtext: 'Subtext content...',
          tabChoiceType: choiceType,
          tabChoiceIcon: choiceIcon,
          content: (
            <>
              <p>Tab 2 content. Lorem ipsum dolor sit amut consectitor.</p>
              <Button onClick={() => setDefaultActiveId('tab-3')} {...buttonConfigs}>
                Next
              </Button>
            </>
          ),
          panelSpacing: true,
        },
        {
          id: 'tab-3',
          disabled: true,
          label: 'Tab 3',
          subtext: 'Subtext content...',
          tabChoiceType: choiceType,
          tabChoiceIcon: choiceIcon,
          content: (
            <>
              <p>Tab 3 content. Lorem ipsum dolor sit amut consectitor.</p>
              <Button onClick={() => setDefaultActiveId('tab-1')} {...buttonConfigs}>
                Start over
              </Button>
            </>
          ),
          panelSpacing: true,
        },
      ]}
      tabStyle={radios('Tab Style', Tabs.STYLES, Tabs.STYLES.TAB)}
      tabLayout={radios('Tab Layout', Tabs.LAYOUTS, Tabs.LAYOUTS.DEFAULT)}
    />
  );
};

storiesOf('Sage/Tabs', module)
  .addDecorator(centerXY)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <TabsWithState />
  ), {
    notes: { markdown: TabsNotes }
  });
