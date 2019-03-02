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
//   },
//   ---applied to elemetn at build time---
//   CSSselector: String of most specific attribute,
//   DOMelement: this element in the dom,
//   Update(){
//     function allowing for auto update of elements
//   },
//   getHas(): {
//     returns has array
//   }
//   setHas(): {
//     updates has array
//     invokes Update()
//   }
// }

import { colors } from "../exports.js";

export const link = (props) => {
  return {
    a: {
      id: "link",
      href: props.href || '#'
    },
    has: [props.text || "click here!"],
    style: {
      color: colors.black,
      border: `1px solid`,
      border_radius: "3px",
      text_decoration: "none",
      transition: "all .1s",
      box_shadow: "2px 3px 0 0",
      float: "right",
      padding: "8px 15px",
      margin: "10px 50px 20px"
    },
    events: {
      mouseenter: e => {
        e.target.style.color = "#232323";
      },
      mouseleave: e => {
        e.target.style.color = colors.black;
      },
      mousedown: e => {
        e.preventDefault();
        e.target.style.transform = "translate(1px,1px)";
        e.target.style.boxShadow = "1px 2px 0 0";
      },
      mouseup: e => {
        e.preventDefault();
        e.target.style.transform = "translate(0)";
        e.target.style.boxShadow = "2px 3px 0 0";
      }
    }
  };
};

export const menuButton = ({ ...props }) => {
  return {
    a: {
      id: "menuButton",
      classList: props.class || "",
      href: props.href
    },
    has: [props.name],
    style: {
      color: colors.black,
      flex: "1 1 50px",
      max_width: "100px",
      display: "flex",
      justify_content: "center",
      align_items: "center",
      text_transform: "uppercase",
      text_decoration: "none",
      transition: "all .1s"
    },
    events: {
      mouseenter: e => {
        e.target.classList.toggle("hover");
      },
      mouseleave: e => {
        e.target.classList.toggle("hover");
      }
    }
  };
};
export const home = menuButton({
  name: "home",
  class: "active",
  href: "#home"
});

export const about = menuButton({ name: "about", href: "#about" });
export const contact = menuButton({ name: "contact", href: "#contact" });

export const buttonRow = props => {
  return {
    div: {
      classList: "buttonRow"
    },
    has: [...props],
    style: {
      width: "100%",
      display: "flex",
      justify_content: "space-between"
    }
  };
};

export const header = props => {
  return {
    h1: {
      classList: "header"
    },
    has: [props]
  };
};

export const sectionHeader = props => {
  return {
    h2: {
      classList: "header"
    },
    has: [props]
  };
};

export const subhead = props => {
  return {
    h5: {
      classList: "subhead"
    },
    has: [props],
    style: {
      margin_bottom: "15px"
    }
  };
};

export const p = props => {
  return {
    p: {},
    has: [props],
    style: {
      margin_bottom: "15px"
    }
  };
};

export const code = props => {
  return {
    p: {
      classList: "code"
    },
    has: [props],
    style: {
      white_space: "pre-wrap",
      font_family: "Courier",
      font_size: "14px",
      margin: "15px 20px"
    }
  };
};

export const codeBlock = props => {
  return {
    div: {
      classList: "codeblock"
    },
    has: [code(props)],
    style: {
      margin: "15px 0"
    }
  };
};

export const clock = {
  p: {
    id: "clock"
  },
  has: [new Date().toLocaleTimeString()],
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
};

export const banner = {
  div: {
    id: "banner"
  },
  has: [header("JSBuild"), subhead("Websites built on JS Objects"), clock],
  style: {
    margin: "3vh auto 0",
    text_align: "center"
  }
};

export const variable = "From Variable";

export const func = () => {
  return {
    button: {
      id: "sampleButton"
    },
    has: ["From Function"],
    style: {
      text_decoration: "none",
      padding: "10px",
      border: "none"
    }
  };
};

export const sample = {
  h1: {
    id: "sample",
    classList: "red underline"
  },
  has: ["Sample heading"],
  style: {}
};

export const sampleBlock = {
  div: {
    id: "sampleBlock"
  },
  has: [sample, { hr: {} }, variable, func()],
  style: {
    display: "flex",
    flex_direction: "column",
    align_items: "center"
  }
};

export const menu = {
  div: {
    id: "menu"
  },
  has: [home, about, contact],
  style: {
    position: "fixed",
    top: "0",
    height: "50px",
    width: "100vw",
    padding: "0 10vw",
    display: "flex",
    color: "#333",
    box_shadow: `3px 0 3px ${colors.red}`,
    background: "#f1e9d1"
  }
};

export const container = {
  div: {
    id: "blue",
    classList: "green"
  },
  has: [],
  style: {
    width: "82vw",
    max_width: "1100px",
    margin: "1vh auto",
    padding: "15px 30px",
    box_shadow: `1px 1px 8px 0 ${colors.red}`,
    transition: `transform .2s, box-shadow .2s`,
    overflow: "hidden"
  }
};
