import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Frame,
  Icon,
  SageClassnames,
  SageTokens,
  Tabs,
} from '../../..';

export const GetStartedTabs = ({ tabsContent }) => {
  const [activeTab, setActiveTab] = React.useState(tabsContent[0].id);

  return (
    <Frame
      direction={Frame.DIRECTIONS.HORIZONTAL}
      gap={Frame.GAPS.XL}
      align={Frame.ALIGNMENTS.CENTER_SPREAD}
    >
      <Frame width="240px" gap={Frame.GAPS.SM}>
        {tabsContent.map(({
          completed = false,
          icon,
          id,
          label,
          subtext,
        }) => (
          <Tabs.Item
            key={`get-started-tab-${id}`}
            isActive={id === activeTab}
            itemStyle={Tabs.Item.STYLES.CHOICE}
            panelId={id}
            onClick={() => setActiveTab(id)}
            style={{ width: '100%', padding: '16px' }}
          >
            <Frame
              direction={Frame.DIRECTIONS.HORIZONTAL}
              gap={Frame.GAPS.XS}
              align={Frame.ALIGNMENTS.TOP_LEFT}
              width={Frame.WIDTHS.FILL}
            >
              <Icon
                adjacentType={Icon.ADJACENT_TYPES.BODY}
                color={completed ? Icon.COLORS.SAGE_300 : Icon.COLORS.INHERIT}
                icon={completed ? Icon.ICONS.CHECK_CIRCLE_FILLED : icon}
              />
              <Frame gap={Frame.GAPS.NONE}>
                <p className={SageClassnames.TYPE.HEADING_6}>
                  {label}
                </p>
                <p className={`${SageClassnames.TYPE.BODY_SMALL} ${SageClassnames.TYPE_COLORS.CHARCOAL_100}`}>
                  {subtext}
                </p>
              </Frame>
            </Frame>
          </Tabs.Item>
        ))}
      </Frame>
      <Frame width={Frame.WIDTHS.FLEX}>
        {tabsContent.map(({
          cta: {
            label,
            learnMoreUrl,
            url,
          },
          description,
          graphic,
          id,
          title,
        }) => (
          <Tabs.Pane
            id={id}
            isActive={id === activeTab}
            key={`get-started-tab-pane-${id}`}
          >
            {graphic}
            <Frame gap={Frame.GAPS.XS}>
              <h5 className={SageClassnames.TYPE.HEADING_5}>
                {title}
              </h5>
              <p className={`${SageClassnames.TYPE.BODY} ${SageClassnames.TYPE_COLORS.CHARCOAL_100}`}>
                {description}
              </p>
            </Frame>
            <Button.Group gap={Button.Group.GAP_OPTIONS.SM}>
              <Button
                color={Button.COLORS.PRIMARY}
                href={url}
              >
                {label}
              </Button>
              <Button
                color={Button.COLORS.PRIMARY}
                subtle={true}
                icon={SageTokens.ICONS.LAUNCH}
                iconPosition={Button.ICON_POSITIONS.RIGHT}
                href={learnMoreUrl}
              >
                Learn more
              </Button>
            </Button.Group>
          </Tabs.Pane>
        ))}
      </Frame>
    </Frame>
  );
};

GetStartedTabs.defaultProps = {};

GetStartedTabs.propTypes = {
  tabsContent: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
