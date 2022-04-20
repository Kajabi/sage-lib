module.exports = {
  'stories': [
    '../lib/themes/next/**/*.story.mdx',
    '../lib/themes/next/**/*.story.@(js|jsx|ts|tsx)'
  ],
  'addons': [
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-controls',
    '@storybook/addon-storysource',
  ]
};
