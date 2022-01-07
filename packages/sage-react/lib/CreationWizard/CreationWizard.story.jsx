import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { CreationWizard } from './CreationWizard';
import { Button } from '../Button';
import { Indicator } from '../Indicator';

export default {
  title: 'Sage/Creation Wizard',
  component: CreationWizard,
  args: {
    bodyActions: (
      <>
        <Button
          color={Button.COLORS.SECONCARY}
        >
          Go Back
        </Button>
        <Button
          color={Button.COLORS.PRIMARY}
        >
          Add an Upsell
        </Button>
      </>
    ),
    body: (
      <>
        <p>Scroll me</p>
        <p>Scroll me</p>
        <p>Scroll me</p>
        <p>Scroll me</p>
        <p>Scroll me</p>
        <p>Scroll me</p>
        <p>Scroll me</p>
        <p>Scroll me</p>
        <p>Scroll me</p>
      </>
    ),
    headerIndicator: true,
    indicator: {
      currentItem: 2,
      label: 'Pages',
      numItems: 7
    },
    onExit: () => { console.log('Add your own dismiss functionality here!'); },
    title: 'Creation Wizard Title',
  }
};
const Template = (args) => <CreationWizard {...args} />;
export const Default = Template.bind({});

export const WiredExample = (args) => {
  const [creationWizardActive, setCreationWizardActive] = React.useState(false);

  return (
    <>
      <Button
        color={Button.COLORS.PRIMARY}
        onClick={() => setCreationWizardActive(!creationWizardActive)}
      >
        Toggle creation wizard
      </Button>
      <CreationWizard
        {...args}
        active={creationWizardActive}
        bodyActions={(
          <>
            <Button
              color={Button.COLORS.SECONDARY}
              raised={false}
            >
              Go Back
            </Button>
            <Button
              color={Button.COLORS.PRIMARY}
            >
              Save and continue
            </Button>
          </>
        )}
        body={(
          <>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
            <p>scroll me</p>
          </>
        )}
        feature={(
          <>
            <p>live preview</p>
          </>
        )}
        indicator={{
          currentItem: args.indicator.currentItem,
          label: args.indicator.label,
          numItems: args.indicator.numItems
        }}
        onExit={() => setCreationWizardActive(false)}
        title="Creation Wizard Title"
      />
    </>
  );
};
