// general element structure:
// export const element = {
//   type: {
//     attribute: String
//   },
//   has: [...children],
//   style: {
//     CSSProperty: Value as String,
//              ß/** '-' becomes '_' in property **/
//     /** '-' can be either '_' or '-' in value string **/
//   },
//   events: {
//     event: handler => {},
//     -OR-
//     event: handler(),
//   },
//   timers: {
//     func() {
//       return setInterval
//       -OR-
//       return setTimeout
//     }
//   }
//   ---applied to element at build time---
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

// general element function structure:
// function element()
// -OR-
// const element = () => {
//
//   /** these finctions can do almost anything to
//       modify the output object, however functions
//       MUST always return a buildable object **/
//
//   doSomething()
//   doOtherThing()
//
//   return {
//     type: {
//       id: `id-${key}`
//       /** for the sake of specificity
//           all functional componants should
//           utilize a key in their ID attribute **/
//     }
//   }
// }

import { colors } from "../exports.js";

export const header = props => {
  return {
    h1: {
      classList: "header"
    },
    has: props,
    style: {
      font_size: "2.75rem"
    }
  };
};

export const sectionHeader = props => {
  return {
    h2: {
      classList: "header"
    },
    has: [props],
    style: {
      justify_content: "center",
      align_items: "flex-end",
      font_size: "1.75rem"
    }
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
  };
};

export const link = props => {
  return {
    a: {
      id: "link",
      href: props.href || "#"
    },
    has: [props.text || "click here!"],
    style: {
      background: "transparent",
      font_size: "13px",
      border: `1px solid`,
      border_radius: "3px",
      transition: "all .1s",
      float: "right",
      box_shadow: "2px 3px 0 0",
      padding: "6px 12px",
      margin: "10px 50px 20px",
      psudo: {
        ":hover": {
          color: "#232323",
          background: colors.dark_yellow
        },
        ":active": {
          transform: "translate(1px,1px)",
          box_shadow: "1px 2px 0 0"
        }
      }
    }
  };
};

export const menuButton = ({ ...props }) => {
  return {
    a: {
      id: `menuButton_${props.name}`,
      classList: props.class || "menuButton",
      href: props.href
    },
    has: [props.name],
    style: {
      color: colors.black,
      font_size: "13px",
      flex: "1 1 50px",
      max_width: "100px",
      display: "flex",
      justify_content: "center",
      align_items: "center",
      text_transform: "uppercase",
      text_decoration: "none",
      border: "0px solid transparent",
      transition: "all .1s",
      psudo: {
        ":hover": {
          color: "#d88282",
          border_top: "none",
          border_bottom: `4px solid ${colors.dark_red}`,
          padding_top: `4px`
        },
        ".active": {
          color: "#d88282",
          background: colors.red,
          // font_weight: "bold",
          padding_bottom: `4px`,
          border_top: `4px solid ${colors.dark_red}`,
          border_bottom: "0px solid transparent",
        },
        ".active:hover": {
          color: "#d88282",
          border_top: "0px solid transparent",
          padding_bottom: `0px`,
          border_bottom: `4px solid ${colors.dark_red}`,
          padding_top: `4px`
        }
      }
    }
  };
};
export const home = menuButton({ name: "home", href: "#home" , class: 'altered'});
export const about = menuButton({ name: "about", href: "#about" });
export const download = menuButton({ name: "download", href: "#download" });
export const contact = menuButton({ name: "contact", href: "#contact" });

export const buttonRow = props => {
  let obj = {
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
  if (props.length === 1) {
    obj.div.classList = "oneButtonRow";
    obj.style.justify_content = "center";
  }
  return obj;
};

export const d = props => {
  return {
    span: {
      classList: "declairation"
    },
    has: [props],
    style: {
      color: colors.code.purple
    }
  };
};

export const vr = props => {
  return {
    span: {
      classList: "variable"
    },
    has: [props],
    style: {
      color: colors.code.orange
    }
  };
};

export const va = props => {
  return {
    span: {
      classList: "value"
    },
    has: [props],
    style: {
      color: colors.code.green
    }
  };
};

export const t = props => {
  return {
    span: {
      classList: "tag"
    },
    has: [props],
    style: {
      color: colors.code.teal
    }
  };
};

export const f = props => {
  return {
    span: {
      classList: "function"
    },
    has: [props],
    style: {
      color: colors.code.blue
    }
  };
};

export const al = props => {
  return {
    span: {
      classList: "alt"
    },
    has: [props],
    style: {
      color: colors.code.red
    }
  };
};

export const ln = (num, props) => {
  return {
    span: {
      classList: "lineNumber"
    },
    has: [
      (num > 1 ? `\n` : ``) + (num < 10 ? ` ` : ``) + `${num}  ` + (props || "")
    ],
    style: {
      color: colors.code.black
    }
  };
};

export const co = props => {
  return {
    span: {
      classList: "comment"
    },
    has: [props],
    style: {
      color: colors.code.grey
    }
  };
};

export const code = props => {
  return {
    pre: {
      classList: "code"
    },
    has: [...props],
    style: {
      color: colors.code.black,
      white_space: "pre-wrap",
      font_family: "Source Code Pro",
      font_size: "12px",
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
      margin: "5px auto 25px",
      max_width: "85%",
      align_self: "center",
      padding: "20px",
      background: colors.trans_red,
      border_radius: "5px",
      border: `1px solid ${colors.red}`,
      box_shadow: `2px 2px 15px ${colors.gold}`,
      psudo: {
        ">.code": {
          margin: "0 20px"
        }
      }
    }
  };
};

export const clock = {
  p: {
    id: "clock"
  },
  has: [new Date().toLocaleTimeString()],
  style: {
    text_align: "center"
  },
  events: {
      click: e => {
        console.log('clicked');
      }
  },
  timers: {
    date() {
      return (clock.int = setInterval(() => {
        console.log("timer fired");
        return clock.setHas([new Date().toLocaleTimeString()]);
      }, 1000));
    }
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
    margin_bottom: "15px",
    display: "flex",
    flex_direction: "column",
    align_items: "center"
  }
};

export const menu = {
  div: {
    id: "menu"
  },
  has: [home, about, download, contact],
  style: {
    position: "fixed",
    top: "0",
    height: "40px",
    width: "100vw",
    padding: "0 10vw",
    display: "flex",
    color: "#333",
    box_shadow: `3px 0 3px ${colors.red}`,
    background: colors.yellow
  },
};

export const openLogo = {
  span: {
    id: "logo"
  },
  has: ["Curly.js"],
  style: {
    display: "inline-flex",
    justify_content: "center",
    align_items: "center",
    width: "0px",
    overflow: "hidden",
    transition: "all .75s cubic-bezier(.3,.7,.36,1.5)"
  },
  timers: {
    logoOpen() {
      return setTimeout(() => {
        openLogo.setStyle({"width": "11rem"});
      }, 270);
    }
  }
};

export const banner = {
  div: {
    id: "banner"
  },
  has: [
    header(["{", openLogo, "}"]),
    subhead("Websites built on JS Objects")
  ],
  style: {
    margin: "5vh auto",
    text_align: "center"
  }
};

export const sidebarItems = props => {
  let arr = [];
  let itemnum = 0;
  let headnum = 0;
  props.forEach(el => {
    if (el.type === "item") {
      itemnum++;
      const item = {
        a: {
          id: `sidebarItem${itemnum}`,
          classList: `sidebarItem`,
          href: el.href
        },
        has: [el.text],
        style: {
          color: "#333",
          text_decoration: "none",
          font_size: "12px",
          margin: "5px 0",
          flex: "0 0 24px",
          display: "flex",
          align_items: "center",
          text_transform: "capitalize",
          padding_left: "12px",
          border_left: "0px solid #d88282",
          background_image: `linear-gradient(to right, ${colors.red} 0px, ${
            colors.red
          } 150px)`,
          background_repeat: "no-repeat",
          background_position: "170px 0px",
          box_shadow: "0 0 0 0 transparent",
          transition: "all .1s, background .1s .08s",
          psudo: {
            ":hover": {
              color: "#d88282",
              border_left: `4px solid #d88282`,
              padding_left: "8px"
            },
            ".viewing": {
              // width: "155px",
              padding_left: "8px",
              background_position: `0px 0px`,
              border_left: `4px solid ${colors.dark_red}`,
              box_shadow: `1px 1px 5px -1px ${colors.dark_red}`,
              transition: "all .1s, box-shadow .1s .08s"
            }
          }
        },
        events: {
          click: e => {
            document.querySelectorAll(".sidebarItem").forEach(li => {
              li.classList.remove("viewing");
            });
            e.target.classList.toggle("viewing");
          }
        }
      };
      arr.push(item);
    } else if (el.type === "head") {
      headnum++;
      const head = {
        h5: {
          id: `sidebarHead${headnum}`,
          classList: `sidebarHead`
        },
        has: [el.text],
        style: {
          color: "#333",
          text_decoration: "none",
          font_size: "13px",
          margin: "10px 0 5px 0",
          flex: "0 0 25px",
          display: "flex",
          align_items: "flex-end",
          text_transform: "capitalize",
          padding_left: "4px",
          border_bottom: "2px solid #d88282"
        }
      };
      arr.push(head);
    }
  });
  return arr;
};

export const sidebar = {
  div: {
    id: "sidebar"
  },
  has: sidebarItems([
    { text: "Components", type: "head" },
    { text: "Building", href: "#about", type: "item" },
    { text: "Dynamic Components", href: "#clock", type: "item" },
    { text: "Event Handling", href: "#events", type: "item" },
    { text: "Function Components", href: "#functions", type: "item" },
    { text: "list Example", href: "#list", type: "item" },
    { text: "Styling", type: "head" },
    { text: "Component styles", href: "#style", type: "item" },
    { text: "psudo styles", href: "#psudo", type: "item" },
    { text: "branding", href: "#style", type: "item" },
    { text: "Routing", type: "head" },
    { text: "Set up", href: "#routing", type: "item" },
    { text: "options", href: "#routing", type: "item" },
    { text: "JSON", type: "head" },
    { text: "Preparing", href: "#routing", type: "item" },
    { text: "Parsing", href: "#routing", type: "item" }
  ]),
  style: {
    position: "sticky",
    top: "130px",
    margin: "0 35px 0 -160px",
    min_width: "160px",
    display: "flex",  
    align_items: "stretch",
    flex_direction: "column"
  },
};

export const container = {
  div: {
    id: "blue",
    classList: "green"
  },
  has: [],
  style: {
    min_width: "400px",
    flex: "1 1 700px",
    max_width: "1000px",
    padding: "15px 50px",
    box_shadow: `1px 1px 8px 0 ${colors.red}`,
    transition: `transform .2s, box-shadow .2s`,
    display: "flex",
    flex_direction: "column",
    overflow: "hidden"
  }
};

export const main = {
  main: {
    id: "main"
  },
  has: [container],
  style: {
    padding: "0 18vw",
    width: "100%",
    flex: "1 1 100%",
    display: "flex",
    justify_content: "center",
    align_items: "flex-start"
  }
};

export const footer = {
  div: {
    id: "footer"
  },
  has: [
    p("{curly.js}"),
    p("Copyright (c) 2019 Evan Magnussen"),
    p("MIT License")
  ],
  style: {
    align_self: "flex-end",
    min_height: "80px",
    width: "100vw",
    padding: "20px 10vw",
    margin_top: "50px",
    display: "flex",
    flex_direction: "column",
    align_items: "flex-end",
    color: "#333",
    background: colors.trans_red,
    psudo: {
      ">p": {
        margin: "0",
        font_size: "12px"
      }
    }
  }
};
