import { c } from "../exports.js";

export const clockContent = [
  c.sectionHeader("Dynamic Components"),
  c.subhead("Examining the Ticking Clock"),
  c.p(
    "Just like other frontend frameworks, componants in curly.js are dynamically designed and automatically update themselves when their contents or styles change."
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
    }`
  ),
  c.p(
    "Initially our clock is just a span element with an id of 'clock'. This clock generates a string of the time at render. This however wouldn't be a very functional element as we would like our clock to 'tick' anf displsy the current time."
  ),
  c.p("To acheve this we will use a new object inside of our componant, the timers object."),
  c.codeBlock(
    `export const clock = {
    span: {
        id: 'clock'
    },
    has: [new Date().toLocaleTimeString()],
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
    "The timers object is a special object within componants in curly.js. Everything in this object will be evaluated during the rendering process. However returns from intervals or timers are not automatically retrieved. These returns should be pushed into the this.int array or in the case that there is only one timer, this.int can be set as a single value. When these elements are removed from the page the this.int object is used to clear any intervals that may be running."
  ),
  c.p("Upon further examination you will notice a special function within our clock, the .setHas() method. Along with the .getHas() method these two methods work to minitor the state of the 'has' array. Only these two methods should be used for accessing or updating the 'has' array after render as the .setHas() method will invoke the update of the entire element where as clock.has = [...objects] would not."),
  c.p("At time of render the timer is set and the element begins to tick as seen below. We've also added a console.log('timer fired') so you can see that when you navigate away and remove the element from the DOM it no longer triggers the timer."),
  c.clock,
  c.p("Next we will take a look at how events are handled in curly.js"),
  c.buttonRow([
    c.link({ href: "#about", text: "Componants" }),
    c.link({ href: "#events", text: "Events" })
  ])
];
