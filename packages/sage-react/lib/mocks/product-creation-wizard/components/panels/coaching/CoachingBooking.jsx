import React from 'react';
import PropTypes from 'prop-types';
import {
  // Alert,
  Button,
  Dot,
  Icon,
  Input,
  Panel,
  SageClassnames,
  Tabs,
} from '../../../../..';
import { CoachingCalendlyDropdown } from './CoachingCalendlyDropdown';

export const CoachingBooking = ({ onChangeStep }) => {
  // TODO: Dev to add the following in final implementation:
  // - Add state/story management for input data to persist
  // - Use field state to toggle disabled button
  // - Sync changes to fields with SVG graphic

  const tabChoiceSettings = {
    tabChoiceType: Tabs.Item.CHOICE_TYPES.ICON,
  };

  return (
    <div className={SageClassnames.PANEL_GRID}>
      <Panel.Stack>
        <h5 className={`${SageClassnames.TYPE.HEADING_5}`}>
          How should clients book your sessions?
        </h5>
        <p className={`${SageClassnames.TYPE.BODY_SMALL} ${SageClassnames.TYPE_COLORS.CHARCOAL_100}`}>
          You control whether your sessions are scheduled
          with Kajabi Calendar, Calendly, or custom links.
        </p>
      </Panel.Stack>

      {/*
        TODO: Dev to wire logic to check for connection to Calendly
        <Alert
          color={Alert.COLORS.INFO}
          title="Connect Calendly to your Kajabi account"
          description="Automatically add sessions to your calendar when you connect with Calendly."
          actions={(
            <Link href="#TODO-dev-url-or-action">
              Connect with Calendly
            </Link>
          )}
        />
      */}

      <Tabs
        useSeparator={true}
        tabs={[
          {
            id: 'tab-1',
            label: 'Calendly',
            tabChoiceIcon: null,
            tabChoiceType: Tabs.Item.CHOICE_TYPES.GRAPHIC,
            content: (
              <Panel.Stack>
                <CoachingCalendlyDropdown
                  items={[
                    {
                      color: Dot.COLORS.PURPLE,
                      label: 'Flow & Let Go - 1:1 Yoga Class',
                      subtext: '45 minutes, One-on-One with Aditi Shah',
                    },
                    {
                      color: Dot.COLORS.SAGE,
                      label: 'Beginner Strength Class',
                      subtext: '1 hour, One-on-One with Olivia Amato',
                    },
                    {
                      color: Dot.COLORS.ORANGE,
                      label: 'Free Consultation',
                      subtext: '30 minutes, One-on-One with Olivia Amato',
                    }
                  ]}
                  initialLabel="Event type"
                />
                <p className={`${SageClassnames.TYPE.BODY_XSMALL} ${SageClassnames.TYPE_COLORS.CHARCOAL_100}`}>
                  Clients will schedule through this event’s booking page.
                </p>
              </Panel.Stack>
            ),
            // TODO: Add `children` to `Tabs` items processing
            // so this can be passed down successfully
            // https://kajabi.atlassian.net/browse/SAGE-330
            children: (
              <>
                [calendly icon]
                <p className={SageClassnames.TYPE.BODY_SMALL_MED}>Calendly</p>
              </>
            ),
            ...tabChoiceSettings,
          },
          {
            id: 'tab-2',
            label: 'Custom link',
            tabChoiceIcon: Icon.ICONS.URL,
            tabChoiceType: Tabs.Item.CHOICE_TYPES.ICON,
            content: (
              <div className={SageClassnames.GRID_CARD}>
                <Input
                  id="coaching-booking-custom-link"
                  label="Custom link"
                  message="You can use a link from Calendly, Acuity, Google Calendar, etc."
                />
              </div>
            ),
            children: (
              <>
                <Icon name={Icon.ICONS.URL} />
                <p className={SageClassnames.TYPE.BODY_SMALL_MED}>
                  Calendly
                </p>
              </>
            ),
            ...tabChoiceSettings,
          },
          {
            id: 'tab-3',
            label: 'Manual booking',
            tabChoiceIcon: Icon.ICONS.CALENDAR_SIMPLE,
            tabChoiceType: Tabs.Item.CHOICE_TYPES.ICON,
            content: (
              <div className={SageClassnames.GRID_CARD}>
                <Input
                  id="coaching-booking-custom-address"
                  label="Address"
                  placeholder="e.g., 123 Main St., https://zoom.us*"
                />
                <Input
                  id="coaching-booking-duration"
                  label="Duration"
                  message="Set the duration of your booking."
                />
              </div>
            ),
            children: (
              <>
                <Icon name={Icon.ICONS.CALENDAR_SIMPLE} />
                <p className={SageClassnames.TYPE.BODY_SMALL_MED}>Calendly</p>
              </>
            ),
            ...tabChoiceSettings,
          },
        ]}
        tabStyle={Tabs.STYLES.CHOICE}
      />
      <Button.Group gap={Button.Group.GAP_OPTIONS.MD}>
        <Button
          color={Button.COLORS.SECONDARY}
          onClick={() => onChangeStep('coaching-1')}
        >
          Go back
        </Button>
        <Button
          color={Button.COLORS.PRIMARY}
          fullWidth={true}
          onClick={() => onChangeStep('coaching-3')}
        >
          Continue
        </Button>
      </Button.Group>
    </div>
  );
};

CoachingBooking.defaultProps = {
  onChangeStep: (step) => step,
};

CoachingBooking.propTypes = {
  onChangeStep: PropTypes.func,
};
