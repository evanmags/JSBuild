import { c } from "../exports.js";

export const aboutContent = [
  c.sectionHeader("About curly.js"),
  c.subhead("Building Components"),
  c.p(
    "Components in curly.js are JavaScript objects, plain and simple. This opens a world of possibility for what you can do. Constructing complex, self-contained components bocomes very simple in curly, but to start we will build a simple 'h1' element."
  ),
  c.p("To begin, we need to define our component:"),
  c.codeBlock(`const sample = {}`),
  c.p(
    "Since we are don't want to be able to reassign the name of our component later in our app we use the 'const' declairation"
  ),
  c.p(
    "Now in order to render anything to the page we are required to declare an element object inside of our component"
  ),
  c.codeBlock(
    ` export const sample = {
    h1:{
      id:'header'
      classList:'red underline'
    }
  }`
  ),
  c.p("The element object is a key value pair within the component object where the key is the element type and the value is either an empty object or an object of key value pairs of attributes."),
  c.p(
    "This element object should contain any and all attributes that you wish to pass to the rendered element. Formatting for keys should be as you would see when declaring for any element you pull from the DOM in JavaScript (i.e. id, classList, ect.). Since the elements are created using node[attribute] = 'value' even custom attributes can be passed through."
  ),
  c.p(
    "Now we will give our element something to display. For this we build a 'has' array. The 'has' array is an ordered list of all children, including text, of this element. We can place anything we would like inside of any element including other components, functions, strings, and variables."
  ),
  c.p(
    `For example, here we've taken our 'sample' element and placed it inside of a div called 'sampleBlock'.`
  ),
  c.codeBlock(
    ` export const sampleBlock = {
    div: {
      id: 'sampleBlock'
    },
    has: [sample, { hr: {} }, variable, func()],
  }`
  ),
  c.p("You can see that we have added a component that will render an 'hr' element, a variable, and a function also. All of these will work and below you can see the rendered component"),
  c.sampleBlock,
  c.p(
    "It is important to note that the order of elements in the 'has' array dictates the order in which elements are rendered to and appear on the page."
  ),
  c.p('In general the structure for any componant should look like this:'),
  c.codeBlock(
  ` export const element = {
    type: {
      attribute: String
    },
    has: [...children],
    style: {
      CSSProperty: Value as String,
      //--- '-' becomes '_' in property ---//
      //--- '-' can be '_' or '-' in value string ---//
    },
    events: {
      event: handler => {},
      -OR-
      event: handler(),
    },
    timers: {
      func() {
        return setInterval
        -OR-
        return setTimeout
      }
    }
      //--- The following methods are applied ---//
    //--- to every element object at build time ---//
    CSSselector: String of concatenated attribute,
    DOMelement: this element in the dom,
    Update(){
      function allowing for auto update of elements
    },
    getHas(){
      returns has array
    }
    setHas(){
      updates has array
      invokes Update()
    }
  }`
    ),
  c.p("There are several keys in the outline above that we have not discussed yet. Don't worry, they will be covered in later sections."),
  c.buttonRow([
    c.link({ href: "#home", text: "Home" }),
    c.link({ href: "#clock", text: "Dynamic Comps." })
  ])
];
