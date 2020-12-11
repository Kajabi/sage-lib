import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import parse from 'html-react-parser';

import Link from '../Link';
import { SageTokens } from '../configs';

const subStringHighlight = (targetString, searchString) => {
  return parse(
    targetString.replace(
      new RegExp(searchString, 'gi'), (match) =>
        `<mark>${match}</mark>`
      )
  );
};

const TypeaheadItem = ({
  icon,
  title,
  subTitle,
  actions,
  searchValue,
  ...rest
}) => (
  <li className="sage-typeahead__item">
    <Link
      className="sage-typeahead__item-trigger"
      {...rest}
    >
      <i
        className={`sage-icon-${icon}`}
        style={{gridArea: 'icon'}}
      />
      <span
        className="t-sage-heading-6"
        style={{gridArea: 'title'}}
      >
        {subStringHighlight(title, searchValue)}
      </span>
      <span
        className="t-sage-body-small"
        style={{gridArea: 'subTitle'}}
      >
        {subTitle}
      </span>
    </Link>
    <div className="sage-typeahead__item-actions">
      {actions && actions.map(action => (
        React.cloneElement(action, {key: uuid()})
      ))}
    </div>
  </li>
)

TypeaheadItem.defaultProps = {
  actions: null,
  searchValue: '',
};

TypeaheadItem.propTypes = {
  icon: PropTypes.oneOf(Object.values(SageTokens.ICONS)).isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  actions: PropTypes.arrayOf(PropTypes.node),
};

export default TypeaheadItem;
