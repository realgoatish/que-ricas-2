import story from './../../../markdowns/story/*.md'

export const aboutPage = story
  .map(({ metadata, html }) => ({ ...metadata, html }))

