import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SageClassnames } from '../configs';
import { Tooltip } from '../Tooltip';

const tagPropTypes = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.elementType,
]);

export const Link = ({
  className,
  children,
  tag,
  tooltip,
  truncate,
  ...rest
}) => {
  const classNames = classnames(
    'sage-link',
    className,
  );

  const SelfTag = tag || 'a';

  return (
    <>
      {tooltip ? (
        <Tooltip {...tooltip}>
          <SelfTag
            className={classNames}
            {...rest}
          >
            {truncate ? (
              <span className="t-sage--truncate">
                {children}
              </span>
            ) : children}
          </SelfTag>
        </Tooltip>
      ) : (
        <SelfTag
          className={classNames}
          {...rest}
        >
          {truncate ? (
            <span className="t-sage--truncate">
              {children}
            </span>
          ) : children}
        </SelfTag>
      )}
    </>
  );
};

Link.defaultProps = {
  className: null,
  children: null,
  tag: null,
  tooltip: null,
  truncate: false,
};

Link.CLASSNAMES = { ...SageClassnames.LINK };

Link.tagPropTypes = tagPropTypes;

Link.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  tag: tagPropTypes,
  tooltip: PropTypes.shape({
    position: PropTypes.oneOf(Object.values(Tooltip.POSITIONS)),
    size: PropTypes.oneOf(Object.values(Tooltip.SIZES)),
    theme: PropTypes.oneOf(Object.values(Tooltip.THEMES)),
  }),
  truncate: PropTypes.bool,
};
