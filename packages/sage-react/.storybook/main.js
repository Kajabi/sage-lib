module.exports = {
  'stories': [
    '../lib/**/*.story.mdx',
    '../lib/**/*.story.@(js|jsx|ts|tsx)'
  ],
  'addons': [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-notes',
    '@storybook/addon-knobs',
    '@storybook/addon-storysource',
  ]
}
