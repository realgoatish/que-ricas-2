import { menu } from './_menu.js'

  let contents

export function get(req, res) {

    contents = JSON.stringify(menu);

    res.writeHead(200, {
        'Content-Type': 'application/json'
    });

    res.end(contents);
}