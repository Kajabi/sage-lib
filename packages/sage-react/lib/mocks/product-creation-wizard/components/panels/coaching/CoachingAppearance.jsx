import React from 'react';
import PropTypes from 'prop-types';
import { ProductColorPickerCard } from '../..';
import {
  Button,
  Card,
  SageClassnames,
} from '../../../../..';

export const CoachingAppearance = ({ onChangeStep }) => (
  <div className={SageClassnames.PANEL_GRID}>
    <Card.Stack>
      <h5 className={`${SageClassnames.TYPE.HEADING_5}`}>
        Customize your course&rsquo;s appearance
      </h5>
      <p className={`${SageClassnames.TYPE.BODY_SMALL} ${SageClassnames.TYPE_COLORS.CHARCOAL_100}`}>
        Choose a color and image to help brand your course.
        These will be shown at checkout and throughout the member experience.
      </p>
    </Card.Stack>
    <ProductColorPickerCard
      title="Primary color"
      subtext="Applies to the buttons and icons."
    />
    <ProductColorPickerCard
      title="Secondary color"
      subtext="Applies to the hero section background."
    />
    {/* TODO: Dev to add image uploader and sync changes with SVG graphic */}
    [image upload]
    <Button.Group gap={Button.Group.GAP_OPTIONS.MD}>
      <Button
        color={Button.COLORS.SECONDARY}
        onClick={() => onChangeStep('coaching-2')}
      >
        Go back
      </Button>
      <Button
        color={Button.COLORS.PRIMARY}
        fullWidth={true}
        onClick={() => onChangeStep('coaching-4')}
      >
        Continue
      </Button>
    </Button.Group>
  </div>
);

CoachingAppearance.defaultProps = {
  onChangeStep: (step) => step,
};

CoachingAppearance.propTypes = {
  onChangeStep: PropTypes.func,
};
