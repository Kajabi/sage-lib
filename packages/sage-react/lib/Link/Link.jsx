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
  ...rest
}) => {
  const SelfTag = tag || 'a';

  return (
    <>
      {tooltip ? (
        <Tooltip {...tooltip}>
          <SelfTag className="sage-link" {...rest}>
            <span className="t-sage--truncate">
              {children}
            </span>
          </SelfTag>
        </Tooltip>
      ) : (
        <SelfTag className="sage-link" {...rest}>
          <span className="t-sage--truncate">
            {children}
          </span>
        </SelfTag>
      )}
    </>
  );
};

Link.defaultProps = {
  children: null,
  tag: null,
  tooltip: null,
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
};
