import React from 'react';
import { Accordion } from './Accordion';
import { ExpandableCard } from '../ExpandableCard';
import { Checkbox } from '../Toggle';

export default {
  title: 'Sage/Accordion',
  component: ExpandableCard,
  args: {
    children: (
      <>
        <ExpandableCard expanded={true} triggerLabel="Expand">
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
        </ExpandableCard>
        <ExpandableCard triggerLabel="Expand">
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
        </ExpandableCard>
        <ExpandableCard triggerLabel="Expand">
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
        </ExpandableCard>
      </>
    ),
  }
};
const Template = (args) => <Accordion {...args} />;

export const Default = Template.bind({});
