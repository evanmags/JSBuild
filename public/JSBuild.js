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
      style(this);
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
      [...l.has].forEach(i => {
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

const render = (ele, locale, sheet = {}) => {
  style(ele, sheet);
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

//takes a stylesheet, a selector, and a string of rules
const appendCSSRules = (sheet, selector, ruleStr) => {
  //insert selectors with rules to the end of the sheet.
  sheet.insertRule(`${selector} { ${ruleStr} } \n`, sheet.cssRules.length);
};

const createSelector = element => {
  //requires element tag object to be first key:value in obj
  for (var key in element) {
    // creates selector with preference set as class>id>tag
    if (element[key].classList) {
      return (selector = `${key}.${element[key].classList
        .split(" ")
        .join(".")}`);
    } else if (element[key].id) {
      return (selector = `${key}#${element[key].id}`);
    } else {
      return (selector = `${key}`);
    }
  }
};

// takes a css style object and creates a string
// with selector and rules to append to the stylesheet
const createRuleString = obj => {
  // create base string in correct scope
  ruleStr = ``;

  // loop through and append each rule as string to base rule string
  for (let rule in obj) {
    ruleStr += `${rule.replace("_", "-")}: ${String(obj[rule]).replace(
      "_",
      "-"
    )};\n`;
  }

  return ruleStr;
};

//this is the main styling fucntion.
//pass in your styles object and it will create a stylesheet and append it to the page

const style = (element, sheet) => {
  if (typeof element === "string" || !element.style) {
    return;
  }

  let styleSheet;
  //check if there is already a stylesheet
  if (!document.querySelector("#JSBuild_styles")) {
    //create a blank style tag
    const styleEle = document.createElement("style");
    styleEle.id = "JSBuild_styles";

    //add to document
    document.head.appendChild(styleEle);

    // access style sheet
    styleSheet = styleEle.sheet;
    
    //add rules from style object
    for (var selector in sheet) {
      let ruleStr = createRuleString(sheet[selector]);
      appendCSSRules(styleSheet, selector, ruleStr);
    }
  } else {
    styleSheet = document.querySelector("#JSBuild_styles").sheet;
  }
  
  let keys = [];

  if (!element.CSSselector) {
    element.CSSselector = createSelector(element);
  }

  for (var key in styleSheet.cssRules) {
    keys.push(styleSheet.cssRules[key].selectorText);
  }

  if (!keys.includes(element.CSSselector)) {
    // if (!styles[element.CSSselector]) {
    ruleStr = createRuleString(element.style);
    appendCSSRules(styleSheet, element.CSSselector, ruleStr);

    if (element.style.psudo) {
      for (var psudo in element.style.psudo) {
        let ruleStr = createRuleString(element.style.psudo[psudo]);
        appendCSSRules(styleSheet, (element.CSSselector + psudo), ruleStr)
      }
    }
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
