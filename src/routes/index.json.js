import { homePage } from './_home.js'

let contents

export function get(req, res) {

  contents = JSON.stringify(homePage);

  res.writeHead(200, {
      'Content-Type': 'application/json'
  });

  res.end(contents);
}