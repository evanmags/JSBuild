import { c } from "../exports.js";

export const downloadContent = [
  c.sectionHeader("Downloads"),
  c.subhead("Get curly.js for yourself"),
  c.p("If you are just starting to use Curly, download the Development package below. This package includes error messages, in depth documentation in the code and more to help you get up and running."),
  c.buttonRow([
    c.link({href: '/download/curly/full', text: 'Download Development Package'}),
  ]),
  c.p("If you are a pro already, the production package is for you. Get it here:"),
  c.buttonRow([
    c.link({href: '/download/curly/prod', text: 'Download Production Package'})
  ]),
  c.buttonRow([
    c.link({ href: "#home", text: "Home" }),
    c.link({ href: "#about", text: "Learn More!" })
  ])
];