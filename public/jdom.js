// general element structure:
// const element = {
//   type: {
//     attribute: String
//   },
//   has: [...children],
//   style: {
//     CSSProperty: Value as String,
//     /** '-' becomes '_' in property **/
//     /** '-' can be either '_' or '-' in value string **/
//   },
//   events: {
//     event: handler => {},
//     -OR-
//     event: handler(),
//   }
// }

//quick reimplementation of React.createElement(e, p, c) for jsx use without React loaded...
//does not handle functions from jsx well (if at all in some cases)
const React = {
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
  }
};

const elements = [];
const build = l => {
  // split element from class and id
  let d, attrs;

  // create element
  if (typeof l === "string") {
    d = document.createTextNode(l);
  } else if (typeof l === "object") {
    Object.assign(l, Component);

    elements.push(l);

    for (var tag in l) {
      d = document.createElement(tag);

      // loop through attribute object
      for (var a in l[tag]) {
        d[a] = l[tag][a];
      }

      break;
    }

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

  const sortObjs = arr => {
    return arr.sort((a, b) => {
      return Object.keys(a)[0] > Object.keys(b)[0] ? 1 : -1;
    });
  };

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
  const styleSheet = document.querySelector("#JSBuild_styles").sheet;
  let selector,
    keys = [];

  if(typeof element === 'string'){
    return;
  }

  for (var key in element) {
    if (element[key].classList) {
      selector = `.${element[key].classList.split(" ").join(".")}`;
    } else if (element[key].id) {
      selector = `#${element[key].id}`;
    } else {
      selector = `${key}`;
    }
    break;
  }

  for (var key in styleSheet.cssRules) {
    keys.push(styleSheet.cssRules[key].selectorText);
  }
  
  if(!keys.includes(selector)) {
    //create base string in correct scope
    //loop through and append each rule as string to base rule string
    ruleStr = ``;
    for (let rule in element.style) {
      ruleStr += `${rule.replace("_", "-")}: ${String(element.style[rule]).replace(
        "_",
        "-"
      )}; \n`;
    }

    //insert selectors with rules to the end of the sheet.
    styleSheet.insertRule(
      `${selector} { ${ruleStr} } \n`,
      styleSheet.cssRules.length
    );
  }
  
  if(element.has.length > 0){
    element.has.forEach(se => {
      if(se.style){
        styleThis(se)
      }
    })
  }
};

const Component = {
  update() {
    if (elements.includes(this)) {
      elements.splice(elements.indexOf(this), 1);
    }

    const key = Object.keys(this)[0];
    const attrs = this[key];
    let selector;

    if (attrs.id) {
      selector = `#${attrs.id}`;
    } else if (attrs.classList) {
      selector = `${key}.${attrs.classList.split(" ").join(".")}`;
    }

    const replace = document.querySelector(selector);
    const parent = replace.parentElement;

    parent.replaceChild(build(this), replace);
    if (this.style) {
      styleThis(this);
    }
    elements.push(this);
  },
  getHas() {
    return this.has;
  },
  setHas(val) {
    this.has.forEach(e => {
      if (e.int) {
        clearInterval(e.int);
        e.int = false;
      }
    });
    this.has = val;
    this.update();
  }
};
