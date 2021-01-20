import React from 'react';
import { Button } from './Button';

export default {
  title: 'Sage/Button',
  component: Button,
};
const Template = (args) => <Button {...args} />;

// Each story then reuses that template
export const Default = Template.bind({});
Default.args = {
  children: 'Test me',
  color: Button.COLORS.PRIMARY,
  iconOnly: false,
  iconPosition: Button.ICON_POSITIONS.LEFT,
};

// const optionsConfig = {
//   display: 'inline-radio'
// };

// storiesOf('Sage/Button', module)
//   .addDecorator(withKnobs)
//   .addDecorator(centerXY)
//   .add('Default', () => (
//     <div>
//       <Button
//         color={options('Color',
//           Button.COLORS,
//           Button.COLORS.PRIMARY,
//           optionsConfig
//         )}
//         icon={select('Icon', { ...SageTokens.ICONS, NONE: null }, null)}
//         iconOnly={boolean('Icon only?', false)}
//         iconPosition={options('Icon Position',
//           Button.ICON_POSITIONS,
//           Button.ICON_POSITIONS.LEFT,
//           optionsConfig
//         )}
//         title="Click me!"
//         subtle={boolean('Subtle style', false)}
//         small={boolean('Small (subtle only)', false)}
//         alignEnd={boolean('Align end?', false)}
//       >
//         {text('Label', 'Test me')}
//       </Button>
//     </div>
//   ), {
//     notes: { markdown: ButtonNotes }
//   })
//   .add('Button Group', () => (
//     <Button.Group
//       gap={options('Gap',
//         Button.Group.GAP_OPTIONS,
//         Button.Group.GAP_OPTIONS.XS,
//         optionsConfig
//       )}
//     >
//       <Button color={Button.COLORS.SECONDARY}>
//         Cancel
//       </Button>
//       <Button color={Button.COLORS.PRIMARY}>
//         Save
//       </Button>
//     </Button.Group>
//   ), {
//     notes: { markdown: ButtonNotes }
//   });
