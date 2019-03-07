const curly = {
  // the only truely global variable in Curly.js is this array,
  // which will hold a reference of every element rendered to the page
  elements: [],

  // quick reimplementation of React.createElement(e, p, c) for jsx use without React loaded...
  // does not handle functions from jsx well (if at all in some cases)
  // need to change the Babel pragma for jsx if you want to use this
  createElement(element, props, children) {
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
  },

  //*** Helper Functions begin ***//

  createDOMSelector(obj) {
    const key = Object.keys(obj)[0];
    const attrs = obj[key];

    if (attrs.id) {
      return `#${attrs.id}`;
    } else if (attrs.classList) {
      return `${key}.${attrs.classList.split(" ").join(".")}`;
    }
  },

  resetInterval(ele) {
    //check for a set interval
    if (ele.int) {
      // clear it
      clearInterval(ele.int);
      // open it for a new interval
      ele.int = false;
    }
  },

  clearAllIntervals(ele) {
    // loop through has object
    ele.has.forEach(e => {
      curly.resetInterval(e);
    });
    //clear own timers
    curly.resetInterval(ele);
  },

  // takes in an array of objects and sorts by key
  sortObjs(arr) {
    return arr.sort((a, b) => {
      return Object.keys(a)[0] > Object.keys(b)[0] ? 1 : -1;
    });
  },

  //takes a stylesheet, a selector, and a string of rules
  appendCSSRules(sheet, selector, ruleStr) {
    //insert selectors with rules to the end of the sheet.
    sheet.insertRule(`${selector} { ${ruleStr} } \n`, sheet.cssRules.length);
  },

  createSelector(element) {
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
  },

  // takes a css style object and creates a string
  // with selector and rules to append to the stylesheet
  createRuleString(obj) {
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
  },

  //*** Helper Functions end ***//

  //*** Production objects and functions begin ***//

  // constructor object that is applied to all non-text-only componants
  Component: {
    // called on 'has' change
    // can also be called at will with other functions
    update() {
      // removed element from 'elements' array
      if (curly.elements.includes(this)) {
        curly.elements = curly.elements.filter(ele => {
          return ele.DOMelement !== this.DOMelement;
        });
      }

      // locates the "this" aka the element to replace
      const replace =
        this.DOMelement ||
        document.querySelector(curly.createDOMSelector(this));

      // replaces self
      replace.replaceWith(curly.build(this));

      // checks for styles to apply
      if (!this.CSSselector && this.style) {
        curly.style(this);
      }
    },

    //getter function for has array
    getHas() {
      return this.has;
    },

    //setter function for has array
    setHas(val) {
      curly.clearAllIntervals(this);
      // sets value and forces update
      this.has = val;
      this.update();
    }
  },

  //  physical construction function creates a DOM element
  build(l) {
    // split element from class and id
    let d;
    // create element
    if (typeof l === "string") {
      return (d = document.createTextNode(l));
    } else if (typeof l === "object") {
      Object.assign(l, curly.Component);

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

      curly.elements = curly.elements.filter(ele => {
        return ele.DOMelement !== d;
      });

      curly.elements.push(l);

      //add child elements
      if (l.has) {
        [...l.has].forEach(i => {
          if (typeof i === "string") {
            d.appendChild(document.createTextNode(i));
          } else if (typeof i === "object") {
            curly.render(i, d);
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
  },

  //  styles and places element
  render(ele, locale, styles = {}) {
    curly.style(ele, styles);
    // locates parent and places element inside
    locale.appendChild(
      //build element
      curly.build(ele)
    );
  },

  //*** Styling function

  //this is the main styling fucntion.
  //pass in your styles object and it will create a stylesheet and append it to the page
  style(element, sheet) {
    // bump out if no style object is in element
    if (typeof element === "string" || !element.style) {
      return;
    }

    // create variable in scope for stylesheet
    let styleSheet,
      keys = [];

    //check if there is already a stylesheet
    if (!document.querySelector("#CurlyJS_styles")) {
      //create a blank style tag
      const styleEle = document.createElement("style");
      styleEle.id = "CurlyJS_styles";

      //add to document
      document.head.appendChild(styleEle);

      // access style sheet
      styleSheet = styleEle.sheet;

      //add rules from style object
      for (var selector in sheet) {
        let ruleStr = curly.createRuleString(sheet[selector]);
        curly.appendCSSRules(styleSheet, selector, ruleStr);
      }
    } else {
      // if it already exists fins it and assign it
      styleSheet = document.querySelector("#CurlyJS_styles").sheet;
    }

    // if selector was not already created for this element, make one
    if (!element.CSSselector) {
      element.CSSselector = curly.createSelector(element);
    }

    // push all selectors into an array
    for (var key in styleSheet.cssRules) {
      keys.push(styleSheet.cssRules[key].selectorText);
    }

    // if selector is not already in style sheet proceed.
    if (!keys.includes(element.CSSselector)) {
      // create rule string
      let ruleStr = curly.createRuleString(element.style);
      // append to sheet
      curly.appendCSSRules(styleSheet, element.CSSselector, ruleStr);

      if (element.style.psudo) {
        // loop through psudo elements if they are present
        for (var psudo in element.style.psudo) {
          let ruleStr = curly.createRuleString(element.style.psudo[psudo]);
          curly.appendCSSRules(
            styleSheet,
            element.CSSselector + psudo,
            ruleStr
          );
        }
      }
    }
  },

  //*** routing object

  // router for internal navigation
  router: {
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
        if (curly.router.paths[p]) {
          window.history.replaceState({}, p, `/${p}`);
          return curly.router.paths[p]();
        }
      };

      window.onpopstate = function() {
        const p = window.location.pathname.replace(/[#/]/, "");
        window.scrollTo(0, 0);
        if (curly.router.paths[p]) {
          return curly.router.paths[p]();
        }
        return curly.router.paths.home();
      };
    }
  },

  //*** JSON functions for prep and parse

  // JSON prep functions for development,
  // build your app with js objects then transpile to json for shiping.
  functionsToJSON(obj) {
    for (var key in obj) {
      if (typeof obj[key] === "function") {
        obj[key] = `${obj[key]}`;
      }
    }
    return obj;
  },

  transpileToJSON(obj) {
    [obj, obj.events, obj.timers].forEach(i => {
      if (i) {
        return curly.functionsToJSON(i);
      }
    });
    if (obj.has) {
      obj.has.forEach(has => {
        curly.functionsToJSON(has);
        if (has.has) {
          curly.transpileToJSON(has);
        }
      });
    } else {
      for (var key in obj) {
        curly.transpileToJSON(obj[key]);
      }
    }
    return JSON.stringify(obj);
  },

  // JSON processing functions for production,
  // call your app with AJAX to get JSON then transpile to JS objects.

  functionsFromJSON(obj) {
    for (var key in obj) {
      if (typeof obj[key] === "string" && obj[key].includes("function")) {
        obj[key] = eval(`(${obj[key].replace("\n", "")})`);
      }
    }
    return obj;
  },

  transpileFromJSON(obj) {
    [obj, obj.events, obj.timers].forEach(i => {
      if (i) {
        return curly.functionsFromJSON(i);
      }
    });
    if (obj.has) {
      obj.has.forEach(has => {
        curly.functionsFromJSON(has);
        if (has.has) {
          curly.transpileFromJSON(has);
        }
      });
    } else {
      for (var key in obj) {
        curly.transpileFromJSON(obj[key]);
      }
    }
    Object.assign(obj, curly.Component);
    return obj;
  }
};
