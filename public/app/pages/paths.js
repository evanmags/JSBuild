import { c } from "../exports.js";

export const pathsContent = [
  c.sectionHeader("Setting Paths"),
  c.subhead("Routing for large applications"),
  c.p("With smaller applications it is easier to use the curly.router.get() method to set your routes but with large applications with 10's of views this method can get tedious and building custom solutions to changing active tabs, selected menu items, or other customized solutions can get difficult and cluttered. Especially when several routes do the exact same thing but with minor variations."),
  c.p("In cases like this you are better off building a 'paths' or 'routes' object and then, just before running your router, manually pointing the router at it like so:"),
  c.codeBlock([
    c.ln('1'), c.vr('curly'), '.', c.vr('router'), '.', c.t('paths'), ' = ', c.va('paths_obj'), ';',
    c.ln('2'), c.vr('curly'), '.', c.t('router'), '.', c.f('run'), '(', c.va('"/"'), ', ', c.va('"home"'), ');',
  ]),
  c.p('Now lets build our paths object. This process is as simple as it sounds. Take a look at the example below of our same home route but within the context of a paths object.'),
  c.codeBlock([
    c.ln('1'), c.d('const '), c.vr('paths_obj'), ' = {', 
    c.ln('2', '  '), c.t('home'), ': ()', c.al(' => '), '{',
    c.ln('2', '    '), c.vr('main'), '.', c.f('removeHas'), '(', c.vr('sidebar'), ');',
    c.ln('3', '    '), c.vr('container'), '.', c.f('setHas'), '(', c.vr('homeContent'), ');',
    c.ln('4', '  '), '}',
    c.ln('5'), '};',
  ]),
  c.p('Now your app is ready for production! external traffic will be routed directly to the page they request and internal traffic will never hit the server.'),
  c.buttonRow([
    c.link({ href: "#Home", text: "Home" }),
    c.link({ href: "#about", text: "Learn More!" })
  ])
];