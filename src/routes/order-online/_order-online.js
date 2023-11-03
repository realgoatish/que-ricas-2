import orderOnline from "./../../../markdowns/orderOnline/*.md";
// const fs = require("fs");

console.log(JSON.stringify(orderOnline, null, 2));

export const orderOnlinePage = orderOnline.map(({ metadata, html }) => {
  return { ...metadata, html };
});

// export const orderOnlinePage = orderOnline;
