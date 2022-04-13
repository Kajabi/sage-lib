import React from 'react';
import PropTypes from 'prop-types';
import { SageClassnames } from '../configs';
import { Tooltip } from '../Tooltip';

const tagPropTypes = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.elementType,
]);

export const Link = ({
  children,
  tag,
  tooltip,
  truncate,
  ...rest
}) => {
  const SelfTag = tag || 'a';

  return (
    <>
      {tooltip ? (
        <Tooltip {...tooltip}>
          <SelfTag {...rest}>
            {truncate ? (
              <span className="t-sage--truncate">
                {children}
              </span>
            ) : children}
          </SelfTag>
        </Tooltip>
      ) : (
        <SelfTag {...rest}>
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
  children: null,
  tag: null,
  tooltip: null,
  truncate: false,
};

Link.CLASSNAMES = { ...SageClassnames.LINK };

Link.tagPropTypes = tagPropTypes;

Link.propTypes = {
  children: PropTypes.node,
  tag: tagPropTypes,
  tooltip: PropTypes.shape({
    position: PropTypes.oneOf(Object.values(Tooltip.POSITIONS)),
    size: PropTypes.oneOf(Object.values(Tooltip.SIZES)),
    theme: PropTypes.oneOf(Object.values(Tooltip.THEMES)),
  }),
  truncate: PropTypes.bool,
};
