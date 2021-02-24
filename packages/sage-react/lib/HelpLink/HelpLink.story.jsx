import React from 'react';
import { HelpLink } from './HelpLink';

export default {
  title: 'Sage/HelpLink',
  component: HelpLink,
};
const Template = (args) => <HelpLink target="_blank" referrer="no-referrer" {...args} />;

// Each story then reuses that template
export const Default = Template.bind({});
Default.args = {
  labelIsVisible: false,
  text: 'Learn something'
};

// storiesOf('Sage/HelpLink', module)
//   .addDecorator(withKnobs)
//   .addDecorator(centerXY)
//   .add('Default', () => (
//     <HelpLink href="http://example.com" target="_blank" referrer="no-referrer" labelIsVisible={boolean('Show label', false)}>
//       {text('Text', 'Learn something!')}
//     </HelpLink>
//   ));
