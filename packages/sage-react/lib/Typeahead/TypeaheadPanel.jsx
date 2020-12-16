import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';

import TypeaheadItem from './TypeaheadItem';

const TypeaheadPanel = ({
  items,
  searchValue,
  ...rest
}) => {
  const NullState = <p className="sage-typeahead__null-state">
                      No Results Available For:<br/>
                      "{searchValue}"
                    </p>;
  return (
    <ul
      className="sage-typeahead__panel"
      {...rest}
    >
      {(items.length > 0)
        ? items.map(item => <TypeaheadItem {...item} key={uuid()} searchValue={searchValue} />)
        : NullState
      }
    </ul>
  );
};

TypeaheadPanel.defaultProps = {
  searchValue: ''
};

TypeaheadPanel.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape(TypeaheadItem.propTypes)
  ).isRequired,
  searchValue: PropTypes.string,
};

export default TypeaheadPanel;
