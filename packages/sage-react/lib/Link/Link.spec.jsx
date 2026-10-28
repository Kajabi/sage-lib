require('../test/testHelper');

import React from 'react';
import { render, screen } from '@testing-library/react';
import { SageTokens } from '../configs';
import { Link } from './Link';

describe('Sage Link', () => {
  it('hides the icon from assistive tech when the link has text', () => {
    const { container } = render(<Link href="/settings" icon={SageTokens.ICONS.PEN}>Edit</Link>);

    expect(container.querySelector('pds-icon')).toHaveAttribute('aria-hidden', 'true');
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
});
