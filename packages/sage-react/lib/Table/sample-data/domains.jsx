import React from 'react';
import { Button, Label, SageTokens } from '../../';

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
        onClick={() => console.log('do something!')} // eslint-disable-line
        icon={SageTokens.ICONS.PEN}
        iconOnly={true}
      >
        Edit
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
        onClick={() => console.log('go somewhere!')} // eslint-disable-line
        icon={SageTokens.ICONS.CARET_RIGHT}
        iconOnly={true}
      >
        View Settings
      </Button>
    ),
  },
];
