import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const Indicator = ({
  className,
  numItems,
}) => {
  const classNames = classnames(
    'sage-indicator',
    className,
    {}
  );

  const items = [];
  for (let i = 0; i <= numItems; i += 1) {
    items.push(
      <li className="sage-indicator" key={i}>
        <span className="visually-hidden">
          <h1>Item</h1>
        </span>
      </li>
    );
  }

  return (
    <div className={classNames}>
      <ul
        className="sage-indicator-list"
        ariaLabel={`Showing x of ${numItems}`}
      >
        {items}
      </ul>
    </div>
  );
};

Indicator.defaultProps = {
  className: null,
  numItems: null,
};

Indicator.propTypes = {
  className: PropTypes.string,
  numItems: PropTypes.number,
};
