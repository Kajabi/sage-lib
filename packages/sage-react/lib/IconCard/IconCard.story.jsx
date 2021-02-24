import React from 'react';
// import { storiesOf } from '@storybook/react';
// import { withKnobs, select } from '@storybook/addon-knobs';
// import { centerXY } from '../story-support/decorators';
import { IconCard } from './IconCard';

export default {
  title: 'Sage/IconCard',
  component: IconCard,
  decorators: [(Story) => <div style={{ marginTop: 50 }}><Story/></div>]
};
const Template = (args) => <IconCard {...args} />;

// Each story then reuses that template
export const Default = Template.bind({});
Default.args = {
  color: IconCard.COLORS.DRAFT,
  icon: IconCard.ICONS.CHECK_CIRCLE,
  size: IconCard.SIZES
};

// storiesOf('Sage/Icon Card', module)
//   .addDecorator(withKnobs)
//   .addDecorator(centerXY)
//   .add('Default', () => (
//     <div style={{ marginTop: 50 }}>
//       <IconCard
//         color={select('Color', IconCard.COLORS, IconCard.COLORS.DRAFT)}
//         icon={select('Icon', IconCard.ICONS, IconCard.ICONS.CHECK_CIRCLE)}
//         size={select('Size', IconCard.SIZES)}
//       />
//     </div>
//   ));
