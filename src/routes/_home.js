import home from './../../markdowns/home/*.md'
const fs = require('fs')


export const homePage = home
  .map(({ metadata, html }) => {
    if (metadata.foodImage && metadata.hdImage) {
      metadata.foodImage = metadata.foodImage.replace('.', 'https://www.que-ricas.com')
      metadata.hdImage = metadata.hdImage.replace('.', 'https://www.que-ricas.com')
    }
    return ({ ...metadata, html })
  })

