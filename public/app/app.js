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

import * as e from './exports.js';

// App is typically the only componant buildt in the app.js file.
// this is not a requirement but a convention.
// App could also be buildt in the components folder and imported like an other componant
export const App = {
  div: {
    id: 'app'
  },
  has: [e.c.menu, e.c.banner, e.c.main, e.c.footer],
  style: {
    background: e.sec.light,
    min_height: '100vh',
    display: 'flex',
    flex_direction: 'column'
  }
};

curly.router.paths = e.routes;
curly.router.run('/curly.js-docs', '#home');
curly.render(App, document.querySelector('body'), e.styles);
