require('../test/testHelper');

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Toggle } from './Toggle';

describe('Sage toggle', () => {
  it('renders radio button type', () => {
    const props = {
      id: 'test-1',
      label: 'Test label',
      name: 'test-1',
      type: Toggle.TYPES.RADIO,
    };

    render(<Toggle {...props} />);

    const input = document.querySelector('input.sage-radio__input');
    expect(input).not.toBeNull();
    expect(input).toHaveAttribute('type', expect.stringMatching('radio'));
  });

  it('sets the checked property', () => {
    const props = {
      checked: true,
      id: 'test-1',
      label: 'Test label',
      name: 'test-1',
      type: Toggle.TYPES.CHECKBOX,
    };

    render(<Toggle {...props} />);

    expect(screen.getByRole('checkbox', { checked: true }));
  });

  it('shows the message', () => {
    const props = {
      id: 'test-1',
      label: 'Test label',
      name: 'test-1',
      message: 'testing the message',
      type: Toggle.TYPES.CHECKBOX,
    };

    render(<Toggle {...props} />);
    expect(screen.findByText('testing the message'));
  });

  it('invokes the onChange event when fired', async () => {
    const changeSpy = jest.fn((value, checked, evt) => {
      expect(value).toEqual('foo');
      expect(evt.target.checked).toBeTruthy();
    });

    const props = {
      id: 'test-1',
      label: 'Test label',
      name: 'test-1',
      onChange: changeSpy,
      type: Toggle.TYPES.RADIO,
      value: 'foo'
    };

    render(<Toggle {...props} />);

    const radio = screen.getByRole('radio', { id: 'test-1', exact: true });
    expect(radio);

    await userEvent.click(radio);

    expect(changeSpy).toHaveBeenCalledTimes(1);
  });

  it('renders standalone', () => {
    const props = {
      id: 'test-1',
      className: 'not-rendered-classname',
      label: 'Test label',
      name: 'test-1',
      standalone: true,
      type: Toggle.TYPES.RADIO,
      value: 'foo'
    };

    render(<Toggle {...props} />);

    const standaloneInput = document.querySelector('.sage-radio--standalone');
    expect(standaloneInput);

    // Length of one is base page in testing-library
    expect(document.querySelectorAll('div')).toHaveLength(1);
  });

  it('renders customContent when present', () => {
    const props = {
      id: 'test-1',
      customContent: '<p class="my-custom-content">Custom Content</p>',
      label: 'Test label',
      name: 'test-1',
      type: Toggle.TYPES.CHECKBOX,
      value: 'foo'
    };

    render(<Toggle {...props} />);

    const customContentContainer = document.querySelector('.sage-checkbox__custom-content');
    expect(customContentContainer).not.toBeNull();

    expect(customContentContainer).toHaveTextContent('my-custom-content');
  });
});
