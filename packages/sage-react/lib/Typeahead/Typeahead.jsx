import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { createFocusTrap } from 'focus-trap';
import uuid from 'react-uuid';

import { SageTokens } from '../configs';
import Search from '../Search';

const Typeahead = ({
  items,
  ...rest
}) => {
  const [value, setValue] = useState('');
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    const focusTrap = createFocusTrap(containerRef.current, {escapeDeactivates: false});
    const handleEscape = (evt) => {
      if (evt.keyCode === 27) setOpen(false);
    };

    focusTrap.activate();
    document.addEventListener("keydown", handleEscape, false);
    return () => {
      focusTrap.deactivate();
      document.addEventListener("keydown", handleEscape, false);
    };
  }, [open, containerRef.current]);

  return (
    <div
      className="sage-typeahead"
      ref={containerRef}
    >
      <Search
        contained={true}
        onChange={e => {
          setValue(e.target.value);
          e.target.value.length ? setOpen(true) : setOpen(false);
        }}
        onClear={() => {
          setValue('');
          setOpen(false);
        }}
        value={value}
      />
      {open &&
        <ul className="sage-typeahead__panel">
          {items.map(item => (
            <li
              className="sage-typeahead__item"
              key={uuid()}
            >
              <button className="sage-typeahead__item-trigger">
                <i
                  className={`sage-icon-${item.icon}`}
                  style={{gridArea: 'icon'}}
                />
                <div
                  className="t-sage-heading-6"
                  style={{gridArea: 'title'}}
                >
                  {item.title}
                </div>
                <div
                  className="t-sage-body-small"
                  style={{gridArea: 'subTitle'}}
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
      }
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
