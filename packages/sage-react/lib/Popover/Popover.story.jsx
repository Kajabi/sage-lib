import React from 'react';
import { Popover } from './Popover';

export default {
  title: 'Sage/Popover',
  component: Popover,
};
const Template = (args) => <Popover {...args} />;

// Each story then reuses that template
export const Default = Template.bind({});
Default.args = {
  label: 'Learn more',
  icon: 'add',
  iconOnly: true,
  moreLinkURL: '//example.com',
  title: 'Amazing popover'
};

// storiesOf('Sage/Popover', module)
//   .addDecorator(withKnobs)
//   .addDecorator(centerXY)
//   .add('Default', () => (
//     <Popover
//       label={text('Trigger Label', 'Learn more')}
//       icon={select('Trigger icon', SageTokens.ICONS, SageTokens.ICONS.QUESTION_CIRCLE)}
//       iconOnly={boolean('Icon only trigger', true)}
//       moreLinkURL="//example.com"
//       title="Amazing popover"
//     >
//       <p>Testing...</p>
//     </Popover>
//   ));
