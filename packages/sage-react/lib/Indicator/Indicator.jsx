import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const Indicator = ({
  currentItem,
  label,
  numItems,
}) => {
  let classNames;
  const baseClass = 'sage-indicator';
  const items = [];
  currentItem -= 1;
  for (let i = 0; i <= numItems - 1; i += 1) {
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
        aria-label={`Showing ${label} ${currentItem} of ${numItems}`}
      >
        {items}
      </ul>
    </>
  );
};

Indicator.defaultProps = {
  currentItem: null,
  label: null,
  numItems: 0,
};

Indicator.propTypes = {
  currentItem: PropTypes.number,
  label: PropTypes.string,
  numItems: PropTypes.number,
};
