import React, { useState } from 'react';
import { Accordion } from './Accordion';
import { ExpandableCard } from '../ExpandableCard';
import { Checkbox } from '../Toggle';

export default {
  title: 'Sage/Accordion',
  component: ExpandableCard
};

const MultipleTemplate = () => {
  const [activePanel, setActivePanel] = useState('panel-3');

  const handleChange = (panel) => (event, newExpanded) => {
    setActivePanel(newExpanded ? panel : false);
  };

  return (
    <Accordion testId="exampleSingleAccordion">
      <ExpandableCard name="panel-1" expanded={activePanel === 'panel-1'} onClick={handleChange('panel-1')} alignArrowRight={true} testId="firstExamplePanel" triggerLabel="Expand">
        <Checkbox
          checked={false}
          disabled={false}
          hasError={false}
          id="checkbox1-demo"
          label="Grant offers"
          name="checkbox1-demo"
          testId="grantOffers"
        />
        <Checkbox
          checked={false}
          disabled={false}
          hasError={false}
          id="checkbox2-demo"
          label="Add tags"
          name="checkbox2-demo"
          testId="addTags"
        />
        <Checkbox
          checked={false}
          disabled={false}
          hasError={false}
          id="checkbox3-demo"
          label="Subscribe to emails"
          name="checkbox3-demo"
          testId="subscribeToEmails"
        />
      </ExpandableCard>
      <ExpandableCard name="panel-2" alignArrowRight={true} expanded={activePanel === 'panel-2'} onClick={handleChange('panel-2')} testId="secondExpandablePanel" triggerLabel="Expand">
        <Checkbox
          checked={false}
          disabled={false}
          hasError={false}
          id="checkbox1-demo"
          label="Grant offers"
          name="checkbox1-demo"
          testId="grantOffers"
        />
        <Checkbox
          checked={false}
          disabled={false}
          hasError={false}
          id="checkbox2-demo"
          label="Add tags"
          name="checkbox2-demo"
          testId="addTags"
        />
        <Checkbox
          checked={false}
          disabled={false}
          hasError={false}
          id="checkbox3-demo"
          label="Subscribe to emails"
          name="checkbox3-demo"
          testId="subscribeToEmails"
        />
      </ExpandableCard>
      <ExpandableCard name="panel-3" alignArrowRight={true} expanded={activePanel === 'panel-3'} onClick={handleChange('panel-3')} testId="thirdExpandablePanel" triggerLabel="Expand">
        <Checkbox
          checked={false}
          disabled={false}
          hasError={false}
          id="checkbox1-demo"
          label="Grant offers"
          name="checkbox1-demo"
          testId="grantOffers"
        />
        <Checkbox
          checked={false}
          disabled={false}
          hasError={false}
          id="checkbox2-demo"
          label="Add tags"
          name="checkbox2-demo"
          testId="addTags"
        />
        <Checkbox
          checked={false}
          disabled={false}
          hasError={false}
          id="checkbox3-demo"
          label="Subscribe to emails"
          name="checkbox3-demo"
          testId="subscribeToEmails"
        />
      </ExpandableCard>
    </Accordion>
  );
};

const DefaultTemplate = () => (
  <Accordion>
    <ExpandableCard name="panel-1" alignArrowRight={true} triggerLabel="Expand" testId="">
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
    <ExpandableCard name="panel-2" alignArrowRight={true} expanded={true} triggerLabel="Expand">
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
    <ExpandableCard name="panel-3" alignArrowRight={true} triggerLabel="Expand">
      <p>Panel 3</p>
    </ExpandableCard>
  </Accordion>
);

export const SinglePanel = MultipleTemplate.bind({});
export const Multiple = DefaultTemplate.bind({});
