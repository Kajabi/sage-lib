import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import { Link } from '../Link';
import { SageTokens } from '../configs';
import { renderSubstringHighlight } from '../common/renderers';

export const TypeaheadItem = ({
  actions,
  icon,
  subTitle,
  searchValue,
  title,
  ...rest
}) => (
  <li className="sage-typeahead__item">
    <Link
      className="sage-typeahead__item-trigger"
      {...rest}
    >
      <i
        className={`sage-icon-${icon}`}
        style={{ gridArea: 'icon' }}
      />
      <span
        className="t-sage-heading-6"
        style={{ gridArea: 'title' }}
      >
        {renderSubstringHighlight(title, searchValue)}
      </span>
      <span
        className="t-sage-body-small"
        style={{ gridArea: 'subTitle' }}
      >
        {subTitle}
      </span>
    </Link>
    <div className="sage-typeahead__item-actions">
      {actions && actions.map((action) => (
        React.cloneElement(action, { key: uuid() })
      ))}
    </div>
  </li>
);

TypeaheadItem.defaultProps = {
  actions: null,
  searchValue: '',
  subTitle: '',
};

TypeaheadItem.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.node),
  icon: PropTypes.oneOf(Object.values(SageTokens.ICONS)).isRequired,
  searchValue: PropTypes.string,
  subTitle: PropTypes.string,
  title: PropTypes.string.isRequired,
};
