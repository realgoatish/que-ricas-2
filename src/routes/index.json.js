import { homePage } from './_home.js'

let contents

export function get(req, res) {
  // const sahar = this.fetch('do stuff here to fetch')

  contents = JSON.stringify(homePage);

  res.writeHead(200, {
      'Content-Type': 'application/json'
  });

  res.end(contents);
}