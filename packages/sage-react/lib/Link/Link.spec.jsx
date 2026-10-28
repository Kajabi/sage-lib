require('../test/testHelper');

import React from 'react';
import PropTypes from 'prop-types';
import { render, screen } from '@testing-library/react';
import { SageTokens } from '../configs';
import { Link } from './Link';

describe('Sage Link', () => {
  // prop-types logs each message once per module, so a warning test would
  // pass or fail depending on what rendered before it.
  beforeEach(() => {
    PropTypes.checkPropTypes.resetWarningCache();
  });

  it('hides the icon from assistive tech when the link has text', () => {
    const { container } = render(<Link href="/settings" icon={SageTokens.ICONS.PEN}>Edit</Link>);

    expect(container.querySelector('pds-icon')).toHaveAttribute('aria-hidden', 'true');
  });

  it('does not warn when a link with an icon has text', () => {
    const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    render(<Link href="/settings" icon={SageTokens.ICONS.PEN}>Edit</Link>);

    expect(errorSpy).not.toHaveBeenCalled();
    errorSpy.mockRestore();
  });

  it('names an icon-only link by its aria-label and hides the icon', () => {
    const { container } = render(<Link href="/settings" icon={SageTokens.ICONS.PEN} aria-label="Edit settings" />);

    expect(screen.getByRole('link', { name: 'Edit settings' })).toBeInTheDocument();
    expect(container.querySelector('pds-icon')).toHaveAttribute('aria-hidden', 'true');
  });

  it('leaves the icon exposed and warns when an icon-only link has no name', () => {
    const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    const { container } = render(<Link href="/settings" icon={SageTokens.ICONS.PEN} />);

    expect(container.querySelector('pds-icon')).not.toHaveAttribute('aria-hidden');
    expect(errorSpy).toHaveBeenCalledWith(expect.stringContaining('an icon-only Link needs `aria-label`'));
    errorSpy.mockRestore();
  });

  it('treats a blank aria-label as no name', () => {
    const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    const { container } = render(<Link href="/settings" icon={SageTokens.ICONS.PEN} aria-label="  " />);

    expect(container.querySelector('pds-icon')).not.toHaveAttribute('aria-hidden');
    expect(errorSpy).toHaveBeenCalledWith(expect.stringContaining('an icon-only Link needs `aria-label`'));
    errorSpy.mockRestore();
  });

  it('warns when aria-label is not a string', () => {
    const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    render(<Link href="/settings" icon={SageTokens.ICONS.PEN} aria-label={42} />);

    expect(errorSpy).toHaveBeenCalledWith(expect.stringContaining('expected `string`'));
    errorSpy.mockRestore();
  });
});
