import React from 'react';
import { Button } from '../../Button';
import { Label } from '../../Label';
import { Link } from '../../Link';
import { SageTokens } from '../../configs';

export const domains = [
  {
    domain: (
      <Link
        className="sage-table-cell__link--primary"
        removeUnderline={true}
        href="https://www.daydreamsurfshop.mykajabi.com"
      >
        www.daydreamsurfshop.mykajabi.com
      </Link>
    ),
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
    domain: (
      <Link
        className="sage-table-cell__link--primary"
        removeUnderline={true}
        href="https://courses.daydreamsurfshop.com"
      >
        courses.daydreamsurfshop.com
      </Link>
    ),
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
