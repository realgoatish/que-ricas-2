import home from './../../markdowns/home/*.md'

export const homePage = home
  .map(({ metadata, html }) => ({ ...metadata, html }))

