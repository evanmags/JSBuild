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
  c.codeBlock([
    c.ln('1'),c.t('events'), ': {',
    c.ln('2', `  `),c.t('click'), ': ', c.f('function'),
    c.ln('3', `  `),c.co('//  -or-'),
    c.ln('4', `  `),c.f('keypress'), '()',
    c.ln('5', `  `),c.co('//  -or-'),
    c.ln('6', `  `),c.t('mouseover'), ': () ', c.al('=>'), ' { }',
    c.ln('7'),`}`
  ]),
  c.p("As mentioned previously, note that when this element is removed from the page, only the click and keypress events will be removed from the element."),
	c.p("In the context of our clock example, if we wanted to be able to stop the clock by clicking it, our event object would look like this:"),
	c.codeBlock([
    c.ln('1'),c.d(`const `),c.vr(`clock`),` = {`,
    c.ln('2', `  `),c.t(`span`),`: {`,
    c.ln('3', `    `),c.t(`id`),`: `,c.va(`'clock'`),
    c.ln('4', '  '),`},`,
    c.ln('5', `  `),c.t(`has`),`: [`,c.al(`new `),c.f(`Date`),`().`,c.f(`toLocaleTimeString`),`()],`,
    c.ln('6', `  `),c.t('events'), ': {',
    c.ln('7', `    `),c.f('click'), '() {',
    c.ln('8', '      '), c.f('clearInterval'), '(',c.vr('clock'),'.',c.t('int') ,")",
    c.ln('9', `    `), '}',
    c.ln('10', `  `), '},',
    c.ln('11', `  `),c.t(`timers`),`: {`,
    c.ln('12', `    `),c.f(`date`),`() {`,
    c.ln('13', `      `),c.al(`return`),` (`,c.vr(`clock`),`.`,c.t(`int`),` = `,c.f(`setInterval`),`(() `,c.al(`=>`),` {`,
    c.ln('14', `        `),c.al(`return`),c.vr(` clock`),`.`,c.f(`setHas`),`([`,c.al(`new `),c.f(`Date`),`().`,c.f(`toLocaleTimeString`),`()]);`,
    c.ln('15', `      `),`}, `,c.al(`1000`),`));`,
    c.ln('16', `    `),`}`,
    c.ln('17', `  `),`}`,
    c.ln('18'),`}`
  ]),
  c.p("To see this in action, go back and click on the clock from the last example. Or continue on to learn about componants rendered from functions."),
  c.buttonRow([
    c.link({ href: "#clock", text: "Clock Example" }),
    c.link({ href: "#functions", text: "Function Comps." })
  ])
];
