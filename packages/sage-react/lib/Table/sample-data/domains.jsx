import React from 'react';
import { Button } from '../../Button';
import { Label } from '../../Label';
import { SageTokens } from '../../configs';

export const domains = [
  {
    domain: 'www.daydreamsurfshop.mykajabi.com',
    status: {
      value: {
        value: 'Kajabi Default',
        color: Label.COLORS.INFO,
      },
    },
    options: (
      <Button
        color={Button.COLORS.SECONDARY}
        subtle={true}
        onClick={() => console.log('temp button, not dropdown')} // eslint-disable-line
        icon={SageTokens.ICONS.DOT_MENU_HORIZONTAL}
        iconOnly={true}
      >
        Open Menu
      </Button>
    ),
  },
  {
    domain: 'courses.daydreamsurfshop.com',
    status: {
      value: {
        value: 'Connected',
        color: Label.COLORS.SUCCESS,
      },
    },
    options: (
      <Button
        color={Button.COLORS.SECONDARY}
        subtle={true}
        onClick={() => console.log('temp button, not dropdown')} // eslint-disable-line
        icon={SageTokens.ICONS.DOT_MENU_HORIZONTAL}
        iconOnly={true}
      >
        Open Menu
      </Button>
    ),
  },
];
