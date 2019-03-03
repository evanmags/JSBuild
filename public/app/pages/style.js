import { c } from "../exports.js";

export const styleContent = [
  c.sectionHeader("Styling"),
  c.subhead("Creating CSS sheets in JSBuild"),
  c.p(
    "Beautifully styled pages and even pages that change dynamically with user interacion are easier than ever."
  ),
  c.p(
    "JSBuild provides you with the full power of JavaScript to do as you please in your stylesheets. From changing styles with setInterval to simple branding objects nothing is standing in your way."
  ),
  c.p(
    "The design behind our styling object is simple, make it as much like CSS as possible while still maintaining JavaScript object notation. This means that what you write in your styles object IS css, at least mostly."
  ),
  c.p(
    "Style objects in JSBuild are actually a group of objects but the main style object (conventionally named CSS) shoud be set up like so:"
  ),
  c.codeBlock(
    `export const CSS = {
        "#css.selector": {
            property: 'value',
            multi_word_property: 'multi-word-value'
        }
    }`
  ),
  c.p(
    "Note that any selector you could write in CSS will also work here, since the value is a string. If you use a function to write your classnames then the return must be a string. Template literals will also work for building names."
  ),
  c.p(
    "CSS values must be written as strings and can be hyphenated or spaced as they would be in your stylesheet."
  ),
  c.p(
    "Properties on the other hand are either single words or written with underscores replacing hyphens. Properties can also be written using strings, template literals or or functions but must eventually match a CSS property that your browser will understand"
  ),
  c.buttonRow([
    c.link({ href: "#about", text: "Back" }),
    c.link({ href: "#contact", text: "Contact Me" })
  ])
];
