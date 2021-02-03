import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { TabsItem } from './TabsItem';
import { TabsPane } from './TabsPane';
import { TAB_STYLES, TAB_LAYOUTS, tabsItemsPropTypes } from './configs';

export const Tabs = ({
  alignItemsCenter,
  className,
  initialActiveId,
  onClickTab,
  onChangeTabsHook,
  panesClassName,
  tabLayout,
  tabs,
  tabStyle,
  tabsClassName,
  useSeparator,
  ...rest
}) => {
  const [activeId, setActiveId] = useState(initialActiveId);
  const tabsClassNames = classnames(
    'sage-tabs',
    tabsClassName,
    {
      'sage-tabs--progressbar': tabStyle === TAB_STYLES.PROGRESSBAR,
      'sage-tabs--align-items-center': tabStyle === TAB_STYLES.CHOICE && alignItemsCenter,
      'sage-tabs--choice': tabStyle === TAB_STYLES.CHOICE,
      [`sage-tabs--layout-${tabLayout}`]: tabLayout,
    },
  );

  useEffect(() => setActiveId(initialActiveId), [initialActiveId, setActiveId]);

  const handleClickTab = (id) => {
    if (onClickTab) {
      onClickTab(id);
    } else {
      setActiveId(id);
    }

    if (onChangeTabsHook) {
      onChangeTabsHook(id);
    }
  };

  return (
    <div className={`sage-tabs-container ${className || ''}`}>
      <div className={tabsClassNames} {...rest}>
        {tabs.map(({ disabled, id, label, tabDetails, tabChoiceIcon, tabChoiceType, subtext }) => (
          <TabsItem
            disabled={disabled}
            icon={tabChoiceIcon}
            isActive={id === activeId}
            itemStyle={tabStyle === 'progressbar' ? 'tab' : tabStyle}
            key={id.toString()}
            onClick={handleClickTab}
            panelId={id}
            label={label}
            subtext={subtext}
            type={tabChoiceType}
          >
            {tabDetails}
          </TabsItem>
        ))}
      </div>
      {useSeparator && (
        <hr className="sage-tabs-divider" />
      )}
      {tabs.map(({ id, content, card, cardSpacing, panelSpacing }) => (
        <TabsPane
          card={card}
          cardSpacing={cardSpacing}
          className={panesClassName}
          id={id}
          isActive={id === activeId}
          key={id.toString()}
          panelSpacing={panelSpacing}
        >
          {content}
        </TabsPane>
      ))}
    </div>
  );
};

Tabs.Item = TabsItem;
Tabs.Pane = TabsPane;
Tabs.itemsPropTypes = tabsItemsPropTypes;
Tabs.LAYOUTS = TAB_LAYOUTS;
Tabs.STYLES = TAB_STYLES;

Tabs.defaultProps = {
  alignItemsCenter: false,
  className: '',
  initialActiveId: null,
  onChangeTabsHook: null,
  onClickTab: null,
  panesClassName: null,
  tabLayout: TAB_LAYOUTS.DEFAULT,
  tabStyle: TAB_STYLES.TAB,
  tabsClassName: null,
  useSeparator: false,
};

Tabs.propTypes = {
  alignItemsCenter: PropTypes.bool,
  className: PropTypes.string,
  initialActiveId: PropTypes.string,
  onChangeTabsHook: PropTypes.func,
  onClickTab: PropTypes.func,
  panesClassName: PropTypes.string,
  tabLayout: PropTypes.oneOf(Object.values(TAB_LAYOUTS)),
  tabs: PropTypes.arrayOf(tabsItemsPropTypes).isRequired,
  tabStyle: PropTypes.oneOf(Object.values(TAB_STYLES)),
  tabsClassName: PropTypes.string,
  useSeparator: PropTypes.bool,
};
