import React from 'react';
import { selectArgs } from '../story-support/helpers';
import { Button } from '../Button';
import { SageTokens } from '../configs';
import { EmptyState } from './EmptyState';

export default {
  title: 'Sage/EmptyState',
  component: EmptyState,
  argTypes: {
    ...selectArgs({
      icon: SageTokens.ICONS
    })
  },
  args: {
    children: (
      <>
        <Button>Lorem ipsum</Button>
      </>
    ),
    compact: false,
    icon: SageTokens.ICONS.GEAR,
    text: 'Text Here',
    title: 'Title Here'
  }
}

const Template = (args) => <EmptyState {...args} />;

export const Default = Template.bind({});

// storiesOf('Sage/EmptyState', module)
//   .addDecorator(withKnobs)
//   .addDecorator(centerXY)
//   .add('Default', () => (
//     <Grid container={Grid.CONTAINER_SIZES.XS}>
//       <EmptyState
//         title={text('Title', 'Title Here')}
//         text={text('Text', 'Text Here')}
//         icon={select('Icon', { ...SageTokens.ICONS, NONE: null }, SageTokens.ICONS.GEAR)}
//         compact={boolean('Compact', false)}
//       >
//         <Button>Lorem ipsum</Button>
//       </EmptyState>
//     </Grid>
//   ));
