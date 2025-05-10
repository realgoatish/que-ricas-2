const fs = require("fs");
// const probe = require('probe-image-size')

const BASE_URL = "https://www.que-ricas.com";
const pages = [""];

fs.readdirSync("./src/routes").forEach((file) => {
  file = file.split(".")[0];
  if (
    file.charAt(0) !== "_" &&
    file !== "sitemap" &&
    file !== "index" &&
    file !== "layout"
  ) {
    pages.push(file);
  }
});

// TODO - may delete this since it checks all dirs & order-online page has no images on it, not even an og:image
// const getPageImages = (imageDir) => {
//   let result = [];
//   if (imageDir === "") {
//     imageDir = "home";
//   }

//   fs.readdirSync(`./static/images/${imageDir}`).forEach((file) => {
//     result.push(file);
//   });
//   return result;
// };

const getPageImages = (imageDir) => {
  let result = [];
  if (imageDir === "") {
    imageDir = "home";
  }

  // filter out order-online dir since it has no images on page or og:image
  if (imageDir !== "order-online") {
    fs.readdirSync(`./static/images/${imageDir}`).forEach((file) => {
      result.push(file);
    });
  }

  return result;
};

// let data = fs.readFileSync('./static/images/global/que-ricas-logo.png');
// console.log(probe.sync(data));

const render = (pages) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">${pages
  .map(
    (page) => `
  <url>
    <loc>${BASE_URL}${page === "" ? page : "/" + page}</loc>
    <priority>0.85</priority>${getPageImages(page)
      .map(
        (img) => `
    <image:image>
      <image:loc>${BASE_URL}/images/${
          page === "" ? "home" : page
        }/${img}</image:loc>
    </image:image>`
      )
      .join("")}
  </url>`
  )
  .join("")}
</urlset>
  `;

export function get(req, res) {
  res.writeHead(200, {
    "Cache-Control": `max-age=0, s-max-age=${600}`,
    "Content-Type": "application/rss+xml",
  });

  const sitemap = render(pages);
  res.end(sitemap);
}
