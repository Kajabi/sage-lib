import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const baseClassName = 'cdl-ppnav';

const defaultRenderMenuItem = (props) => {
  const { itemDetails, captureRef, clickHandler, activeClass } = props;
  const { uri, label, isActive } = itemDetails;

  return (
    <li className={isActive ? activeClass : ''} key={uri} ref={captureRef} onClick={clickHandler}>
      <a href={uri}>{label}</a>
    </li>
  );
};

defaultRenderMenuItem.propTypes = {
  itemDetails: PropTypes.shape({}),
  captureRef: PropTypes.func,
  clickHandler: PropTypes.func,
  activeClass: PropTypes.string,
};

export const PriorityPlusNav = ({
  className,
  menuText,
  moreText,
  menuItems,
}) => {
  const [items, setItems] = useState([]);
  const [itemRefs, setItemRefs] = useState([]);
  const [activeItems, setActiveItems] = useState([]);
  const [inactiveItems, setInactiveItems] = useState([]);
  const [overflowActive, toggleOverflowActive] = useState(false);

  let parentNode = null;
  let overflowButton = null;
  let hiddenMenu = null;
  let activeMenu = null;
  let itemMargin = 0;

  // // This is where most of the magic happens
  const updateMenuItems = (items) => {
    if (items.length < 1) {
      return;
    }

    let internalItemRefs = [];

    if (activeMenu) {
      // Combine the shown and hidden menu items to get accurate widths
      const activeMenuChildren = [].concat(...activeMenu.children);
      // eslint-disable-next-line max-len
      internalItemRefs = activeMenuChildren.slice(0, activeMenuChildren.length - 1).concat([].concat(...hiddenMenu.children));
    } else {
      // if the active menu hasn't yet rendered, go ahead with the item references
      internalItemRefs = itemRefs;
    }

    if (internalItemRefs.length < 1) {
      setActiveItems(items);
      return;
    }

    let totalWidth = 0;
    const parentStyle = window.getComputedStyle(parentNode);
    // Remove padding from parent width calculation
    // eslint-disable-next-line max-len
    const parentWidth = parentNode.clientWidth - parseInt(parentStyle.paddingLeft, 10) - parseInt(parentStyle.paddingRight, 10);

    const overflowedIndex = items.findIndex((item, index) => {
      totalWidth = totalWidth
      + internalItemRefs[index].offsetWidth
      + itemMargin;

      return totalWidth >= parentWidth;
    });

    const active = items.slice(0, overflowedIndex === -1 ? items.length : overflowedIndex);

    // If some elements are wrapped, make sure there's room for the overflow button
    if (active.length < items.length) {
      // get the active menu item refs
      // eslint-disable-next-line max-len
      const activeRefs = internalItemRefs.slice(0, overflowedIndex === -1 ? items.length : overflowedIndex);

      // calculate the total active width
      totalWidth = activeRefs.reduce((sum, item) => sum + item.offsetWidth + itemMargin, 0);

      // add width of overflow button to total
      totalWidth += overflowButton.offsetWidth;

      // while there isn't enough room…
      while (
        totalWidth >= parentWidth
      ) {
        // …pop the last item
        active.pop();
        // and remove it's width
        totalWidth = totalWidth - internalItemRefs[active.length].offsetWidth - itemMargin;
      }
    }

    // If there's only one overflowed item, pop it's sibling
    // This ensures at least two elements are in the overflow.
    if (items.length - active.length === 1) {
      active.pop();
    }

    // set inactive elements
    const inactive = items.slice(active.length);

    setActiveItems(active);
    setInactiveItems(inactive);
  };

  const handleMenuItemClick = () => {
    if (overflowActive) {
      toggleOverflowActive(false);
    }
  };

  const handleResize = () => {
    updateMenuItems(items);
  };

  const renderMenuItem = defaultRenderMenuItem;

  const mappedMenuItems = menuItems.map((item, index) =>
    renderMenuItem({
      itemDetails: item,
      captureRef: (li) => {
        itemRefs[index] = li;
      },
      clickHandler: handleMenuItemClick,
      activeClass: `${baseClassName}__item--active`,
    })
  );

  useEffect(() => {
    // componentWillMount
    setItems(mappedMenuItems);
    setItemRefs(itemRefs);
    updateMenuItems(mappedMenuItems);

    // componentWillUnmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [itemRefs, mappedMenuItems, menuItems, updateMenuItems]);

  useEffect(() => {
    if (!activeMenu) {
      return;
    }

    const items = activeMenu.children;

    if (items.length > 1) {
      itemMargin = parseInt(window.getComputedStyle(items[1]).marginLeft, 10);
    }

    updateMenuItems(items);

    window.addEventListener('resize', handleResize);
  });

  const toggleExtendedMenu = () => {
    toggleOverflowActive(!overflowActive);
  };

  const handleOverflowMenuClick = (event) => {
    event.preventDefault();
    toggleExtendedMenu();
    return false;
  };

  // Assign item refs
  // Heavy on the refs because we need to interact with
  // DOM elements to get rendered widths etc.
  const assignParentNodeRef = (nav) => {
    parentNode = nav;
  };

  const assignOverflowButtonRef = (li) => {
    overflowButton = li;
  };

  const assignHiddenMenuRef = (ul) => {
    hiddenMenu = ul;
  };

  const assignActiveMenuRef = (ul) => {
    activeMenu = ul;
  };

  return (
    <nav
      className={`${baseClassName} ${className || ''}`}
      ref={assignParentNodeRef}
    >
      {/*
        displayed so we can calculate menu item widths
        as they'd normally be displayed in the top menu
      */}
      <ul className={`${baseClassName}__hiddenNav`} aria-hidden="true" ref={assignHiddenMenuRef}>
        {inactiveItems}
      </ul>
      <ul ref={assignActiveMenuRef}>
        {activeItems}
        <li
          className={`${baseClassName}__indicator`}
          aria-hidden={inactiveItems.length < 1}
          ref={assignOverflowButtonRef}
        >
          <a
            href="#all-nav"
            className={`${baseClassName}__button ${
              activeItems.length > 0 ? '' : `${baseClassName}__button--compact`
            }`}
            onClick={handleOverflowMenuClick}
          >
            {activeItems.length > 0 ? moreText : menuText}
          </a>
          <ul className={`${baseClassName}__list`} aria-hidden={!overflowActive}>
            {inactiveItems}
          </ul>
        </li>
      </ul>
    </nav>
  );
};

PriorityPlusNav.defaultProps = {
  className: '',
  menuText: '',
  moreText: '',
  menuItems: null,
};

PriorityPlusNav.propTypes = {
  className: PropTypes.string,
  menuText: PropTypes.string,
  moreText: PropTypes.string,
  menuItems: PropTypes.arrayOf(PropTypes.shape()),
};
