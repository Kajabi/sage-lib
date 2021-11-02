import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const Indicator = ({
  currentItem,
  numItems,
}) => {
  let classNames;
  const baseClass = 'sage-indicator';
  const items = [];
  for (let i = 0; i <= numItems; i += 1) {
    if (i === currentItem) {
      classNames = classnames(
        baseClass,
        `${baseClass}--current`,
      );
    } else {
      classNames = classnames(baseClass);
    }
    items.push(
      <li
        className={classNames}
        key={i}
      >
        <span className="visually-hidden">
          <h1>Item</h1>
        </span>
      </li>
    );
  }

  return (
    <>
      <ul
        className="sage-indicator-list"
        aria-label={`Showing ${currentItem} of ${numItems}`}
      >
        {items}
      </ul>
    </>
  );
};

Indicator.defaultProps = {
  currentItem: null,
  numItems: null,
};

Indicator.propTypes = {
  currentItem: PropTypes.number,
  numItems: PropTypes.number,
};
