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

import { colors, sec, font } from '../exports.js';

export const header = props => {
  return {
    h1: {
      classList: 'header'
    },
    has: props,
    style: {
      font_family: font.family.head,
      font_size: '2.75rem'
    }
  };
};

export const sectionHeader = props => {
  return {
    h2: {
      classList: 'header'
    },
    has: [props],
    style: {
      justify_content: 'center',
      align_items: 'flex-end',
      font_family: font.family.head,
      font_size: '1.75rem'
    }
  };
};

export const subhead = props => {
  return {
    h5: {
      classList: 'subhead'
    },
    has: [props],
    style: {
      font_family: font.family.head,
      margin_bottom: '15px'
    }
  };
};

export const p = props => {
  return {
    p: {},
    has: [props]
  };
};

export const link = props => {
  return {
    a: {
      classList: props.class || 'link',
      href: props.href || '#'
    },
    has: [props.text || 'click here!'],
    style: {
      width: 'auto',
      color: sec.dark,
      border: `1px solid ${sec.dark}`,
      border_radius: '3px',
      text_decoration: 'none',
      background_image: `linear-gradient(${sec.dark}, ${sec.dark})`,
      background_repeat: 'no-repeat',
      background_position: '120px 0px',
      text_align: 'center',
      align_self: 'flex-end',
      transition: 'all .2s',
      padding: '8px 15px',
      margin: '30px',
      psudo: {
        ':hover': {
          color: sec.light,
          background_position: '0px 0px'
        }
      }
    }
  };
};

export const buttonRow = props => {
  let obj = {
    div: {
      classList: 'buttonRow'
    },
    has: [...props],
    style: {
      width: '100%',
      display: 'flex',
      justify_content: 'space-between'
    }
  };
  if (props.length === 1) {
    obj.div.classList = 'oneButtonRow';
    obj.style.justify_content = 'center';
  }
  return obj;
};

export const d = props => {
  return {
    span: {
      classList: 'declairation'
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
      classList: 'variable'
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
      classList: 'value'
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
      classList: 'tag'
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
      classList: 'function'
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
      classList: 'alt'
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
      classList: 'lineNumber'
    },
    has: [
      (num > 1 ? `\n` : ``) + (num < 10 ? ` ` : ``) + `${num}  ` + (props || '')
    ],
    style: {
      color: colors.code.black
    }
  };
};

export const co = props => {
  return {
    span: {
      classList: 'comment'
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
      classList: 'code'
    },
    has: [...props],
    style: {
      color: colors.code.black,
      white_space: 'pre-wrap',
      font_family: 'Source Code Pro',
      font_size: '12px',
      margin: '15px 20px'
    }
  };
};

export const codeBlock = props => {
  return {
    div: {
      classList: 'codeblock'
    },
    has: [code(props)],
    style: {
      margin: '5px auto 25px',
      max_width: '85%',
      align_self: 'center',
      padding: '20px',
      background: colors.trans_red,
      border_radius: '5px',
      border: `1px solid ${colors.red}`,
      box_shadow: `2px 2px 15px ${colors.gold}`,
      psudo: {
        '>.code': {
          margin: '0 20px'
        }
      }
    }
  };
};

export const clock = {
  p: {
    id: 'clock'
  },
  has: [new Date().toLocaleTimeString()],
  style: {
    text_align: 'center'
  },
  events: {
    click: () => {
      console.log('clicked');
    }
  },
  timers: {
    date() {
      return (clock.int = setInterval(() => {
        console.log('timer fired');
        return clock.setHas([new Date().toLocaleTimeString()]);
      }, 1000));
    }
  }
};

export const container = {
  div: {
    classList: 'container'
  },
  has: [],
  style: {
    min_width: '400px',
    max_width: '900px',
    margin_top: '-10vh',
    padding: '10vh 3vw 0',
    display: 'flex',
    justify_content: 'flex-start',
    flex_direction: 'column',
    overflow: 'hidden'
  }
};

export const main = {
  main: {
    id: 'main'
  },
  has: [container],
  style: {
    width: '100%',
    min_height: '100vh',
    padding: '10vh 5vw 4vh',
    display: 'flex',
    justify_content: 'center',
    background: sec.mid
  }
};

export const footer = {
  div: {
    id: 'footer'
  },
  has: [
    p('{curly.js}'),
    p('Copyright (c) 2019 Evan Magnussen'),
    p('MIT License')
  ],
  style: {
    align_self: 'flex-end',
    min_height: '80px',
    width: '100vw',
    padding: '20px 10vw',
    display: 'flex',
    flex_direction: 'column',
    align_items: 'flex-end',
    color: '#333',
    background: sec.mid,
    psudo: {
      '>p': {
        margin: '0',
        font_size: '12px'
      }
    }
  }
};
