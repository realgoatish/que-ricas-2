import story from './../../../markdowns/story/*.md'
const fs = require('fs')


export const aboutPage = story
  .map(({ metadata, html }) => {
    if (metadata.image) {

      let splitPath = metadata.image.split('/')
      metadata.imageSlug = splitPath[splitPath.length - 1]
        .split('.')[0]
      metadata.imageExtension = splitPath[splitPath.length - 1]
        .split('.')[1]
      
      metadata.allImages = []
      
      fs.readdirSync(`./static/g/images/story`).forEach(file => {
        if (file.includes(metadata.imageSlug)) {
          metadata.allImages.push(file)
        }
      })

      metadata.imageSizes = getImageSizes(metadata.allImages, ["400", "800", "1200"])
      metadata.image = metadata.image.replace('.', 'https://www.que-ricas.com/g')
    }
    return ({ ...metadata, html })
  })

function getImageSizes(arr, sizesArr) {
  let result = []
  sizesArr.forEach((size) => {
    arr.forEach((file) => {
      if (file.includes(size) && !result.includes(size)) {
        result.push(size)
      }
    })
  })
  return result
}

