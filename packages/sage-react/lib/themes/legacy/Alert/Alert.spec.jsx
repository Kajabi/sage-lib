require('../test/testHelper');

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Alert } from './Alert';

import { ALERT_COLORS, } from './configs';
import { SageTokens } from '../configs';

function setup(defaultProps = {
  color: Alert.COLORS.INFO
}) {
  render(<Alert {...defaultProps} />);
}

const colorList = {
  [ALERT_COLORS.APPROACHING]: SageTokens.ICONS.WARNING,
  [ALERT_COLORS.DANGER]: SageTokens.ICONS.DANGER,
  [ALERT_COLORS.EXCEEDED]: SageTokens.ICONS.DANGER,
  [ALERT_COLORS.INFO]: SageTokens.ICONS.INFO_CIRCLE,
  [ALERT_COLORS.REACHED]: SageTokens.ICONS.FLAG,
  [ALERT_COLORS.SUCCESS]: SageTokens.ICONS.CHECK_CIRCLE,
  [ALERT_COLORS.WARNING]: SageTokens.ICONS.WARNING,
};

describe('Sage Alert', () => {
  Object.keys(colorList).map((color) => {
    it(`renders proper icon for Alert Color: "${color}"`, () => {
      const defaultProps = {
        color
      };

      setup(defaultProps);
      const icon = document.querySelector('.sage-alert__icon');
      expect(icon).toHaveClass(`sage-icon-${colorList[color]}`);
    });
    return null;
  });

  it('renders correctly with specified props', () => {
    const defaultProps = {
      color: Alert.COLORS.APPROACHING,
      title: "You've used 80% of available pages",
      titleAddon: '(# of # pages)',
      description: 'Upgrade your plan to access unlimited landing pages.',
      dismissable: true,
    };
    setup(defaultProps);

    expect(screen.getByRole('heading')).toHaveTextContent("You've used 80% of available pages (# of # pages)");

    const description = document.querySelector('.sage-alert__desc');
    expect(description).toHaveTextContent(/Upgrade your plan/);

    expect(screen.getByRole('button'));
  });

  it('dismisses the modal when closed', async () => {
    const props = {
      color: Alert.COLORS.DANGER,
      dismissable: true,
    };

    const user = userEvent.setup();
    render(<Alert {...props} />);

    await user.click(screen.getByRole('button', { value: 'Close' }));

    expect(screen.queryByRole('button')).toBeFalsy();
  });
});
