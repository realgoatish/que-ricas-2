import { orderOnlinePage } from "./_order-online.js";

let contents;

export function get(req, res) {
  contents = JSON.stringify(orderOnlinePage);

  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(contents);
}
