import { c } from "../exports.js";

export const four_O_four = [
  c.sectionHeader("404 error"),
  c.subhead("Something went wrong."),
  c.p("Theres nothing here yet..."),
  c.p("Click one of the buttons below to go to the home page or explore our documentation."),
  c.buttonRow([
    c.link({ href: "#Home", text: "Home" }),
    c.link({ href: "#about", text: "Learn More!" })
  ])
];