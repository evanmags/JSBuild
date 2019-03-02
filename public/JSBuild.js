// the only truely global variable in JSBuild is this array,
// which will hold a reference of every element rendered to the page
let elements = [];

// quick reimplementation of React.createElement(e, p, c) for jsx use without React loaded...
// does not handle functions from jsx well (if at all in some cases)
// need to change the Babel pragma for jsx if you want to use this
const createElement = (element, props, children) => {
  //check to see if element is defined as a function
  if (typeof element === "function") {
    props = {
      ...props,
      children: [children] || ""
    };
    //return the function
    return element(props);
  } else {
    return (obj = {
      [element]: props || {},
      has: [children]
    });
  }
};

// constructor object that is applied to all non-text-only componants
const Component = {
  // called on 'has' change
  // can also be called at will with other functions
  update() {
    // removed element from 'elements' array
    if (elements.includes(this)) {
      elements = elements.filter(ele => {
        return ele.DOMelement !== this.DOMelement;
      });
    }

    // locates the "this" aka the element to replace
    const replace = this.DOMelement;
    // grabs the parent element
    const parent = replace.parentElement;

    // replaces self
    parent.replaceChild(build(this), replace);

    // checks for styles to apply
    if (this.style) {
      styleThis(this);
    }
  },

  //getter function
  getHas() {
    return this.has;
  },

  //setter function
  setHas(val) {
    //clears intervals of all children (as they are about to be replaced)
    this.has.forEach(e => {
      if (e.int) {
        clearInterval(e.int);
        e.int = false;
      }
    });

    // clears own timer if running
    if (this.int) {
      clearInterval(this.int);
      this.int = false;
    }

    // sets value and forces update
    this.has = val;
    this.update();
  }
};

const build = l => {
  // split element from class and id
  let d;
  // create element
  if (typeof l === "string") {
    return (d = document.createTextNode(l));
  } else if (typeof l === "object") {
    Object.assign(l, Component);

    for (var tag in l) {
      //create element
      d = document.createElement(tag);

      l.DOMelement = d;

      // loop through attribute object
      for (var a in l[tag]) {
        d[a] = l[tag][a];
      }

      break;
    }

    elements = elements.filter(ele => {
      return ele.DOMelement !== d;
    });

    elements.push(l);

    //add child elements
    if (l.has) {
      l.has.forEach(i => {
        if (typeof i === "string") {
          d.appendChild(document.createTextNode(i));
        } else if (typeof i === "object") {
          render(i, d);
        }
      });
    }

    // add events
    for (let key in l.events) {
      d.addEventListener(key, l.events[key]);
    }

    // start timers
    if (!l.int) {
      for (let key in l.timers) {
        l.timers[key]();
      }
    }
  }

  return d;
};

const render = (ele, locale) => {
  // locates parent and places element inside
  locale.appendChild(
    //build element
    build(ele)
  );
};

// takes in an array of objects and sorts by key
const sortObjs = arr => {
  return arr.sort((a, b) => {
    return Object.keys(a)[0] > Object.keys(b)[0] ? 1 : -1;
  });
};

//this is the main styling fucntion.
//pass in your styles object and it will create a stylesheet and append it to the page
const style = obj => {
  //create a blank style tag
  const styleEle = document.createElement("style");
  styleEle.id = "JSBuild_styles";
  //add to document
  document.head.appendChild(styleEle);
  // access style sheet
  const styleSheet = styleEle.sheet;

  // loop through array of elements created during the build process
  elements.forEach(e => {
    //requires element tag object to be first key:value in obj
    for (var key in e) {
      // creates selector with preference set as class>id>tag
      let selector;
      if (e[key].classList) {
        selector = `.${e[key].classList.split(" ").join(".")}`;
      } else if (e[key].id) {
        selector = `#${e[key].id}`;
      } else {
        selector = `${key}`;
      }

      e.CSSselector = selector;

      //define how to add selectors to the style object
      if (obj[selector]) {
        // if the selector exists, add to it
        for (var style in e.style) {
          obj[selector][style] = e.style[style];
        }
      } else {
        // otherwise create it and append the entire component style object to it
        obj[selector] = e.style;
      }
      //end loop after first instance (hence 'tag first' requirement)
      break;
    }
  });

  //organize styles for better readability of styleSheet
  //unnecessary IF correct specificity is used in construction
  //create blank arrays for sorting
  let classRules = [];
  let idRules = [];
  let tagRules = [];
  let rules = [];

  for (var k in obj) {
    if (k === "*") {
      rules.push({ [k]: obj[k] });
    } else if (k[0] === ".") {
      classRules.push({ [k]: obj[k] });
    } else if (k[0] === "#") {
      idRules.push({ [k]: obj[k] });
    } else {
      tagRules.push({ [k]: obj[k] });
    }
  }

  // ordered from general => specific (*>[tag]>.>#)
  rules.push(
    ...sortObjs(tagRules),
    ...sortObjs(classRules),
    ...sortObjs(idRules)
  );

  obj = {};

  rules.forEach(o => {
    obj[Object.keys(o)[0]] = o[Object.keys(o)[0]];
  });

  //loop through expanded styles object and add new styles to the styleSheet
  for (let key in obj) {
    //create base string in correct scope
    ruleStr = ``;

    //loop through and append each rule as string to base rule string
    for (let rule in obj[key]) {
      ruleStr += `${rule.replace("_", "-")}: ${String(obj[key][rule]).replace(
        "_",
        "-"
      )};\n`;
    }

    //insert selectors with rules to the end of the sheet.
    styleSheet.insertRule(
      `${key} { ${ruleStr} }\n`,
      styleSheet.cssRules.length
    );
  }
};

const styleThis = element => {
  if (typeof element === "string") {
    return;
  }

  const styleSheet = document.querySelector("#JSBuild_styles").sheet;
  let selector,
    keys = [];

  if (!element.CSSselector) {
    for (var key in element) {
      if (element[key].classList) {
        selector = `.${element[key].classList.split(" ").join(".")}`;
      } else if (element[key].id) {
        selector = `#${element[key].id}`;
      } else {
        selector = `${key}`;
      }
      element.CSSselector = selector;
      break;
    }
  }

  for (var key in styleSheet.cssRules) {
    keys.push(styleSheet.cssRules[key].selectorText);
  }

  if (!keys.includes(element.CSSselector)) {
    //create base string in correct scope
    //loop through and append each rule as string to base rule string
    ruleStr = ``;
    for (let rule in element.style) {
      ruleStr += `${rule.replace("_", "-")}: ${String(
        element.style[rule]
      ).replace("_", "-")}; \n`;
    }

    //insert selectors with rules to the end of the sheet.
    styleSheet.insertRule(
      `${element.CSSselector} { ${ruleStr} } \n`,
      styleSheet.cssRules.length
    );
  }

  if (element.has.length > 0) {
    element.has.forEach(se => {
      if (se && se.style) {
        styleThis(se);
      }
    });
  }
};

const router = {
  get(path, callback) {
    this.paths[`${path.replace(/[#/]/, "")}`] = callback;
  },
  paths: {},
  run() {
    window.location.hash =
      window.location.pathname !== `/`
        ? window.location.pathname.replace(`/`, "#")
        : "#home";

    window.onhashchange = function() {
      const p = window.location.hash.replace(/[#/]/, "");
      window.scrollTo(0, 0);
      if (router.paths[p]) {
        window.history.replaceState({}, p, `/${p}`);
        return router.paths[p]();
      }
      window.history.replaceState({}, p, `/home`);
      return router.paths.home();
    };

    window.onpopstate = function() {
      const p = window.location.pathname.replace(/[#/]/, "");
      window.scrollTo(0, 0);
      if (router.paths[p]) {
        return router.paths[p]();
      }
      return router.paths.home();
    };
  }
};
