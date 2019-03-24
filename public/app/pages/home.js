import { c } from "../exports.js";

export const homeContent = [
  c.sectionHeader("Get Started!"),
  c.subhead("Object Oriented Websites"),
  c.p(
    "Building beautiful and functional sites and delivering them to the client is as easy as building a JavaScript object."
  ),
  c.p(
    "With curly.js building your next big this is as simple as building a JavaScript object. Why fuss with potentially massive file bases? Curly.js is only 15kb for the development package."
  ),
  c.p("Simply link curly.js in the head of your .html:"),
  c.codeBlock([c.al(`<`),c.d(`script `),c.vr(`src`),`=`,c.va(`'./your/path/to/curly.js'`),c.al(`><`),`/`,c.d(`script`),c.al(`>`)]),
  c.p("Then link your app.js file just before the closing body tag:"),
  c.codeBlock([c.al(`<`),c.d(`script `),c.vr(`src`),`=`,c.va(`'./path/to/your/app.js'`),c.al(`><`),`/`,c.d(`script`),c.al(`>`)]),
  c.p(
    "You can now either serve your app through the public directory or using dynamic imports."
  ),
  c.buttonRow([
    c.link({ href: "#about", text: "Learn More!" })
  ])
];
