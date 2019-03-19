import { c } from "../exports.js";

export const globalContent = [
  c.sectionHeader("Global Styles Object"),
  c.subhead("styling for resets and utilities"),
  c.p("Now that we have seen how individual components can style themselves we should look at the global styles object."),
  c.p("The global styles object contains a similar structure to the component style object but allows you to remove your styling from the element itself but still use all of the features that javascript has to offer."),
  c.p("The syntax should look very similar to the examples from the componant styling sections."),
  c.codeBlock([
    c.ln('1'), c.d('const '), c.vr('CSS'), ' = {',
    c.ln('2', '  '), c.t('"*"'), ': {',
    c.ln('3', '    '), c.t('margin'), ': ', c.va('0'), ",",
    c.ln('4', '    '), c.t('padding'), ': ', c.va('0'), ",",
    c.ln('5', '    '), c.t('box_sizing'), ': ', c.va('border-box'), ",",
    c.ln('6', '  '), '}',
    c.ln('7'), '}',
    c.ln('8')
  ]),
  c.p('As you can see the major difference in the global object is that you will need to define all selectors and psudo selectors. Other than that your styling will look exactly the same.'),
  c.p('Lets continue on and learn about the router.'),
  c.buttonRow([
    c.link({ href: "#psudo", text: "Psudo Styles" }),
    c.link({ href: "#router", text: "Routing" })
  ])
];