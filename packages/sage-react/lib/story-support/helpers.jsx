import React from 'react';
import PropTypes from 'prop-types';

export const disableArgs = (keys) => {
  const argTypes = {};

  Object.values(keys).forEach((key) => {
    argTypes[key] = {
      control: {
        disable: true,
      },
    };
  });

  return argTypes;
};

export const selectArgs = (keys) => {
  const argTypes = {};

  Object.keys(keys).forEach((key) => {
    argTypes[key] = {
      control: {
        options: keys[key],
      },
    };
  });

  return argTypes;
};

export function ComponentBody(props) {
  const style = {
    height: props.height,
    minHeight: props.minHeight,
    maxHeight: props.maxHeight,
    width: props.width,
    minWidth: props.minWidth,
    maxWidth: props.maxWidth,
    ...props.css
  };

  return (
    <div style={style}>
      {props.children}
    </div>
  );
}

ComponentBody.defaultProps = {
  height: undefined,
  minHeight: undefined,
  maxHeight: undefined,
  width: undefined,
  minWidth: undefined,
  maxWidth: undefined,
  css: undefined,
};

ComponentBody.propTypes = {
  height: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  minHeight: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  maxHeight: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  minWidth: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  maxWidth: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  children: PropTypes.node.isRequired,
  css: PropTypes.node
};
