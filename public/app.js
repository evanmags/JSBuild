// app file structure (for node/express application)
// /public
//    | /components
//        | files.js
//        | for.js
//        | componenets.js
//    | /pages
//        | home.js
//        | about.js
//        | contact.js
//        | ect.js
//    | /router
//        | routes.js
//    | /styles
//        | styles.js
//    | app.js
// /views
//    | index.ejs
//    |   -OR-
//    | index.html
// index.js

import * as e from "./exports.js";

const app = {
  div: {
    id: "app"
  },
  has: [e.c.menu, e.c.banner, e.c.container],
  style: {
    background: e.colors.white,
    min_height: "100vh",
    padding: "50px 0 30px",
    display: "flex",
    flex_direction: "column",
    font_family: "Laila"
  }
};

render(app, document.querySelector("body"));

style(e.styles);

router.paths = e.routes;
router.run();