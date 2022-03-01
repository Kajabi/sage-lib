import React from 'react';
import { ProductColorPickerCard } from '../..';
import {
  Button,
  Card,
  SageClassnames,
  SageTokens,
} from '../../../../..';
 
export const CoachingAppearance = ({ onChangeStep }) => {

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
      
      <ProductColorPickerCard
        title="Primary color"
        subtext="Applies to the buttons and icons."
      />
      
      <ProductColorPickerCard
        title="Secondary color"
        subtext="Applies to the hero section background."
      />
      
      [image upload]
      {/* TODO: add image uploader and sync changes with SVG graphic */}
      
      <Button.Group gap={Button.Group.GAP_OPTIONS.MD}>
        <Button
          color={Button.COLORS.SECONDARY}
          raised={false}
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
};
