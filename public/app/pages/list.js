import { c } from "../exports.js";

export const listContent = [
  c.sectionHeader("The Sidebar"),
  c.subhead("An example of functinal components"),
  c.p("Take a look at the sidebar to the right. You might think that each of the items in it are individually defined components. While this would be possible, it isn't practical or efficent."),
  c.p("In reality, the sidebar itself is an individual componant, but the links in side are the output of a function in the 'has' array of this element. Below is the underlying code, minus styling, of these elements."),
  c.codeBlock(
    `export const sidebarItems = props => {
  
  let arr = [];
  
  props.forEach((el, i) => {
    const item = {
      a: {
        id: 'sidebarItem$\{i\}',
        classList: 'sidebarItem',
        href: el.href
      },
      has: [el.text],
      events: {
        click: e => {
          document.querySelectorAll(".sidebarItem").forEach(li => {
            li.classList.remove("viewing");
          });
          e.target.classList.toggle("viewing");
        }
      }
    };
    arr.push(item);
  });
  
  return arr;
};`),
c.p("So lets dig through this wall of code. First we see our function sidebarItem() for creating sidebar items. This function takes in props, as do all functional componants. You will also notice that there is an array created and if you go down one line that props itself is an array."),
c.p("It was also stated that functional compnants can only output objects, and that is true, but in this case we output an array of objects. Each of which is identical except for the text, id, and href. You'll see why our output is an array below."),
c.codeBlock(
  `export const sidebar = {
    div: {
      id: "sidebar"
    },
    has: sidebarItems([
      { text: "component", href: "#about" },
      { text: "Dynamic Comps.", href: "#clock" },
      { text: "Events", href: "#events" },
      { text: "Function Comps.", href: "#functions" },
      { text: "list Example", href: "#list" },
      { text: "styling", href: "#style" },
      { text: "routing", href: "#routing" }
    ]),
  };`),
  c.p("In the last section it was said that props could be anything. If you look to where the function is called, where the 'has' array should be in the sidebar componant, you will see that props is an array that contains objects of key:value pairs. Each of these objects is looped through in the function. then the return of the function becomes the 'has' array of the sidebar component."),
  c.p("Continue to dig through this functional componant and try to build one yourself. Then in the next section we will move on to styling our components."),
  c.buttonRow([
    c.link({ href: "#Home", text: "Home" }),
    c.link({ href: "#about", text: "Learn More!" })
  ])
];