import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import uuid from 'react-uuid';

import { SageTokens } from '../configs';
import Search from '../Search';

const Typeahead = ({
  items,
  ...rest
}) => {
  const [value, setValue] = useState('');
  const [results, setResults] = useState(null);

  return (
    <div className="sage-typeahead">
      <Search
        contained={true}
        onChange={e => setValue(e.target.value)}
        onClear={() => setValue('')}
        value={value}
      />
      <ul className="sage-typeahead__panel">
        {items.map(item => (
          <li
            className="sage-typeahead__item"
            key={uuid()}
          >
            <button className="sage-typeahead__item-trigger">
              <i
                className={`sage-icon-${item.icon}`}
                style={{'grid-area': 'icon'}}
              />
              <div
                className="t-sage-heading-6"
                style={{'grid-area': 'title'}}
              >
                {item.title}
              </div>
              <div
                className="t-sage-body-small"
                style={{'grid-area': 'subTitle'}}
              >
                {item.subTitle}
              </div>
            </button>
            <div className="sage-typeahead__item-actions">
              {item.actions.map(action => (
                React.cloneElement(action, {key: uuid()})
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

Typeahead.defaultProps = {
};

Typeahead.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.oneOf(Object.values(SageTokens.ICONS)),
      title: PropTypes.string.isRequired,
      subTitle: PropTypes.string,
      actions: PropTypes.arrayOf(PropTypes.node),
    })
  ).isRequired
};

export default Typeahead;
