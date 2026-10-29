require('../test/testHelper');

import React from 'react';
import PropTypes from 'prop-types';
import { render, screen } from '@testing-library/react';
import { SageTokens } from '../configs';
import { Choice } from './Choice';

describe('Sage Choice', () => {
  // prop-types logs each message once per module, so a warning test would
  // pass or fail depending on what rendered before it.
  beforeEach(() => {
    PropTypes.checkPropTypes.resetWarningCache();
  });

  it('hides the icon from assistive tech when the choice has text', () => {
    const { container } = render(
      <Choice type={Choice.TYPES.ICON} icon={SageTokens.ICONS.PEN} text="Edit" />
    );

    expect(container.querySelector('pds-icon')).toHaveAttribute('aria-hidden', 'true');
  });

  it('names an icon-only choice by its aria-label and hides the icon', () => {
    const { container } = render(
      <Choice type={Choice.TYPES.ICON} icon={SageTokens.ICONS.PEN} aria-label="Edit" />
    );

    expect(screen.getByRole('tab', { name: 'Edit' })).toBeInTheDocument();
    expect(container.querySelector('pds-icon')).toHaveAttribute('aria-hidden', 'true');
  });

  it('names an arrow choice by its aria-labelledby and hides the arrow', () => {
    const { container } = render(
      <>
        <span id="next-step">Next step</span>
        <Choice type={Choice.TYPES.ARROW} aria-labelledby="next-step" />
      </>
    );

    expect(screen.getByRole('tab', { name: 'Next step' })).toBeInTheDocument();
    expect(container.querySelector('pds-icon')).toHaveAttribute('aria-hidden', 'true');
  });

  it('leaves the icon exposed and warns when an icon-only choice has no name', () => {
    const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    const { container } = render(<Choice type={Choice.TYPES.ICON} icon={SageTokens.ICONS.PEN} />);

    expect(container.querySelector('pds-icon')).not.toHaveAttribute('aria-hidden');
    expect(errorSpy).toHaveBeenCalledWith(expect.stringContaining('an icon-only Choice needs `aria-label`'));
    errorSpy.mockRestore();
  });

  it('names an icon-only radio choice by radioConfigs\' own aria-label and hides the icon', () => {
    const { container } = render(
      <Choice
        type={Choice.TYPES.ICON}
        icon={SageTokens.ICONS.PEN}
        radioConfigs={{ name: 'opt', id: 'opt-1', onChange: () => {}, value: 'opt-1', 'aria-label': 'Edit' }}
      />
    );

    expect(screen.getByRole('radio', { name: 'Edit' })).toBeInTheDocument();
    expect(container.querySelector('pds-icon')).toHaveAttribute('aria-hidden', 'true');
  });

  it('does not take a radio choice\'s name from the Choice\'s own aria-label, and warns', () => {
    const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    const { container } = render(
      <Choice
        type={Choice.TYPES.ICON}
        icon={SageTokens.ICONS.PEN}
        aria-label="Edit"
        radioConfigs={{ name: 'opt', id: 'opt-1', onChange: () => {}, value: 'opt-1' }}
      />
    );

    expect(container.querySelector('pds-icon')).not.toHaveAttribute('aria-hidden');
    expect(errorSpy).toHaveBeenCalledWith(expect.stringContaining('an icon-only Choice needs `aria-label`'));
    errorSpy.mockRestore();
  });
});
