import { c } from "../exports.js";

export const aboutContent = [
  c.sectionHeader("About JSBuild"),
  c.subhead("Building Components"),
  c.p(
    "Components in JSBuild are JavaScript objects. This opens a world of possibility for what you can do. Constructing complex, self-contained components bocomes very simple but to start we will build an 'h1' element."
  ),
  c.p("To begin, lets define our component:"),
  c.codeBlock(`const sample = {}`),
  c.p(
    "Since we are dont want to be able to reassign the name of our component later in our app we use the 'const' declairation"
  ),
  c.p(
    "Now in order to render anything to the page we are required to declare an element object inside of our component"
  ),
  c.codeBlock(
    `export const sample = {
    h1:{
      id:'header'
      classList:'red underline'
    }
  }`
  ),
  c.p(
    "This element object should contain any and all attributes that you wish to pass to the rendered element. Just make sure that they are formatted as you would see when declaring for any element you pull from the DOM. (i.e. id, classList, ect.) since the elements are created using node[attribute] = 'value'."
  ),
  c.p(
    "Now we will give our element something to display. For this we build a 'has' object which is an array. We can place anything we would like inside of any element including other components, functions, strings, and variables."
  ),
  c.p(
    `For example, here we've taken our 'sample' element and placed it inside of a div called 'sampleBlock'.`
  ),
  c.codeBlock(
    `export const sampleBlock = {
    div: {
      id: 'sampleBlock'
    },
    has: [sample, { hr: {} }, variable, func()],
  }`
  ),
  c.p("All of these will work and below you can see the rendered component"),
  c.sampleBlock,
  c.p(
    "Note that the order of elements in the 'has' array dictates the order in which elements are rendered to and appear on the page."
  ),
  c.p("In the next section we will learn more about styling components"),
  c.buttonRow([
    c.link({ href: "#home", text: "Home" }),
    c.link({ href: "#style", text: "Styling" })
  ])
];
