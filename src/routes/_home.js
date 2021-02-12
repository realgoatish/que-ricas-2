import home from './../../markdowns/home/*.md'
const fs = require('fs')


export const homePage = home
  .map(({ metadata, html }) => {
    if (metadata.foodImage && metadata.hdImage) {


      let splitFoodImagePath = metadata.foodImage.split('/')
      let splitHdImagePath = metadata.hdImage.split('/')

      metadata.foodImageSlug = splitFoodImagePath[splitFoodImagePath.length - 1]
        .split('.')[0]
      
      metadata.hdImageSlug = splitHdImagePath[splitHdImagePath.length - 1]
        .split('.')[0]
      
      metadata.allFoodImages = []

      metadata.allHdImages = []

      
      fs.readdirSync(`./static/g/images/home`).forEach(file => {
        if (file.includes(metadata.foodImageSlug)) {
          metadata.allFoodImages.push(file)
        }
        if (file.includes(metadata.hdImageSlug)) {
          metadata.allHdImages.push(file)
        }
      })

      metadata.allFoodImageSizes = getImageSizes(metadata.allFoodImages, ["400", "800", "1200"])
      metadata.allHdImageSizes = getImageSizes(metadata.allHdImages, ["400", "800", "1200"])


      metadata.foodImage = metadata.foodImage.replace('.', 'https://www.que-ricas.com/g')
      metadata.hdImage = metadata.hdImage.replace('.', 'https://www.que-ricas.com/g')
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
