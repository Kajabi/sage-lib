import React from 'react';
import PropTypes from 'prop-types';
import { ProductColorPickerCard } from '../..';
import {
  Button,
  Card,
  SageClassnames,
} from '../../../../..';

export const CourseAppearance = ({ onChangeStep }) => (
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
      subtext="Applies to the audio player and page buttons."
    />
    {/* TODO: dev to add image uploader and sync changes with SVG graphic */}
    [image upload]
    <Button.Group gap={Button.Group.GAP_OPTIONS.MD}>
      <Button
        color={Button.COLORS.SECONDARY}
        raised={false}
        onClick={() => onChangeStep('course-1')}
      >
        Go back
      </Button>
      <Button
        color={Button.COLORS.PRIMARY}
        fullWidth={true}
        onClick={() => onChangeStep('course-3')}
      >
        Continue
      </Button>
    </Button.Group>
  </div>
);

CourseAppearance.defaultProps = {
  onChangeStep: (step) => step,
};

CourseAppearance.propTypes = {
  onChangeStep: PropTypes.func,
};
