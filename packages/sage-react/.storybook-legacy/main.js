module.exports = {
  'stories': [
    '../lib/themes/legacy/**/*.story.mdx',
    '../lib/themes/legacy/**/*.story.@(js|jsx|ts|tsx)'
  ],
  'addons': [
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-controls',
    '@storybook/addon-storysource',
  ]
}
