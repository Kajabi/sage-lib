import React, { useEffect, useRef, useState } from 'react';
import { PropTypes } from 'prop-types';
import classnames from 'classnames';
import debounce from 'lodash/debounce';

import { ToolbarEditorDropdown } from '../Dropdown/ToolbarEditorDropdown';

export const ToolbarEditor = ({
  name,
  isFixed,
  ...rest
}) => {
  const { children } = rest;

  const MORE_DROPDOWN_WIDTH = 60;

  const navigationRef = useRef(null);
  const moreMenuRef = useRef(null);
  const navigationOuterRef = useRef(null);

  const [priorityItems, setPriorityItems] = useState(children);
  const [moreItems, setMoreItems] = useState([]);

  const fullNavArray = [children].flat(Infinity);
  let widthsArray;

  const sectionClassNames = classnames(
    'toolbar-editor__section',
    {
      'toolbar-editor__section--is-fixed': isFixed
    }
  );

  const calculateWidth = () => {
    if (isFixed) { return; } // Do not collapse or expand if expected to be fixed

    const availableWidth = navigationOuterRef.current.getBoundingClientRect().width
      - MORE_DROPDOWN_WIDTH;
    let navWidth = 0,
      moreItemCount = 0,
      sliceIdx = 0;

    if (fullNavArray.length > 1) {
      widthsArray.every((width, idx) => {
        navWidth += width;
        if (navWidth > availableWidth) {
          moreItemCount = widthsArray.length - idx;
          sliceIdx = idx;
          return false;
        }
        sliceIdx = widthsArray.length;
        return true;
      });
      setPriorityItems(fullNavArray.slice(0, sliceIdx));
    } else {
      setPriorityItems(fullNavArray);
    }

    if (moreItemCount > 0) {
      setMoreItems(
        fullNavArray
          .slice(sliceIdx)
          .map((item, idx) => ({ id: idx, label: item }))
      );
    } else {
      setMoreItems([]);
    }
  };

  useEffect(() => {
    // Get width of all items in navigation menu
    // eslint-disable-next-line react-hooks/exhaustive-deps
    widthsArray = Array.from(navigationRef.current.children)
      .map((item) => item.getBoundingClientRect().width);

    // Add resize listener but throttle for smoother experience
    window.addEventListener('resize', debounce(() => { calculateWidth(); }, 500));
    calculateWidth();

    return () => {
      window.removeEventListener('resize', calculateWidth);
    };
  }, []);

  const renderToolbarItem = (item, idx) => (
    <span key={`${name}-${idx}`}>
      { item }
    </span>
  );

  const renderToolbarItems = (items) => (
    items.map((item, idx) => (
      renderToolbarItem(item, idx)
    ))
  );
  const getIcon = () => {
    if (priorityItems.length === 0) {
      return moreItems[0].label.props.icon;
    }

    return 'add';
  };

  return (
    <div ref={navigationOuterRef} className={sectionClassNames} aria-label={name}>
      <span ref={navigationRef} key={`toolbar-editor-${name}`} className="toolbar-editor__section-list">
        {
          priorityItems.length > 1
            ? renderToolbarItems(priorityItems)
            : renderToolbarItem(priorityItems)
        }
        {
          moreItems.length > 0 && (
            <span className="toolbar-editor__section-list-item" ref={moreMenuRef}>
              <ToolbarEditorDropdown
                align="right"
                icon={getIcon()}
                triggerClassnames="sage-btn--rich-text"
                triggerButtonSubtle={false}
                options={moreItems}
                isPinned={true}
              />
            </span>
          )
        }
      </span>
    </div>
  );
};

ToolbarEditor.defaultProps = {
  isFixed: false
};

ToolbarEditor.propTypes = {
  /**
   * Determines whether the toolbar section is flexible or fixed
  */
  isFixed: PropTypes.bool,
  /**
   * Name of the toolbar
  */
  name: PropTypes.string.isRequired,
};
