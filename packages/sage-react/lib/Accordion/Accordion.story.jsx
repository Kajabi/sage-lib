import React, { useState } from 'react';
import { Accordion } from './Accordion';
import { ExpandableCard } from '../ExpandableCard';
import { Checkbox } from '../Toggle';

export default {
  title: 'Sage/Accordion',
  component: ExpandableCard,
  // args: {
  //   children: (
  //     // <>
  //     //   <ExpandableCard alignArrowRight={true} expanded={activePanel === 'panel-1'} onClick={handleChange('panel-1')} triggerLabel="Expand">
  //     //     <Checkbox
  //     //       checked={false}
  //     //       disabled={false}
  //     //       hasError={false}
  //     //       id="checkbox1-demo"
  //     //       label="Grant offers"
  //     //       name="checkbox1-demo"
  //     //     />
  //     //     <Checkbox
  //     //       checked={false}
  //     //       disabled={false}
  //     //       hasError={false}
  //     //       id="checkbox2-demo"
  //     //       label="Add tags"
  //     //       name="checkbox2-demo"
  //     //     />
  //     //     <Checkbox
  //     //       checked={false}
  //     //       disabled={false}
  //     //       hasError={false}
  //     //       id="checkbox3-demo"
  //     //       label="Subscribe to emails"
  //     //       name="checkbox3-demo"
  //     //     />
  //     //   </ExpandableCard>
  //     //   <ExpandableCard alignArrowRight={true} expanded={activePanel === 'panel-2'} onClick={handleChange('panel-2')} triggerLabel="Expand">
  //     //     <Checkbox
  //     //       checked={false}
  //     //       disabled={false}
  //     //       hasError={false}
  //     //       id="checkbox1-demo"
  //     //       label="Grant offers"
  //     //       name="checkbox1-demo"
  //     //     />
  //     //     <Checkbox
  //     //       checked={false}
  //     //       disabled={false}
  //     //       hasError={false}
  //     //       id="checkbox2-demo"
  //     //       label="Add tags"
  //     //       name="checkbox2-demo"
  //     //     />
  //     //     <Checkbox
  //     //       checked={false}
  //     //       disabled={false}
  //     //       hasError={false}
  //     //       id="checkbox3-demo"
  //     //       label="Subscribe to emails"
  //     //       name="checkbox3-demo"
  //     //     />
  //     //   </ExpandableCard>
  //     //   <ExpandableCard alignArrowRight={true} expanded={activePanel === 'panel-3'} onClick={handleChange('panel-3')} triggerLabel="Expand">
  //     //     <Checkbox
  //     //       checked={false}
  //     //       disabled={false}
  //     //       hasError={false}
  //     //       id="checkbox1-demo"
  //     //       label="Grant offers"
  //     //       name="checkbox1-demo"
  //     //     />
  //     //     <Checkbox
  //     //       checked={false}
  //     //       disabled={false}
  //     //       hasError={false}
  //     //       id="checkbox2-demo"
  //     //       label="Add tags"
  //     //       name="checkbox2-demo"
  //     //     />
  //     //     <Checkbox
  //     //       checked={false}
  //     //       disabled={false}
  //     //       hasError={false}
  //     //       id="checkbox3-demo"
  //     //       label="Subscribe to emails"
  //     //       name="checkbox3-demo"
  //     //     />
  //     //   </ExpandableCard>
  //     // </>
  //   ),
  // }
};
const Template = (args) => {
  const [activePanel, setActivePanel] = useState('panel-3');

  const handleChange = (panel) => (event, newExpanded) => {
    console.log('panel', panel);
    console.log('expanded ', newExpanded);
    setActivePanel(newExpanded ? panel : false);
    console.log('after update panel', activePanel);
  };

  return (
    <Accordion>
      <ExpandableCard alignArrowRight={true} expanded={activePanel === 'panel-1'} onClick={handleChange('panel-1')} triggerLabel="Expand">
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
      <ExpandableCard alignArrowRight={true} expanded={activePanel === 'panel-2'} onClick={handleChange('panel-2')} triggerLabel="Expand">
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
      <ExpandableCard alignArrowRight={true} expanded={activePanel === 'panel-3'} onClick={handleChange('panel-3')} triggerLabel="Expand">
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
    </Accordion>
  );
};

export const Default = Template.bind({});
