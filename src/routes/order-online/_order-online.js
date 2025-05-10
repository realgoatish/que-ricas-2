import orderOnline from "./../../../markdowns/orderOnline/*.md";
// const fs = require("fs");

// console.log(JSON.stringify(orderOnline, null, 2));

// TODO - look at the shape of the data you're returning to the front end & add an 'seo' property like the other pages

export const orderOnlinePage = orderOnline.map(({ metadata, html }) => {
  return { ...metadata, html };
});

// export const orderOnlinePage = orderOnline;
