import { SageTokens } from '../../configs';

export const defaultOptionsItems = [
  {
    id: 1,
    label: 'Option 1',
  },
  {
    id: 2,
    label: 'Option 2',
  },
  {
    id: 3,
    label: 'Option 3',
  },
  {
    id: 4,
    label: 'Option 4',
  },
  {
    id: 5,
    label: 'Option 5',
  },
];

export const sampleOptions = [
  {
    id: 1,
    label: 'Save',
    payload: {
      handler: () => {
        window.alert('Saved!'); /* eslint-disable-line no-alert */
      }
    }
  },
  {
    id: 2,
    label: 'Delete',
    color: 'danger',
    payload: {
      handler: () => {
        window.confirm('Are you sure?'); /* eslint-disable-line no-alert */
      }
    }
  },
];

export const sampleMenuItems = [
  {
    id: 1,
    isActive: true,
    color: 'muted',
    label: 'View all',
  },
  {
    id: 2,
    color: 'muted',
    label: 'View some',
  },
  {
    id: 3,
    color: 'danger',
    label: 'View none',
  },
  {
    id: 4,
    label: 'Option 1',
    icon: SageTokens.ICONS.USERS,
    payload: {
      user: 1,
      name: 'Phil Schanely'
    },
    borderBefore: true,
    options: sampleOptions,
  },
  {
    id: 5,
    label: 'Option 2',
    icon: SageTokens.ICONS.MEGAPHONE,
    payload: {
      product: 2,
      name: 'Awesome product'
    },
    options: sampleOptions,
  },
  {
    id: 6,
    label: 'Option 3',
    icon: SageTokens.ICONS.CUSTOMIZE,
    payload: {
      status: 'In progress',
      tools: [
        'hammer',
        'wrench',
        'screwdriver'
      ]
    },
    options: sampleOptions,
  },
  {
    id: 7,
    color: 'primary',
    label: 'Add something',
    icon: SageTokens.ICONS.ADD,
  },
];

export const sampleSelectItems = [
  {
    id: 1,
    label: 'Option 1 asdf',
    isLabelVisible: true,
    icon: SageTokens.ICONS.STACK_ICON,
    payload: {
      label: 'Option 1 asdf',
      isLabelVisible: true,
      icon: SageTokens.ICONS.STACK_ICON,
    }
  },
  {
    id: 2,
    label: 'Option 2 as',
    isLabelVisible: true,
    icon: SageTokens.ICONS.TOOLS_ICON,
    payload: {
      label: 'Option 2 as',
      isLabelVisible: true,
      icon: SageTokens.ICONS.TOOLS_ICON,
    }
  },
  {
    id: 3,
    label: 'Option 3 asd',
    isLabelVisible: true,
    icon: SageTokens.ICONS.SELL_ICON,
    payload: {
      label: 'Option 3 asd',
      isLabelVisible: true,
      icon: SageTokens.ICONS.SELL_ICON,
    }
  },
  {
    id: 4,
    label: 'Option 4 asdfe (I suppress exit)',
    isLabelVisible: true,
    icon: SageTokens.ICONS.SELL_ICON,
    color: 'danger',
    payload: {
      label: 'Option 4 asdfe (I suppress exit)',
      isLabelVisible: true,
      icon: SageTokens.ICONS.SELL_ICON,
      suppressExit: true,
    }
  },
];
