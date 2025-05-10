import arepasContent from "./../../../markdowns/menu/arepa-lab/*.md";
import churrosContent from "./../../../markdowns/menu/churros/**/*.md";
import drinksContent from "./../../../markdowns/menu/drinks/*.md";
import empanadasContent from "./../../../markdowns/menu/empanadas/*.md";
import fromTheGriddleContent from "./../../../markdowns/menu/from-the-griddle/*.md";
import plattersContent from "./../../../markdowns/menu/platters/**/*.md";
import sidesAndExtrasContent from "./../../../markdowns/menu/sides-and-extras/*.md";
import specialsContent from "./../../../markdowns/menu/specials/*.md";
import startersContent from "./../../../markdowns/menu/starters/*.md";
import tacosContent from "./../../../markdowns/menu/tacos/*.md";
const fs = require("fs");

function transform(menuSection) {
  let result = menuSection
    .map(({ metadata }) => {
      if (metadata?.productImage != null) {
        let splitPath = metadata.productImage.split("/");
        metadata.productImageSlug =
          splitPath[splitPath.length - 1].split(".")[0];
        metadata.productImageExtension =
          splitPath[splitPath.length - 1].split(".")[1];

        metadata.allProductImages = [];

        fs.readdirSync(`./static/g/images/menu`).forEach((file) => {
          if (file.includes(metadata.productImageSlug)) {
            metadata.allProductImages.push(file);
          }
        });

        metadata.productImageSizes = getImageSizes(metadata.allProductImages, [
          "400",
          "800",
          "1200",
        ]);

        metadata.productImage = metadata.productImage.replace(
          ".",
          "https://www.que-ricas.com/g"
        );
      }
      return { ...metadata };
    })
    .sort((a, b) => (a.number > b.number ? 1 : -1));
  return result;
}

function getImageSizes(arr, sizesArr) {
  let result = [];
  sizesArr.forEach((size) => {
    arr.forEach((file) => {
      if (file.includes(size) && !result.includes(size)) {
        result.push(size);
      }
    });
  });
  return result;
}

const arepas = transform(arepasContent);
const churros = transform(churrosContent);
const drinks = transform(drinksContent);
const empanadas = transform(empanadasContent);
const fromTheGriddle = transform(fromTheGriddleContent);
const platters = transform(plattersContent);
const sidesAndExtras = transform(sidesAndExtrasContent);
const specials = transform(specialsContent);
const starters = transform(startersContent);
const tacos = transform(tacosContent);

// this is where you're controlling order of menu sections on the front end :/
const allSections = [
  ...starters,
  ...empanadas,
  ...fromTheGriddle,
  ...arepas,
  ...tacos,
  ...platters,
  ...churros,
  ...sidesAndExtras,
  ...drinks,
  // ...specials,
];

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

// console.log(JSON.stringify(platters[platters.findIndex((x) => x.itemName === "")]))

export const menu = {
  titles: titles,
  sections: {
    starters: starters,
    empanadas: empanadas,
    fromTheGriddle: fromTheGriddle,
    arepas: arepas,
    tacos: tacos,
    platters: platters,
    churros: churros,
    sidesAndExtras: sidesAndExtras,
    drinks: drinks,
  },
  seo: {
    title: "Que Ricas Authentic Venezuelan Menu",
    description:
      "Authentic empanadas, arepas, pabellon bowls, churros, local specialties, gluten free and vegan options in Haddon Township, NJ",
    image:
      platters[
        platters.findIndex((x) => x.itemName === "Shredded Chicken Pabellón")
      ].productImage,
    altText:
      platters[
        platters.findIndex((x) => x.itemName === "Shredded Chicken Pabellón")
      ].altText,
  },
};
