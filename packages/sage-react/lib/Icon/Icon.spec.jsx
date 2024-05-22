require('../test/testHelper');

import React from 'react';
import { render, screen } from '@testing-library/react';
import { Icon } from './Icon';

describe('Sage Icon', () => {
  it('sets the icon class appropriately', () => {
    const props = {
      icon: Icon.ICONS.ARCHIVE
    };

    render(<Icon {...props} />);
    screen.findByText('sage-icon-archive');
  });

  it('is aria-hidden when label is NOT present', () => {
    const props = {
      icon: Icon.ICONS.ARCHIVE,
    };

    render(<Icon {...props} />);
    expect(screen.queryByRole('img')).toBeFalsy();
  });

  it('renders wrapper when cardColor present', () => {
    const props = {
      cardColor: Icon.CARD_COLORS.INFO,
      icon: Icon.ICONS.INFO_CIRCLE,
    };

    render(<Icon {...props} />);
    screen.findByText('sage-icon-background');
  });

  // TODO: Revisit as we look at Sage React Icon with Pine
  // it('has aria-label when label prop passed', () => {
  //   const props = {
  //     icon: Icon.ICONS.INFO_CIRCLE,
  //     label: 'information',
  //   };

  //   render(<Icon {...props} />);
  //   expect(screen.getByLabelText('information'));
  // });

  it('sets style icon background height and width to be equal when circular true', () => {
    const props = {
      backgroundHeight: '15px',
      cardColor: Icon.CARD_COLORS.INFO,
      circular: true,
      icon: Icon.ICONS.INFO_CIRCLE,
    };

    render(<Icon {...props} />);

    expect(screen.findByText(`--sage-icon-background-height:${props.backgroundHeight}`));
    expect(screen.findByText(`--sage-icon-background-width:${props.backgroundHeight}`));
  });
});
