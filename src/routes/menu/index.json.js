import { menu } from './_menu.js'

  // const allMenuSections = [
  //   ...starters,
  //   ...empanadas,
  //   ...arepas,
  //   ...platters,
  //   ...churros,
  //   ...sidesAndExtras,
  //   ...drinks,
  //   ...specials,
  // ];

  let contents

export function get(req, res) {
    // const sahar = this.fetch('do stuff here to fetch')

    contents = JSON.stringify(menu);

    res.writeHead(200, {
        'Content-Type': 'application/json'
    });

    res.end(contents);
}