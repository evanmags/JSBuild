import { c } from "../exports.js";

export const downloadContent = [
  c.sectionHeader("Downloads"),
  c.subhead("Get curly.js for yourself"),
  c.p("Theres nothing here yet..."),
  c.p("Click one of the buttons below to go to the home page or explore our documentation."),
  c.buttonRow([
    c.link({href: '/download/curly/full', text: 'Download Development Package'}),
    c.link({href: '/download/curly/prod', text: 'Download Production Package'})
  ]),
  c.buttonRow([
    c.link({ href: "#Home", text: "Home" }),
    c.link({ href: "#about", text: "Learn More!" })
  ])
];