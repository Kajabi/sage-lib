import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Input,
  SageClassnames,
  Tabs,
  Textarea,
} from '../../../../..';

export const CoachingDetails = ({ onChangeStep }) => {
  // TODO: Dev to add the following in final implementation:
  // - Add state/story management for input data to persist
  // - Use field state to toggle disabled button
  // - Sync changes to fields with SVG graphic

  const tabChoiceSettings = {
    tabChoiceType: Tabs.Item.CHOICE_TYPES.RADIO,
    tabChoiceIcon: null,
    tabChoiceIconAlignment: Tabs.Item.ICON_ALIGNMENTS.START,
  };

  return (
    <div className={SageClassnames.GRID_PANEL}>
      <h5 className={`${SageClassnames.TYPE.HEADING_5} ${SageClassnames.SPACERS.MD_BOTTOM}`}>
        Choose your program
      </h5>
      <p className={`${SageClassnames.TYPE.BODY_SMALL} ${SageClassnames.TYPE_COLORS.CHARCOAL_100}`}>
        Pick a program length that best fits for your coaching topic.
      </p>

      <Tabs
        useSeparator={true}
        tabs={[
          {
            id: 'tab-1',
            label: 'Single session',
            subtext: 'Create a standalone coaching session.',
            content: (
              <div className={SageClassnames.PANEL_GRID}>
                <Input
                  id="coaching-details-title"
                  label="Title"
                />
                <Input
                  id="coaching-details-coach-name"
                  label="Coach name"
                />
                <Textarea
                  id="coaching-details-description"
                  label="Description (optional)"
                />
              </div>
            ),
            ...tabChoiceSettings,
          },
          {
            id: 'tab-2',
            label: 'Package',
            subtext: 'Build a program with multiple coaching sessions.',
            content: (
              <div className={SageClassnames.PANEL_GRID}>
                <Input
                  id="coaching-details-title"
                  label="Title"
                />
                <Input
                  id="coaching-details-coach-name"
                  label="Coach name"
                />
                <Textarea
                  id="coaching-details-description"
                  label="Description (optional)"
                />
                <Input
                  id="coaching-details-session-count"
                  label="Total sessions"
                  type="number"
                />
              </div>
            ),
            ...tabChoiceSettings,
          },
        ]}
        tabLayout={Tabs.LAYOUTS.STACKED}
        tabStyle={Tabs.STYLES.CHOICE}
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
          onClick={() => onChangeStep('coaching-2')}
        >
          Save and continue
        </Button>
      </Button.Group>
    </div>
  );
};

CoachingDetails.defaultProps = {
  onChangeStep: (step) => step,
};

CoachingDetails.propTypes = {
  onChangeStep: PropTypes.func,
};
