/* eslint-disable valid-typeof */
import { SAGE_DATA_TYPES } from './dataTypes';
import {
  renderBooleanAsYesOrNo,
  renderObjectAsAvatar,
  renderStringAsIs,
  renderObjectAsLabel,
  renderObjectAsHTML
} from './dataRenderers';

// Sage Data Type Renderers map
const typeRenderers = {
  avatar: {
    customType: SAGE_DATA_TYPES.AVATAR,
    render: renderObjectAsAvatar,
  },
  label: {
    customType: SAGE_DATA_TYPES.LABEL,
    render: renderObjectAsLabel,
  },
  html: {
    customType: SAGE_DATA_TYPES.HTML,
    render: renderObjectAsHTML,
  },
  boolean: {
    rawType: 'boolean',
    customType: SAGE_DATA_TYPES.BOOL,
    render: renderBooleanAsYesOrNo,
  },
  default: {
    render: renderStringAsIs,
  }
};

// Renders based on provided data types (custom) or actual type (raw)
const renderDataTypes = (data, dataType, renderers) => {
  const selfRenderers = renderers || typeRenderers;
  const keys = Object.keys(selfRenderers);

  // First search for a matching renderer from the provided renderers
  let renderedValue;
  for (let i = 0; i < keys.length; i += 1) {
    const { customType, rawType, render } = renderers[keys[i]];

    if (customType && customType === dataType) {
      renderedValue = render(data);
      break;
    } else if (rawType && typeof data === rawType) {
      renderedValue = render(data);
      break;
    }
  }

  // If no match is found, use Sage default renderer
  if (renderedValue === undefined) {
    renderedValue = selfRenderers.default.render(data);
  }

  return renderedValue;
};

export const TableHelpers = {
  DATA_TYPES: SAGE_DATA_TYPES,
  renderDataTypes,
  typeRenderers,
};
