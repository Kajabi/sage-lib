import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SageTokens } from '../configs';
import { TabsItem } from './TabsItem';
import { TabsPane } from './TabsPane';
import {
  TAB_STYLES,
  TAB_LAYOUTS,
  TAB_JUSTIFY_OPTIONS,
  tabsItemsPropTypes,
} from './configs';

export const Tabs = ({
  alignItemsCenter,
  className,
  gap,
  initialActiveId,
  justify,
  onClickTab,
  onChangeTabsHook,
  panesClassName,
  tabLayout,
  tabs,
  tabStyle,
  tabsClassName,
  useSeparator,
  withBackground,
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
      [`sage-tabs--justify-${justify}`]: justify,
      'sage-tabs--with-background': withBackground,
      [`sage-grid-gap-${gap}`]: gap,
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
      <div className={tabsClassNames} role="tablist" {...rest}>
        {tabs.map(({
          disabled,
          id,
          label,
          tabDetails,
          tabChoiceCustomClass,
          tabChoiceIcon,
          tabChoiceIconAlignment,
          tabChoiceType,
          subtext,
          panelSpacing,
          cardSpacing,
          ...rest
        }) => (
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
            customContentClassName={tabChoiceCustomClass}
            type={tabChoiceType}
            verticalAlignIcon={tabChoiceIconAlignment}
            {...rest}
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
Tabs.JUSTIFY_OPTIONS = TAB_JUSTIFY_OPTIONS;
Tabs.LAYOUTS = TAB_LAYOUTS;
Tabs.STYLES = TAB_STYLES;

Tabs.defaultProps = {
  alignItemsCenter: false,
  className: '',
  gap: SageTokens.GRID_GAP_OPTIONS.SM,
  initialActiveId: null,
  justify: Tabs.JUSTIFY_OPTIONS.DEFAULT,
  onChangeTabsHook: null,
  onClickTab: null,
  panesClassName: null,
  tabLayout: TAB_LAYOUTS.DEFAULT,
  tabStyle: TAB_STYLES.TAB,
  tabsClassName: null,
  useSeparator: false,
  withBackground: false,
};

Tabs.propTypes = {
  alignItemsCenter: PropTypes.bool,
  className: PropTypes.string,
  gap: PropTypes.oneOf(Object.values(SageTokens.GRID_GAP_OPTIONS.SM)),
  initialActiveId: PropTypes.string,
  justify: PropTypes.oneOf(Object.values(Tabs.JUSTIFY_OPTIONS)),
  onChangeTabsHook: PropTypes.func,
  onClickTab: PropTypes.func,
  panesClassName: PropTypes.string,
  tabLayout: PropTypes.oneOf(Object.values(TAB_LAYOUTS)),
  tabs: PropTypes.arrayOf(tabsItemsPropTypes).isRequired,
  tabStyle: PropTypes.oneOf(Object.values(TAB_STYLES)),
  tabsClassName: PropTypes.string,
  useSeparator: PropTypes.bool,
  withBackground: PropTypes.bool,
};
