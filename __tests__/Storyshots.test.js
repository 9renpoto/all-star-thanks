/* @flow */
const initStoryshots = require('@storybook/addon-storyshots').default
initStoryshots({
  storyKindRegex: /^((?!.*?DontTest).)*$/
})
