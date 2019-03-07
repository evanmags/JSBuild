import { c } from "../exports.js";

export const homeContent = [
  c.sectionHeader("Check it out!"),
  c.subhead("Object oriented compositon of beautiful websites"),
  c.p(
    "Building beautiful and functional sites and delivering them to the client browser just got a whole lot easier."
  ),
  c.p(
    "With Curly.js building your next big this is as simple as building a JavaScript object or JSON file. Why fuss with potentially massive file bases to build a site that could by any measure be served through API call."
  ),
  c.p("Simply link Curly.js in the head of your .html:"),
  c.code(`<script src='your/path/to/curly.js'><script>`),
  c.p("then just before the closing body tag link:"),
  c.code(`<script src='/path/to/your/app.js'><script>`),
  c.p(
    "Or you can make an API call from a script tag to deliver your app via .json file"
  ),
  c.link({ href: "#about", text: "Learn More!" })
];
