import React from 'react';
import {
  Button,
  Card,
  SageClassnames,
  SageTokens,
} from '../../../../..';
 
export const CourseAppearance = ({ onChangeStep }) => {

  return (
    <div className={SageClassnames.PANEL_GRID}>
      <Card.Stack>
        <h5 className={`${SageClassnames.TYPE.HEADING_5}`}>
          Customize your course's appearance
        </h5>
        <p className={`${SageClassnames.TYPE.BODY_SMALL} ${SageClassnames.TYPE_COLORS.CHARCOAL_100}`}>
          Choose a color and image to help brand your course.
          These will be shown at checkout and throughout the member experience.
        </p>
      </Card.Stack>
      
      <Card>
        <Card.Row gridTemplate={SageTokens.GRID_TEMPLATES.TE}>
          <Card.Stack>
            <h6 className={`${SageClassnames.TYPE.HEADING_6}`}>Primary color</h6>
            <p className={`${SageClassnames.TYPE.BODY_SMALL} ${SageClassnames.TYPE_COLORS.CHARCOAL_100}`}>
              applies to the audio player and page buttons.
            </p>
            {/* TODO: Is this copy correct? */}
          </Card.Stack>
          {/* TODO: Color picker goes here and sync changes with SVG graphic */}
        </Card.Row>
      </Card>
      
      [image upload]
      {/* TODO: add image uploader and sync changes with SVG graphic */}
      
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
};
