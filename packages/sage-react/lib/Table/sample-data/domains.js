import React from 'react';
import Button from '../../Button';
import { SageTokens } from '../../configs';
import Label from '../../Label';

export const domains = [
  {
    domain: "www.daydreamsurfshop.mykajabi.com",
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
        onClick={() => console.log('do something!')}
        icon={SageTokens.ICONS.PEN}
        iconOnly={true}
      >
        Edit
      </Button>
    ),
  },
  {
    domain: "courses.daydreamsurfshop.com",
    status: {
      value: {
        value: 'Connected',
        color: Label.COLORS.PUBLISHED,
      },
    },
    options: (
      <Button
        color={Button.COLORS.SECONDARY}
        subtle={true}
        onClick={() => console.log('go somewhere!')}
        icon={SageTokens.ICONS.CARET_RIGHT}
        iconOnly={true}
      >
        View Settings
      </Button>
    ),
  }
]
