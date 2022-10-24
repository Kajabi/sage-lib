import React, { useLayoutEffect, useRef, useState } from 'react';
import { PropTypes } from 'prop-types';
import _ from 'lodash';

export const ReactiveNavigation = ({ name, navigationItems }) => {
  const navigationRef = useRef(null);
  const moreMenuRef = useRef(null);
  const moreNavRef = useRef(null);
  const navigationOuterRef = useRef(null);

  const [priorityItems, setPriorityItems] = useState(navigationItems);
  const [moreItems, updateMoreItems] = useState([]);

  const fullNavArray = navigationItems;
  let widthsArray;

  const howManyItemsInMenuArray = (array, outerWidth, initialWidth, minimumNumberInNav) => {
    let total = (initialWidth * 1.75);
    for (let i = 0; i < array.length; i++) {
      if (total + array[i] > outerWidth) {
        console.log(i);
        return i < minimumNumberInNav ? minimumNumberInNav : i;
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

      const arrayAmount = howManyItemsInMenuArray(widthsArray, outerWidth, moreMenu, 1);
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
    widthsArray = Array.from(navigationRef.current.children).map((item) => item.getBoundingClientRect().width);

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
              <li key={`navItem-${i}`} className="navigation-item">
                <a className="navigation-link" href={item.link}>{item.title}</a>
              </li>
            ))
          }
        </ul>
        {
          moreItems.length > 0 && (
          <ul ref={moreMenuRef} className="navigation-list-absolute">
            <li className="navigation-item more-item">
              <button className="navigation-link" href="#">More {'>'}</button>
              <ul ref={moreNavRef} className="more-navigation">
                {
                moreItems.map((item, i) => (
                  <li key={`moreNavItem-${i}`} className="navigation-item">
                    <a className="navigation-link" href={item.link}>{item.title}</a>
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
  navigationItems: [
    {
      title: 'News',
      link: '/news'
    },
    {
      title: 'Gigs',
      link: '/gigs'
    },
    {
      title: 'Festivals',
      link: '/festivals'
    },
    {
      title: 'Club Nights',
      link: '/club-nights'
    },
    {
      title: 'Brands',
      link: '/brands'
    },
    {
      title: 'Genres',
      link: '/genres'
    },
    {
      title: 'Venues',
      link: '/venues'
    },
    {
      title: 'Artists',
      link: '/artists'
    },
    {
      title: 'News',
      link: '/news'
    },
    {
      title: 'Gigs',
      link: '/gigs'
    },
    {
      title: 'Festivals',
      link: '/festivals'
    },
    {
      title: 'Club Nights',
      link: '/club-nights'
    },
    {
      title: 'Brands',
      link: '/brands'
    },
    {
      title: 'Genres',
      link: '/genres'
    },
    {
      title: 'Venues',
      link: '/venues'
    },
    {
      title: 'Artists',
      link: '/artists'
    }
  ]
};
ReactiveNavigation.propTypes = {
  name: PropTypes.string,
  navigationItems: PropTypes.array
};
