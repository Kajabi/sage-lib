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
    <Frame direction={Frame.DIRECTIONS.HORIZONTAL} gap={Frame.GAPS.LG}>
      <Frame width="240px" gap={Frame.GAPS.SM}>
        {tabsContent.map(({
          completed = false,
          icon,
          id,
          label,
        }) => (
          <Tabs.Item
            // TODO: Improve on the existing tagname logic within to allow increased accessibility. https://kajabi.atlassian.net/browse/SAGE-623
            key={`get-started-tab-${id}`}
            isActive={id === activeTab}
            itemStyle={Tabs.Item.STYLES.CHOICE}
            panelId={id}
            onClick={() => setActiveTab(id)}
            style={{ width: '100%' }}
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
              <p className={SageClassnames.TYPE.BODY_MED} style={{ flex: 1 }}>{label}</p>
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
            panelSpacing={true}
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
