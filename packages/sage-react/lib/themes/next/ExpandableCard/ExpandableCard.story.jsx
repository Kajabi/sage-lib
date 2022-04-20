import React from 'react';
import { Checkbox } from '../Toggle';
import { ExpandableCard } from './ExpandableCard';

export default {
  title: 'Sage/ExpandableCard',
  component: ExpandableCard,
  args: {
    bodyBordered: false,
    expanded: false,
    children: (
      <>
        <Checkbox
          checked={false}
          disabled={false}
          hasError={false}
          id="checkbox1-demo"
          label="Grant offers"
          name="checkbox1-demo"
        />
        <Checkbox
          checked={false}
          disabled={false}
          hasError={false}
          id="checkbox2-demo"
          label="Add tags"
          name="checkbox2-demo"
        />
        <Checkbox
          checked={false}
          disabled={false}
          hasError={false}
          id="checkbox3-demo"
          label="Subscribe to emails"
          name="checkbox3-demo"
        />
      </>
    ),
    triggerLabel: 'Expand'
  }
};
const Template = (args) => <ExpandableCard {...args} />;

export const Default = Template.bind({});
