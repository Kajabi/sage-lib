import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';

import { SageTokens } from '../configs';

const TypeaheadItem = ({
  icon,
  title,
  subTitle,
  actions,
  ...rest
}) => (
  <li
    className="sage-typeahead__item"
    {...rest}
  >
    <button className="sage-typeahead__item-trigger">
      <i
        className={`sage-icon-${icon}`}
        style={{gridArea: 'icon'}}
      />
      <div
        className="t-sage-heading-6"
        style={{gridArea: 'title'}}
      >
        {title}
      </div>
      <div
        className="t-sage-body-small"
        style={{gridArea: 'subTitle'}}
      >
        {subTitle}
      </div>
    </button>
    <div className="sage-typeahead__item-actions">
      {actions && actions.map(action => (
        React.cloneElement(action, {key: uuid()})
      ))}
    </div>
  </li>
)

TypeaheadItem.defaultProps = {
  actions: null
};

TypeaheadItem.propTypes = {
  icon: PropTypes.oneOf(Object.values(SageTokens.ICONS)).isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  actions: PropTypes.arrayOf(PropTypes.node),
};

export default TypeaheadItem;
