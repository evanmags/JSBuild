import { c } from "../exports.js";

export const routerContent = [
  c.sectionHeader("Routing"),
  c.subhead("Internal Links"),
  c.p("Our router relies on one thing. The use of hashlinks fro internal routing. Traffic will still be routed to the correct location using normal relative paths hoever, this will cause the request to hit the server and then redirect. Whereas hash links will keep all traffic that does not require the server to stay internal to the application."),
  c.p('A generic link component would look like this:'),
  c.codeBlock([
    c.ln('1'), c.d(`const `), c.vr(`link`), ` = {`,
    c.ln('2', '  '), c.t('a'), `: {`,
    c.ln('3', '    '), c.t(`classList`),`: `, c.va(`'link'`),
    c.ln('4', '    '), c.t(`href`),`: `, c.va(`"#home"`),
    c.ln('5', '  '), `}`,
    c.ln('6'), `};`
  ]),
  c.subhead("Backend set-up"),
  c.p('Using Node.js and Express for your basic backend should look like this:'),
  c.codeBlock([
    c.ln('1'), c.d('const '), c.vr('express'), ' = ', c.f('require'), '(', c.va('"express"'), '),',
    c.ln('2', '      '), c.vr('app'), ' = ', c.f('express'), '();',
    c.ln('3'),
    c.ln('4'), c.co('// if you use templating'),
    c.ln('5'), c.vr('app'), '.', c.f('set'), '(', c.va('"view engine"'), ', ', c.va('"ejs"'),');',
    c.ln('6'), c.co('// your curly app is served from the public directory'),
    c.ln('7'), c.vr('app'), '.', c.f('use'), '(', c.vr('express'), '.', c.f('static'),'(', c.al('__dirname'), ' + ', c.va('"/public"'),'));',
    c.ln('8'), ,
    c.ln('9'), c.co('// send all your traffic to the same endpoint'),
    c.ln('10'), c.vr('app'), '.', c.f('get'), '(', c.va('"*"'), ', (', c.vr('req'), ',', c.vr('res'),') ', c.al('=>'), '{',
    c.ln('11', '  '), c.vr('res'), '.', c.f('render'), '(', c.va('"index"'), ');',
    c.ln('12'), '});',
    c.ln('13'),
    c.ln('14'), c.vr('app'), '.', c.f('listen'), '(', c.va('3000'), ', () ', c.al('=> '), '{',
    c.ln('15', '  '), c.vr('console'), '.', c.f('log'), '(', c.va('"Now serving your Curly.js app!"'), ');',
    c.ln('16'), '});',
    c.ln('17')
  ]),
  c.p('Now you are completely done with your Express and Node setup!'),
  c.subhead("Frontend set-up"),
  c.p("Just like with backend routing, frontend routing is telling your app what to display, and when to display it. Curly uses a frontend router to allow your app to build only what is necessary for any particular display."),
  c.p('The router object controls the what, where, and when of your application with minimal set up.'),
  c.p('To get the router started we must call the run() method then pass in our root route as the first parameter and our default route as our second parameter:'),
  c.codeBlock([
    c.ln('1'), c.vr('curly'), '.', c.t('router'), '.', c.f('run'), '(', c.va('"/"'), ', ', c.va('"home"'), ');',
    c.ln('2')
  ]),
  c.p('Next we need to set up our route. Curly routes rely on setting or changing the "has" array of elements on the page, with the goal of never touching the has of the app after the initial render.'),
  c.p('Luckily curly components come with several helper functions to make changing views as easy as possible. The example below is the router setup for our home page:'),
  c.codeBlock([
    c.ln('1'), c.vr('curly'), '.', c.t('router'), '.', c.f('get'), '(', c.va('"home"'), ', ()', c.al(' => '), '{',
    c.ln('2', '  '), c.vr('main'), '.', c.f('removeHas'), '(', c.vr('sidebar'), ');',
    c.ln('3', '  '), c.vr('container'), '.', c.f('setHas'), '(', c.vr('homeContent'), ');',
    c.ln('4'), '});',
    c.ln('5')
  ]),
  c.p('As you can see all we are doing is manipluating what is in each component as any given location within the app.'),
  c.p('The component methods .setHas() and .removeHas(), along with .addHas(), allow us to change only the smallest piece of the has array necessary.'),
  c.codeBlock([
    c.ln('1'), c.co('// Replace the entire has array'),
    c.ln('2', '  '), c.vr('component'), '.', c.f('setHas'), '(', c.vr('array'), ');',
    c.ln('3'),
    c.ln('4'), c.co('// Check for a component and remove if present'),
    c.ln('5', '  '), c.vr('component'), '.', c.f('removeHas'), '(', c.vr('component'), ');',
    c.ln('6'),
    c.ln('7'), c.co('// Check for a component and, if not present,'),
    c.ln('8'), c.co('// add at array index or default to last index'),
    c.ln('9', '  '), c.vr('component'), '.', c.f('addHas'), '(', c.vr('component'), ', ', c.vr('index'), ');',
    c.ln('10')
  ]),
  c.p('We will look at setting up more complex applications in the next section.'),
  c.buttonRow([
    c.link({ href: "#global", text: "Global Styles" }),
    c.link({ href: "#paths", text: "More Routing" })
  ])
];