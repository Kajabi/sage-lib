import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Input,
  SageClassnames,
  Textarea,
} from '../../../../..';

// TODO: Add state/story management for input data to persist
// TODO: Use field state to toggle disabled button
// TODO: Sync changes to fields with SVG graphic
export const CourseDetails = ({ onChangeStep }) => (
  <div className={SageClassnames.GRID_PANEL}>
    <h5 className={`${SageClassnames.TYPE.HEADING_5} ${SageClassnames.SPACERS.MD_BOTTOM}`}>
      Course details
    </h5>
    <Input
      id="course-details-title"
      label="Course title"
    />
    <Textarea
      id="course-details-description"
      label="Brief description"
    />
    <Button.Group gap={Button.Group.GAP_OPTIONS.MD}>
      <Button
        color={Button.COLORS.SECONDARY}
        raised={false}
        onClick={() => onChangeStep(null)}
      >
        Go back
      </Button>
      <Button
        color={Button.COLORS.PRIMARY}
        fullWidth={true}
        onClick={() => onChangeStep('course-2')}
      >
        Continue
      </Button>
    </Button.Group>
  </div>
);

CourseDetails.defaultProps = {
  onChangeStep: (step) => step,
};

CourseDetails.propTypes = {
  onChangeStep: PropTypes.func,
};
