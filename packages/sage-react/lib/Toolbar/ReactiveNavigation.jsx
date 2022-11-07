import React, { useEffect, useRef, useState } from 'react';
import { PropTypes } from 'prop-types';
import debounce from 'lodash/debounce';

import { RichTextEditorDropdown } from '../Dropdown/RichEditorDropdown';

export const ReactiveNavigation = ({
  children,
  name,
}) => {
  const MORE_DROPDOWN_WIDTH = 60;

  const navigationRef = useRef(null);
  const moreMenuRef = useRef(null);
  const navigationOuterRef = useRef(null);

  const [priorityItems, setPriorityItems] = useState(children);
  const [moreItems, setMoreItems] = useState([]);

  const fullNavArray = children;
  let widthsArray;

  const calculateWidth = () => {
    const availableWidth = navigationOuterRef.current.getBoundingClientRect().width
      - MORE_DROPDOWN_WIDTH;
    let navWidth = 0,
      moreItemCount = 0,
      sliceIdx = 0;

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
    if (moreItemCount > 0) {
      setMoreItems(
        fullNavArray
          .slice(sliceIdx)
          .map((item, idx) => (
            { id: idx, label: item }
          ))
      );
    } else {
      setMoreItems([]);
    }

    /* Used for debugging purposes */
    // const info = {
    //   'Avail Width': availableWidth,
    //   'Nav Width': navWidth,
    //   'More Item Count': moreItemCount,
    // };
    // console.table(info);
    // console.log('More Items: ', fullNavArray.slice(sliceIdx));
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

  // console.log('Name: ', name, 'Priority Items: ', priorityItems, ' More Items: ', moreItems);
  return (
    <div ref={navigationOuterRef} className="editor-toolbar-section">
      <ul ref={navigationRef} key={`editor-toolbar-${name}`} className="editor-toolbar-section__list">
        {
          priorityItems.length > 1
            ? renderToolbarItems(priorityItems)
            : renderToolbarItem(priorityItems)
        }
        {
          moreItems.length > 0 && (
            <li className="editor-toolbar-section__list-item" ref={moreMenuRef}>
              <RichTextEditorDropdown
                triggerClassnames="sage-btn--rich-text"
                triggerButtonSubtle={false}
                options={moreItems}
                isPinned={true}
              />
            </li>
          )
        }
      </ul>
    </div>
  );
};

ReactiveNavigation.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
};
