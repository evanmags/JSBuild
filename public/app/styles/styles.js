export const colors = {
  black: "#222",
  trans_red: "#f1c1c166",
  light_red: "#f1e1e1",
  red: "#f1c1c1",
  dark_red: "#d88282",
  yellow: "#f1e9d1",
  dark_yellow: "#ebe0bd",
  gold: "#c9c09b",
  lightgrey: "#989898",
  code: {
    black: '#444',
    grey: "#777",
    red: "#a10101",
    blue: '#010181',
    green: '#018101',
    teal: '#018181',
    orange: '#b18101',
    purple: '#810181'
  }
};

export const sec = {
  light: 'rgb(204, 232, 189)', //spring green
  mid: 'rgb(191, 219, 176)', //spring green - #111111
  dark_green: 'rgb(98, 126, 83)',
  dark: 'rgb(4, 90, 140)', //midnight blue
  black: "#222",
  code_black: "#343434",
  trans_black: '#9998',
  grey: "#a8a8a8",
  dark_grey: "#666" 
};

export const font = {
  family: {
    body: "PT sans, Helvetica",
    code: "Source code pro",
    head: "Laila" },

  size: {
    h1: `2.75rem`,
    h2: `2.25rem`,
    h3: `2rem`,
    h4: `1.65rem`,
    h5: `1.25rem`,
    h6: `.75rem`,
    main: '17px' } 
};

export const styles = {
  "*": {
    margin: 0,
    padding: 0,
    box_sizing: "border-box",
    _webkit_font_smoothing: "antialiased",
    _moz_osx_font_smoothing: "grayscale"
  },
  html:{
    font_size: font.size.main
  },
  body: {
    color: colors.black,
    font_family: font.family.body
  },
  a: {
    color: colors.black,
    text_decoration: "none"
  },
  p: {
    margin_bottom: "15px"
  },
  hr: {
    width: "65%"
  },
  ".red": {
    color: "red"
  },
  ".underline": {
    text_decoration: "underline"
  }
};