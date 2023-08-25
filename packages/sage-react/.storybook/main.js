module.exports = {
  'stories': [
    '../lib/**/*.story.mdx',
    '../lib/**/*.story.@(js|jsx|ts|tsx)'
  ],
  'addons': [
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-controls',
    '@storybook/addon-storysource',
    '@storybook/addon-google-analytics',
    '@storybook/addon-docs'
  ],
  'staticDirs': ['../public'],
}
