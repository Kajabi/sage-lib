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
        <p>
          Maximize your profit by adding an Upsell to your order flow.
          This section might wrap to two lines.
        </p>
        <p>Here is the second line. It has some text also.</p>
      </>
    ),
    headerIndicator: (
      <>
      </>
    ),
    // graphic: {
    //   element: (<img src="//source.unsplash.com/random/272x272" alt="" />)
    // },
    // eslint-disable-next-line no-console
    onExit: () => { console.log('Add your own dismiss functionality here!'); },
    title: 'Creation Wizard Title',
  },
  argTypes: {
    ...selectArgs({
      // cardColor: NextBestAction.COLORS,
    }),
  },
};
const Template = (args) => <CreationWizard {...args} />;
export const Default = Template.bind({});

export const WiredExample = () => {
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
        active={creationWizardActive}
        bodyActions={(
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
        onExit={() => setCreationWizardActive(false)}
        title="Creation Wizard Title"
      />
    </>
  );
};
