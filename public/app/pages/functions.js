import { c } from "../exports.js";

export const functionContent = [
  c.sectionHeader("Functional Components"),
  c.subhead("Do more, write less."),
  c.p(
    "Now that we have an understanding of what componants are, how they work, and what they can do, let's look at creating elements using functions."
  ),
  c.p(
    "Simply put, functional components output an element object. In fact they must output an element object or nothing will be rendered. This object could be anything from a list item (see the next example) to just changing the text based on the time of day. But in general these types of components modify the outupt object."
  ),
  c.p("Functional components should be designed to be utilized in many contexts. for example every paragraph on this site was generated using a functional componant that yu can see below."),
  c.codeBlock(
`export const p = props => {
  return {
    p: {},
    has: [props],
    style: {
      margin_bottom: "15px"
    }
  };
};
`),
  c.p("Let's dig through this function a bit. The first thing we should notice is that the output is an object, that sould always be the case. next we will notice that there is an input called 'props' (just like React), short for properties. Props can be or contain anything, that all depends on how you define the undelying function. In this case props should be a string of text as we are dripping th ewhole thing into the 'has' array of a p element."),
  c.p("Though a simple case, this example illustrates the power of functional componants. In the next section we will take a look at a more complex example, the sidebar you see to the right (on desktop)."),
  c.buttonRow([
    c.link({ href: "#events", text: "Events" }),
    c.link({ href: "#list", text: "List Example" })
  ])
];
