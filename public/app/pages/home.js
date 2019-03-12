import { c } from "../exports.js";

export const homeContent = [
  c.sectionHeader("Get Started!"),
  c.subhead("Object oriented compositon of beautiful websites"),
  c.p(
    "Building beautiful and functional sites and delivering them to the client is as easy as an API call."
  ),
  c.p(
    "With curly.js building your next big this is as simple as building a JavaScript object or JSON file. Why fuss with potentially massive file bases curly.js is only 10kb for the development package."
  ),
  c.p("Simply link curly.js in the head of your .html:"),
  c.codeBlock([c.al(`<`),c.d(`script `),c.vr(`src`),`=`,c.va(`'./your/path/to/curly.js'`),c.al(`><`),`/`,c.d(`script`),c.al(`>`)]),
  c.p("then link your app.js file just before the closing body tag:"),
  c.codeBlock([c.al(`<`),c.d(`script `),c.vr(`src`),`=`,c.va(`'./path/to/your/app.js'`),c.al(`><`),`/`,c.d(`script`),c.al(`>`)]),
  c.p(
    "Your app can either be seved through an API call using the XHR or Fetch or contained in your app.js, this is covered more in depth in the docs."
  ),
  c.buttonRow([
    c.link({ href: "#about", text: "Learn More!" })
  ])
];
