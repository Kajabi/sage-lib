import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { centerXY } from '../story-support/decorators';

import { SageTokens } from '../configs';
import Button from '../Button';
import Typeahead from './Typeahead';

storiesOf('Sage/Typeahead', module)
  .addDecorator(withKnobs)
  .addDecorator(centerXY)
  .add('Default', () => (
    <Typeahead items={[
      {
        icon: SageTokens.ICONS.VIDEO_ON,
        title: 'Wow',
        subTitle: 'Wow',
        actions: [
          <Button
            icon={SageTokens.ICONS.VIDEO_ON}
            iconOnly={true}
            subtle={true}
          >
            Do a thing
          </Button>,
          <Button
            icon={SageTokens.ICONS.VIDEO_ON}
            iconOnly={true}
            subtle={true}
          >
            Do a thing
          </Button>
        ]
      },
      {
        icon: SageTokens.ICONS.VIDEO_ON,
        title: 'Wow2',
        subTitle: 'Wow2',
        actions: [
          <Button
            icon={SageTokens.ICONS.VIDEO_ON}
            iconOnly={true}
            subtle={true}
          >
            Do a thing
          </Button>,
          <Button
            icon={SageTokens.ICONS.VIDEO_ON}
            iconOnly={true}
            subtle={true}
          >
            Do a thing
          </Button>
        ]
      }
    ]} />
  ));
