import { c } from "../exports.js";

export const clockContent = [
  c.sectionHeader("Ticking Clock Example"),
  c.subhead("Examineing self-updating componants"),
  c.p(
    "Just like other frontend frameworks, componants in Curly.js are designed to automatically update themselves when their contents or styles change."
  ),
  c.p(
    "To examine this further lets take the example of the ticking clock. As a componant the initial structure is fairly simple."
  ),
  c.codeBlock(
    `export const clock = {
        span: {
            id: 'clock'
        },
        has: [new Date().toLocaleTimeString()],
        style: {}
    }`
  ),
  c.p(
    "Initially our clock is just a span that displays the time of the componants render. Now to make the clock /'tick/' we must set a timer to update the clock every second."
  ),
  c.codeBlock(
    `export const clock = {
    span: {
        id: 'clock'
    },
    has: [new Date().toLocaleTimeString()],
    style: {},
    timers: {
        date() {
            return (clock.int = setInterval(() => {
                return clock.setHas([new Date().toLocaleTimeString()]);
            }, 1000));
        }
    }
}`
  ),
  c.p(
    "The timers object is a special object within componants in Curly.js. Everything in this object will be evaluated during the rendering process and any returns from intervals or timers will be set to a key:value pair within the this.int object. When these elements are removed from the page the this.int object is used to clear any intervals that may be running."
  ),
  c.p("Upon render of the element to the page the tmer is set and the element begins to tick as seen here. We've also added a console.log('timer fired') so you can see that when you navigate away and remove the element from the DOM it no longer triggers the timer."),
  c.clock,
  c.buttonRow([
    c.link({ href: "#about", text: "Componants" }),
    c.link({ href: "#style", text: "Styling" })
  ])
];
