import { c } from "../exports.js";

export const contactContent = [
  c.sectionHeader("Contact"),
  c.subhead("Reach out to help, ask, or suggest"),
  c.p("We are always looking for help maintaining or updating curly.js. If you are looking to contribute, or just want to dig further into the project checkout our GitHub repository."),
  c.buttonRow([
    c.link({href:"https://github.com/evanmags/JSBuild", text: 'GitHub Repo'})
  ]),
  c.p("We also have a sandbox hosted on Codepen with the entire development version of curly.js for you to expiriment and learn before diving into a full application"),
  c.buttonRow([
    c.link({href:"https://codepen.io/emags112/pen/oVwdeN?editors=0010", text: 'Codepen Sandbox'})
  ]),
  c.p("Or click the 'Learn More!' button to explore our documentation."),
  c.buttonRow([
    c.link({ href: "#Home", text: "Home" }),
    c.link({ href: "#about", text: "Learn More!" })
  ])
];
