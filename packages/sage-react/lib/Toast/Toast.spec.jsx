require('../test/testHelper');

import React from 'react';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Toast } from './Toast';

import { TOAST_TYPES } from './configs';
import { SageTokens } from '../configs';

describe('Sage Toast', () => {
  it('displays the Toast when isActive', () => {
    const props = {
      isActive: true
    };

    render(<Toast {...props} />);
    const wrapper = document.querySelector('.sage-toast');
    expect(wrapper).not.toBeNull();
  });

  it('displays the danger toast', () => {
    const props = {
      isActive: true,
      type: TOAST_TYPES.DANGER
    };
    render(<Toast {...props} />);
    const wrapper = document.querySelector('.sage-toast');
    expect(wrapper).toHaveClass('sage-toast--style-danger');
  });

  it('displays the loading toast', () => {
    const props = {
      isActive: true,
      type: TOAST_TYPES.LOADING
    };
    render(<Toast {...props} />);
    const wrapper = document.querySelector('.sage-toast');
    expect(wrapper).toHaveClass('sage-toast--style-loading');
  });

  it('displays a custom icon', () => {
    const props = {
      isActive: true,
      icon: SageTokens.ICONS.FLAG
    };
    render(<Toast {...props} />);
    const wrapper = document.querySelector('.sage-toast');
    expect(wrapper).not.toBeNull();

    const icon = document.querySelector('.sage-toast__icon');
    expect(icon).not.toBeNull();
  });

  it('displays the non dismissable toast', async () => {
    const props = {
      isActive: true,
      isDismissable: false,
      title: 'non dismissable toast title'
    };

    render(<Toast {...props} />);
    let wrapper = document.querySelector('.sage-toast');
    expect(wrapper).not.toBeNull();

    // revisit this test if a failure occurs as this may be flakey
    await waitForElementToBeRemoved(
      screen.queryByText(props.title)
    ).catch(() => {
      wrapper = document.querySelector('.sage-toast');
      return expect(wrapper).not.toBeNull();
    });
  });

  it('displays a toast win an internal link', () => {
    const props = {
      isActive: true,
      link: {
        href: '#',
        text: 'link text'
      }
    };

    render(<Toast {...props} />);
    const wrapper = document.querySelector('.sage-toast');
    expect(wrapper).not.toBeNull();

    const link = document.querySelector('.sage-toast__button');
    expect(link).not.toBeNull();
  });

  it('dismisses the toast when dismissed', async () => {
    const props = {
      isActive: true,
      isDismissable: false
    };

    const user = userEvent.setup();
    render(<Toast {...props} />);
    let wrapper = document.querySelector('.sage-toast');
    expect(wrapper).not.toBeNull();

    await user.click(screen.getByRole('button'));
    wrapper = document.querySelector('.sage-toast');
    expect(wrapper).toBeNull();
  });

  it('dismisses the toast on timeout', () => {
    let callbackFired = false;
    const props = {
      isActive: true,
      timeout: 3000,
      isDismissable: true,
      onDismiss: () => {
        callbackFired = true;
      },
      title: 'toast that has a timeout'
    };

    render(<Toast {...props} />);
    setTimeout(4000);
    const wrapper = document.querySelector('.sage-toast');
    expect(wrapper).not.toBeNull();

    waitForElementToBeRemoved(
      screen.queryByText(props.title)
    ).then(() =>
      expect(callbackFired).toBeTruthy()
    );
  });
});
