require('../test/testHelper');

import React from 'react';
import { render, screen } from '@testing-library/react';
import { HelpLink } from './HelpLink';

describe('Sage HelpLink', () => {
  it('names the link by its text and hides the icon from assistive tech', () => {
    const { container } = render(<HelpLink href="/help" />);

    expect(screen.getByRole('link', { name: 'Learn more' })).toBeInTheDocument();
    expect(container.querySelector('pds-icon')).toHaveAttribute('aria-hidden', 'true');
  });

  it('names a textless help link by its aria-label and hides the icon', () => {
    const { container } = render(<HelpLink href="/help" aria-label="Help with payouts">{null}</HelpLink>);

    expect(screen.getByRole('link', { name: 'Help with payouts' })).toBeInTheDocument();
    expect(container.querySelector('pds-icon')).toHaveAttribute('aria-hidden', 'true');
  });

  it('leaves the icon exposed and warns when there is no text and no name', () => {
    const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    const { container } = render(<HelpLink href="/help">{null}</HelpLink>);

    expect(container.querySelector('pds-icon')).not.toHaveAttribute('aria-hidden');
    expect(errorSpy).toHaveBeenCalledWith(expect.stringContaining('an icon-only HelpLink needs `aria-label`'));
    errorSpy.mockRestore();
  });
});
