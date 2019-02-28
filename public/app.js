const black = "#343434",
  white = "#f1e1e1",
  red = "#f1c1c1",
  lightgrey = "#989898";

const linkBorder = `1px solid`;

const styles = {
  "*": {
    margin: 0,
    padding: 0,
    box_sizing: "border-box",
    _webkit_font_smoothing: "antialiased",
    _moz_osx_font_smoothing: "grayscale"
  },
  ".green": {
    background: "#f1e9d1"
  },
  "#menuButton.active": {
    color: "#d88282",
    background: red,
    font_weight: "bold",
    padding_bottom: `4px`,
    border_top: `4px solid #d88282`,
    border_bottom: "none"
  },
  "#menuButton.hover": {
    color: "#d88282",
    border_top: "none",
    border_bottom: `4px solid #d88282`,
    padding_top: `4px`
  },
  ".codeblock .code": {
    margin: "0 20px"
  },
  hr: {
    width: "85%"
  },
  ".red": {
    color: "red"
  },
  ".underline": {
    text_decoration: "underline"
  }
};

const link = () => {
  return {
    a: {
      id: "link",
      href: "#"
    },
    has: ["click here!"],
    style: {
      color: black,
      border: linkBorder,
      padding: "3px 8px",
      border_radius: "3px",
      text_decoration: "none",
      transition: "all .1s",
      box_shadow: "2px 3px 0 0"
    },
    events: {
      mouseenter: e => {
        e.target.style.color = "#232323";
      },
      mouseleave: e => {
        e.target.style.color = black;
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

const menuButton = ({ ...props }) => {
  return {
    div: {
      id: "menuButton",
      classList: props.class || ""
    },
    has: [props.name],
    style: {
      flex: "1 1 50px",
      max_width: "100px",
      display: "flex",
      justify_content: "center",
      align_items: "center",
      text_transform: "uppercase",
      transition: "all .1s"
    },
    events: {
      mouseenter: e => {
        e.target.classList.toggle("hover");
      },
      mouseleave: e => {
        e.target.classList.toggle("hover");
      },
      click: e => {
        document.querySelectorAll("#menuButton").forEach(li => {
          li.classList.remove("active");
        });
        e.target.classList.toggle("active");
      }
    }
  };
};

const home = menuButton({ name: "home", class: "active" }),
  about = menuButton({ name: "about" }),
  contact = menuButton({ name: "contact" });

about.events.click = e => {
  container.setHas([...aboutContent]);

  document.querySelectorAll("#menuButton").forEach(li => {
    li.classList.remove("active");
  });
  e.target.classList.toggle("active");
};

home.events.click = e => {
  container.setHas([...homeContent]);

  document.querySelectorAll("#menuButton").forEach(li => {
    li.classList.remove("active");
  });
  e.target.classList.toggle("active");
};

const button = link();
button.has = ["Learn More!"];
button.a.href = "#about";
button.style.float = "right";
button.style.padding = "8px 15px";
button.style.margin = "10px 50px 20px";
button.events.click = e => {
  container.setHas([...aboutContent]);

  document.querySelectorAll("#menuButton").forEach(li => {
    li.classList.remove("active");
  });
  document.querySelectorAll("#menuButton")[1].classList.toggle("active");
};

const backButton = link();
backButton.has = ["go back!"];
backButton.a.href = "#home";
backButton.style.float = "left";
backButton.style.padding = "8px 15px";
backButton.style.margin = "10px 50px 20px";
backButton.events.click = e => {
  container.setHas([...homeContent]);

  document.querySelectorAll("#menuButton").forEach(li => {
    li.classList.remove("active");
  });
  document.querySelectorAll("#menuButton")[0].classList.toggle("active");
};

const nextButton = link();
nextButton.has = ["Keep Learning!"];
nextButton.a.href = "#home";
nextButton.style.float = "right";
nextButton.style.padding = "8px 15px";
nextButton.style.margin = "10px 50px 20px";
nextButton.events.click = e => {
  container.setHas([...styleContent]);
};

const buttonRow = props =>{
  return {
    div: {
      classList: 'buttonRow'
    },
    has: [...props],
    style: {
      width: '100%',
      display: 'flex',
      justify_content: 'space-between'
    }
  }
}

const header = props => {
  return {
    h1: {
      classList: "header"
    },
    has: [props]
  };
};

const sectionHeader = props => {
  return {
    h2: {
      classList: "header"
    },
    has: [props]
  };
};

const subhead = props => {
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

const p = props => {
  return {
    p: {},
    has: [props],
    style: {
      margin_bottom: "15px"
    }
  };
};

const code = props => {
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

const codeBlock = props => {
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

const clock = {
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

const banner = {
  div: {
    id: "banner"
  },
  has: [
    header("JSBuild"),
    subhead("Websites built on JS Objects"),
    clock
  ],
  style: {
    margin: "3vh auto 0",
    text_align: "center"
  }
};

const variable = "From Variable";

const func = () => {
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

const sample = {
  h1: {
    id: "sample",
    classList: "red underline"
  },
  has: ["Sample heading"],
  style: {}
};

const sampleBlock = {
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

const homeContent = [
  sectionHeader("Check it out!"),
  subhead("Object oriented compositon of beautiful websites"),
  p(
    "Building beautiful and functional sites and delivering them to the client browser just got a whole lot easier."
  ),
  p(
    "With JSBuild building your next big this is as simple as building a JavaScript object or JSON file. Why fuss with potentially massive file bases to build a site that could by any measure be served through API call."
  ),
  p("Simply link JSBuild in the head of your .html:"),
  code(`<script src='your/path/to/JSBuild.js'><script>`),
  p("then just before the closing body tag link:"),
  code(`<script src='/path/to/your/app.js'><script>`),
  p(
    "Or you can make an API call from a script tag to deliver your app via .json file"
  ),
  button
];

const aboutContent = [
  sectionHeader( "About JSBuild" ),
  subhead("Building Components"),
  p(
    "Components in JSBuild are JavaScript objects. This opens a world of possibility for what you can do. Constructing complex, self-contained components bocomes very simple but to start we will build an 'h1' element."
  ),
  p("To begin, lets define our component:"),
  codeBlock(`const sample = {}`),
  p(
    "Since we are dont want to be able to reassign the name of our component later in our app we use the 'const' declairation"
  ),
  p(
    "Now in order to render anything to the page we are required to declare an element object inside of our component"
  ),
  codeBlock(
    `const sample = {
      h1:{
        id:'header'
        classList:'red underline'
      }
    }`
  ),
  p(
    "This element object should contain any and all attributes that you wish to pass to the rendered element. Just make sure that they are formatted as you would see when declaring for any element you pull from the DOM. (i.e. id, classList, ect.) since the elements are created using node[attribute] = 'value'."
  ),
  p(
    "Now we will give our element something to display. For this we build a 'has' object which is an array. We can place anything we would like inside of any element including other components, functions, strings, and variables."
  ),
  p(
    `For example, here we've taken our 'sample' element and placed it inside of a div called 'sampleBlock'.`
  ),
  codeBlock(
    `const sampleBlock = {
      div: {
        id: 'sampleBlock'
      },
      has: [sample, { hr: {} }, variable, func()],
    }`
  ),
  p("All of these will work and below you can see the rendered component"),
  sampleBlock,
  p(
    "Note that the order of elements in the 'has' array dictates the order in which elements are rendered to and appear on the page."
  ),
  p("In the next section we will learn more about styling components"),
  buttonRow([backButton, nextButton])
];

const styleContent = ["i did it!", backButton];

const container = {
  div: {
    id: "blue",
    classList: "green"
  },
  has: [...homeContent],
  style: {
    width: "82vw",
    max_width: "1100px",
    margin: "1vh auto",
    padding: "15px 30px",
    box_shadow: `1px 1px 8px 0 ${red}`,
    transition: `transform .2s, box-shadow .2s`,
    overflow: "hidden"
  }
};

const menu = {
  div: {
    id: "menu"
  },
  has: [home, about, contact],
  style: {
    position: "fixed",
    top: "0",
    height: "50px",
    width: "100vw",
    padding: '0 10vw',
    display: "flex",
    color: "#333",
    box_shadow: `3px 0 3px ${red}`,
    background: "#f1e9d1"
  }
};

const app = {
  div: {
    id: "app"
  },
  has: [menu, banner, container],
  style: {
    background: white,
    min_height: "100vh",
    padding: "50px 0 30px",
    display: "flex",
    flex_direction: "column",
    font_family: "Laila"
  }
};

render(app, document.querySelector("body"));
style(styles);
