import React, { useLayoutEffect, useRef, useState } from 'react';
import { PropTypes } from 'prop-types';
import _ from 'lodash';

import { SageTokens } from '../configs';
import { Button } from '../Button';

export const ReactiveNavigation = ({
  children,
  maximumNumberInNav,
  minimumNumberInNav,

}) => {
  const navigationRef = useRef(null);
  const moreMenuRef = useRef(null);
  const moreNavRef = useRef(null);
  const navigationOuterRef = useRef(null);

  const [priorityItems, setPriorityItems] = useState(children);
  const [moreItems, updateMoreItems] = useState([]);

  const fullNavArray = children;
  let widthsArray;

  const howManyItemsInMenuArray = (array, outerWidth, initialWidth) => {
    let total = (initialWidth * 1.75);
    for (let i = 0; i < array.length; i++) {
      if (total + array[i] > outerWidth) {
        // console.log(i);
        if (i < minimumNumberInNav) {
          // console.log('Returning minimum: ', minimumNumberInNav);
          return minimumNumberInNav;
        }

        // console.log('Returnining I: ', i);
        return i;
      }
      total += array[i];
    }
  };

  const updateNavigation = () => {
    let outerWidth,
      moreMenu;
    setTimeout(() => {
      outerWidth = navigationOuterRef.current.getBoundingClientRect().width;
      moreMenu = moreMenuRef.current ? moreMenuRef.current.getBoundingClientRect().width : 0;

      const itemsInMenu = howManyItemsInMenuArray(widthsArray, outerWidth, moreMenu);
      let arrayAmount;
      // console.log('Items in Menu: ', itemsInMenu);

      // Not defined or greater than max allowed
      if (!itemsInMenu || itemsInMenu > maximumNumberInNav) {
        arrayAmount = maximumNumberInNav; // show only max allowed
      } else {
        arrayAmount = itemsInMenu;
      }
      const navItemsCopy = fullNavArray;
      const priorityItems = navItemsCopy.slice(0, arrayAmount);

      setPriorityItems(priorityItems);
      if (priorityItems.length !== navItemsCopy.length) {
        updateMoreItems(navItemsCopy.slice(arrayAmount, navItemsCopy.length));
      } else {
        updateMoreItems([]);
      }
    }, 300);
  };

  useLayoutEffect(() => {
    // Get width of all items in navigation menu
    // eslint-disable-next-line react-hooks/exhaustive-deps
    widthsArray = Array.from(navigationRef.current.children)
      .map((item) => item.getBoundingClientRect().width);

    // Add resize listener but throttle for smoother experience
    window.addEventListener('resize', _.throttle(updateNavigation), 5000);
    updateNavigation();

    return () => {
      window.removeEventListener('resize', updateNavigation);
    };
  }, []);

  return (
    <div>
      <nav ref={navigationOuterRef} className="navigation" role="navigation">
        <ul ref={navigationRef} className="navigation-list">
          {
            priorityItems.map((item, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={`navItem-${i}`} className="navigation-item">
                {item}
              </li>
            ))
          }
        </ul>
        {
          moreItems.length > 0 && (
          <ul ref={moreMenuRef} className="navigation-list-absolute">
            <li className="navigation-item more-item">
              <Button
                className="navigation-link"
                color={Button.COLORS.SECONDARY}
                disclosure={true}
                icon={SageTokens.ICONS.ADD}
                iconOnly={true}
                value="More"
              />
              <ul ref={moreNavRef} className="more-navigation">
                {
                moreItems.map((item, i) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <li key={`moreNavItem-${i}`} className="navigation-item">
                    {item}
                  </li>
                ))
              }
              </ul>
            </li>
          </ul>
          )
        }
      </nav>
    </div>
  );
};

ReactiveNavigation.defaultProps = {
  maximumNumberInNav: 3,
  minimumNumberInNav: 1,
};

ReactiveNavigation.propTypes = {
  children: PropTypes.node.isRequired,
  maximumNumberInNav: PropTypes.number,
  minimumNumberInNav: PropTypes.number,
};
