import { c } from "../exports.js";

export const eventContent = [
  c.sectionHeader("Events in curly.js"),
  c.subhead("From clicks to inputs and evetything in between"),
  c.p(
    "User events and browser events are what make our applications interactive and navigatable. Without them we would have nothing but static html with css. We can harness the power of user events usign another special object within the component object, the 'events' object."
  ),
  c.p(
    "Much like the timers object, the events object is evaluated at render and event listeners are added. So long as you are using a named function,  event listeners are cleared when an element is removed from the page as well."
  ),
  c.p("The general structure of this object should be as follows:"),
  c.codeBlock(
    `events: {
  click: function,
      - or -
  keypress(),
      - or -
  mouseenter: ()=>{},
}`
  ),
  c.p("As mentioned previously, note that when this element is removed from the page, only the click and keypress events will be removed from the element."),
	c.p("In the context of our clock example, if we wanted to be able to stop the clock by clicking it, our event object would look like this:"),
	c.codeBlock(
		`export const clock = {
  p: {
    id: "clock"
  },
  has: [new Date().toLocaleTimeString()],
  style: {
    text_align: "center"
  },
  events: {
    click() {
      clearInterval(clock.int);
    }
  },
  timers: {
    date() {
      return (clock.int = setInterval(() => {
        return clock.setHas([new Date().toLocaleTimeString()]);
      }, 1000));
    }
  }
};`
  ),
  c.p("To see this in action, go back and click on the clock from the last example. Or continue on to learn about componants rendered from functions."),
  c.buttonRow([
    c.link({ href: "#clock", text: "Clock Example" }),
    c.link({ href: "#functions", text: "Function Comps." })
  ])
];
