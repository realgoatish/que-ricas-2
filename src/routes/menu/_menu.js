import arepasContent from './../../../markdowns/menu/arepa-lab/*.md'
import churrosContent from './../../../markdowns/menu/churros/**/*.md'
import drinksContent from './../../../markdowns/menu/drinks/*.md'
import empanadasContent from './../../../markdowns/menu/empanadas/*.md'
import plattersContent from './../../../markdowns/menu/platters/**/*.md'
import sidesAndExtrasContent from './../../../markdowns/menu/sides-and-extras/*.md'
import specialsContent from './../../../markdowns/menu/specials/*.md'
import startersContent from './../../../markdowns/menu/starters/*.md'
const fs = require('fs')


function transform(menuSection) {
  let result = menuSection
    .map(({ metadata }) => {
      if (metadata.productImage) {
        metadata.productImageSlug = 
        metadata.productImage = metadata.productImage.replace('.', 'https://www.que-ricas.com/g')
      }
      return ({ ...metadata })
    })
    .sort((a, b) => (a.number > b.number ? 1 : -1))
  return result
}

const arepas = transform(arepasContent)
const churros = transform(churrosContent)
const drinks = transform(drinksContent)
const empanadas = transform(empanadasContent)
const platters = transform(plattersContent)
const sidesAndExtras = transform(sidesAndExtrasContent)
const specials = transform(specialsContent)
const starters = transform(startersContent)

const allSections = [
  ...starters,
  ...empanadas,
  ...arepas,
  ...platters,
  ...churros,
  ...sidesAndExtras,
  ...drinks,
  ...specials,
];

// console.log(allSections)

// allSections.forEach((x) => {
//   if (x)
// })


function getTitle(section) {
  let result = section
    .filter((obj) => obj.menuSectionTitle)
    .map(({ menuSectionTitle }) => menuSectionTitle);
  return result;
}

const titles = getTitle(allSections);

// const plattersStepOne = platters.filter((x) => x.itemName && !x.description)
// const plattersStepTwo = platters.filter((x) => x.itemName && x.description)

// const churrosStepOne = churros.filter((x) => x.description)
// const churrosStepTwo = churros.filter((x) => x.itemName && !x.description)

export const menu = {
  titles: titles,
  sections: {
    starters: starters,
    empanadas: empanadas,
    arepas: arepas,
    platters: platters,
    churros: churros,
    sidesAndExtras: sidesAndExtras,
    drinks: drinks,
    specials: specials
  },
  seo: {
    title: "Que Ricas Authentic Venezuelan Menu",
    description:
      "Authentic empanadas, arepas, pabellon bowls, churros, local specialties, gluten free and vegan options in Haddon Township, NJ",
    image:
      platters[
        platters.findIndex((x) => x.itemName === "Hangover")
      ].productImage,
    altText:
      platters[
        platters.findIndex((x) => x.itemName === "Hangover")
      ].altText
  }
}
