import { c } from "../exports.js";

export const styleContent = [
  c.sectionHeader("Styling"),
  c.subhead("Creating CSS sheets in curly.js"),
  c.p(
    "Beautifully styled pages and even pages that change dynamically with user interacion as easy as ever."
  ),
  c.p(
    "Curly.js provides you with the full power of JavaScript to do as you please in your stylesheets. From changing styles with setInterval to simple branding objects nothing is standing in your way."
  ),
  c.p(
    "The design behind our styling object is simple, make it as much like CSS as possible while still maintaining JavaScript object notation. This means that what you write in your styles object, minus a few intricacies, is css."
  ),
  c.p(
    "Style objects in curly.js are actually a group of objects, component style, psudo style, global style, and brand style. To begin we will look at component style."
  ),
  c.p("you ham have noticed back in the section on functional components that our p element had a key:value pair with a key of style and a value that was an object as seen below."),
  c.codeBlock(
    `export const p = props => {
  return {
    p: {},
    has: [props],
    style: {
      margin_bottom: "15px"
    }
  };
};`),
  c.p("Selectors for styled elements are generated at the time of styling and are generated following the rules: tag+class > tag+id > tag. The reason that class is prioritized over id is that class styles are more easily changed after rendering."),
  c.p(
    "CSS values be written as strings, variables, or the return of functions but will eventually become a string. General CSS formatting applies and values should be hyphenated or spaced as they would be in your stylesheet."
  ),
  c.p(
    "Properties on the other hand are either single words or written with underscores replacing hyphens. Properties can also be written using strings or template literals but, as with values, will become a string and must eventually match a CSS property that your browser will understand"
  ),
  c.p("Next up we take a look at the global styles object."),
  c.buttonRow([
    c.link({ href: "#list", text: "Lists" }),
    c.link({ href: "#global", text: "Global Styles" })
  ])
];
