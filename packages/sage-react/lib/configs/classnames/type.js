import { SageDictionary } from '../dictionary';

const typeClassPrefix = 't-sage';

export const CLASSNAMES_TYPE = {
  HEADING_1: `${typeClassPrefix}-heading-1`,
  HEADING_2: `${typeClassPrefix}-heading-2`,
  HEADING_3: `${typeClassPrefix}-heading-3`,
  HEADING_4: `${typeClassPrefix}-heading-4`,
  HEADING_5: `${typeClassPrefix}-heading-5`,
  HEADING_6: `${typeClassPrefix}-heading-6`,
  BODY: `${typeClassPrefix}-body`,
  BODY_BOLD: `${typeClassPrefix}-body-bold`,
  BODY_MED: `${typeClassPrefix}-body-med`,
  BODY_SEMI: `${typeClassPrefix}-body-semi`,
  BODY_SMALL: `${typeClassPrefix}-body-small`,
  BODY_SMALL_BOLD: `${typeClassPrefix}-body-small-bold`,
  BODY_SMALL_MED: `${typeClassPrefix}-body-small-med`,
  BODY_SMALL_SEMI: `${typeClassPrefix}-body-small-semi`,
  BODY_XSMALL: `${typeClassPrefix}-body-xsmall`,
  BODY_XSMALL_BOLD: `${typeClassPrefix}-body-xsmall-bold`,
  BODY_XSMALL_MED: `${typeClassPrefix}-body-xsmall-med`,
  BODY_XSMALL_SEMI: `${typeClassPrefix}-body-xsmall-semi`,
};

// Generates Sage Color classes from the color sliders token set such as
// CLASSNAMES_TYPE_COLORS.RED_200 ---> `t-sage--color-red-200`
export const CLASSNAMES_TYPE_COLORS = {};
Object.keys(SageDictionary.COLOR).forEach((colorName) => {
  const defaultIndex = {
    black: 500,
    blue: 600,
    charcoal: 300,
    grey: 300,
    green: 600,
    mercury: 500,
    orange: 300,
    primary: 300,
    purple: 600,
    red: 500,
    sage: 300,
    white: 500,
    yellow: 400
  }[colorName];

  Object.keys(SageDictionary.COLOR[colorName]).forEach((index) => {
    if (index === defaultIndex) {
      CLASSNAMES_TYPE_COLORS[`${colorName}`] = SageDictionary.COLOR[colorName][index].CLASSNAME;
    }
    CLASSNAMES_TYPE_COLORS[`${colorName}_${index}`] = SageDictionary.COLOR[colorName][index].CLASSNAME;
  });
});

export const CLASSNAME_TRUNCATE_TEXT = `${typeClassPrefix}--truncate`;
export const CLASSNAME_STRIKETHROUGH = `${typeClassPrefix}--strikethrough`;
export const CLASSNAME_TYPE_ALIGN_CENTER = 't-sage--align-center';
export const CLASSNAME_TYPE_ALIGN_RIGHT = 't-sage--align-right';
export const CLASSNAME_TYPE_BLOCK = 'sage-type';
