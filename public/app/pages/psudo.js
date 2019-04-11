import { c } from "../exports.js";

export const psudoContent = [
    c.sectionHeader("Styling with psudo"),
    c.subhead(".element:nth-of-type(2) > .text:not(h1), and everything in between"),
    c.p("Now that we see how general styles are applied to components, lets take a look at yet another special object. This time, within the styles object."),
    c.p(`The 'psudo' object, inside of the styles object, is where you can place all of your psudo selectors, psudo elements, and even utility classes. Lets examine the example below.`),
    c.codeBlock([
      c.ln('1'),c.d(`const `),c.f(`p`),` = `,c.vr(`props`),c.al(` => `),`{`,
      c.ln('2', `  `),c.al(`return`),` {`,
      c.ln('3', '    '),c.t(`p`),`: {},`,
      c.ln('4', `    `),c.t(`has`),`: [`,c.vr(`props`),`],`,
      c.ln('5', `    `),c.t(`style`),`: {`,
      c.ln('6', `      `),c.t(`margin_bottom`),`: `,c.va(`"15px"`),
      c.ln('7', `      `),c.t(`psudo`),`: {`,
      c.ln('8', `        `), c.t(`"::after"`), ': {',
      c.ln('9', `          `), c.t(`"background"`), ': ', c.va('#bada55'),
      c.ln('10', `          `), c.t(`"height"`), ': ', c.va('4px'),
      c.ln('11', `          `), c.t(`"width"`), ': ', c.va('10px'),
      c.ln('12', `        `), '}',
      c.ln('13', `      `), '}',
      c.ln('14', `    `),`}`,
      c.ln('15',`  `),`};`,
      c.ln('16'),`};`
    ]),
    c.p("You may notice that the psudo object has one extra layer to it. This is where you will need to define the psudo selector, class, or psudo element to append to the generated css selector that curly creates for you. For each selector you then create a styles object and thats it! Utility classes such as '.closed' or '.open' are a breeze to implement."),
    c.buttonRow([
      c.link({ href: "#style", text: "Back" }),
      c.link({ href: "#global", text: "Next" })
    ])
  ];