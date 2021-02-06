import { layout } from "./_layout.js";

let contents

export function get(req, res) {

    contents = JSON.stringify(layout);

    res.writeHead(200, {
        'Content-Type': 'application/json'
    });

    res.end(contents);
}